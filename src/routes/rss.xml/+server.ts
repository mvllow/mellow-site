import { parseMarkdownDir } from '$lib/markdown';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ setHeaders }) => {
	const feed = {
		title: 'mellow',
		baseUrl: import.meta.env.DEV
			? 'http://localhost:5173'
			: 'https://mellow.dev',
	};

	const posts = parseMarkdownDir('src/content')
		.map((post) => {
			return {
				...post,
				content: post.content
					// Replace relative urls with absolute urls
					.replaceAll(
						'href="#',
						`href="${feed.baseUrl}/writing/${post.metadata.slug}#`
					)
					.replaceAll('href="/"', `href="${feed.baseUrl}`)
					.replaceAll('href="/', `href="${feed.baseUrl}/`)
					.replaceAll('src="/', `src="${feed.baseUrl}/`),
			};
		})
		.sort(
			(a, b) =>
				new Date(b.metadata.date).getTime() -
				new Date(a.metadata.date).getTime()
		);

	setHeaders({
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/atom+xml',
	});

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${feed.title}</title>
        <link>${feed.baseUrl}</link>
        <atom:link href="${
					feed.baseUrl
				}/rss.xml" rel="self" type="application/rss+xml" />
        <description>Thoughts and stories about simpler living</description>
        <image>
          <url>${feed.baseUrl}/favicon.gif</url>
          <title>${feed.title}</title>
          <link>${feed.baseUrl}</link>
        </image>
        ${posts
					.map(
						(post) => `<item>
          <title>${post.metadata.title}</title>
          <link>${feed.baseUrl}/writing/${post.metadata.slug}</link>
          <guid isPermaLink="false">${post.metadata.slug}</guid>
          <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
          <description>
            <![CDATA[<p>${post.metadata.description}</p>${post.content}]]>
          </description>
        </item>`
					)
					.join('')}
      </channel>
    </rss>`;

	return new Response(body);
};

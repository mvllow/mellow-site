import { parseMarkdownDir } from '$lib/markdown';
import type { RequestHandler } from './__types/rss.xml';

export const get: RequestHandler = async () => {
	const feed = {
		title: 'mellow',
		link: import.meta.env.DEV ? 'http://localhost:3000' : 'https://mellow.dev',
	};

	const posts = parseMarkdownDir('src/content')
		.map((post) => {
			return {
				...post,
				content: post.content
					// Replace relative urls with absolute urls
					.replaceAll('href="#', `href="${feed.link}#`)
					.replaceAll('href="/', `href="${feed.link}/`)
					.replaceAll('src="/', `src="${feed.link}/`),
			};
		})
		.sort(
			(a, b) =>
				new Date(b.metadata.date).getTime() -
				new Date(a.metadata.date).getTime()
		);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/atom+xml',
	};

	return {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${feed.title}</title>
		<link>${feed.link}</link>
		<atom:link href="${feed.link}/rss.xml" rel="self" type="application/rss+xml" />
		<description>Thoughts and stories about simpler living</description>
		<image>
			<url>${feed.link}/favicon.gif</url>
			<title>${feed.title}</title>
			<link>${feed.link}</link>
		</image>
		${posts
			.map(
				(post) => `<item>
			<title>${post.metadata.title}</title>
			<guid isPermaLink="false">${post.metadata.slug}</guid>
			<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
			<description>
				<![CDATA[<p>${post.metadata.description}</p>${post.content}]]>
			</description>
		</item>`
			)
			.join('')}
	</channel>
</rss>`,
	};
};

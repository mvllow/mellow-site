import { parseMarkdown } from '$lib/markdown';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	console.log({ params });
  if(!params?.path){
    return error()
  }
	const post = parseMarkdown(`src/content/${params.path}.md`);

	if (!post) {
		return { status: 404 };
	}

	return {
		stuff: {
			crumbs: [
				{ text: 'Writing', href: '/writing' },
				{
					text: post.metadata.title,
					href: `/writing/${post.metadata.slug}`,
				},
			],
		},
		body: { post },
	};
};

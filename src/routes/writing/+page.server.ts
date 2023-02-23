import type { PageServerLoad } from './$types';
import { parseMarkdownDir } from '$lib/markdown';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const crumbs = [{ text: 'Writing', href: '/writing' }];
	const posts = parseMarkdownDir('src/content');

	if (!posts) {
		return { status: 404 };
	}

	return {
		stuff: { crumbs },
		body: {
			posts,
		},
	};
};

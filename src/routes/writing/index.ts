import { parseMarkdownDir } from '$lib/markdown';
import type { RequestHandler } from './__types';

export const GET: RequestHandler = async () => {
	const posts = parseMarkdownDir('src/content');

	if (!posts) {
		return { status: 404 };
	}

	return {
		body: { posts },
	};
};

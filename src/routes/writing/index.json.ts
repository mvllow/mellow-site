import { parseMarkdownDir } from '$lib/markdown';
import type { RequestHandler } from './__types/index.json';

export const get: RequestHandler = async () => {
	const posts = parseMarkdownDir('src/content');

	return posts ? { body: posts } : { status: 404 };
};

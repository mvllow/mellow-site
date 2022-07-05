import { parseMarkdown } from '$lib/markdown';
import type { RequestHandler } from './__types/[slug].json';

export const get: RequestHandler = async ({ params }) => {
	const post = parseMarkdown(`src/content/${params.slug}.md`);

	return post ? { body: post } : { status: 404 };
};

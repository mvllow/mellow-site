import { parseMarkdown } from '$lib/markdown';
import type { RequestHandler } from './__types/[slug]';

export const get: RequestHandler = async ({ params }) => {
	const post = parseMarkdown(`src/content/${params.slug}.md`);

	if (!post) {
		return { status: 404 };
	}

	return {
		body: { post },
	};
};

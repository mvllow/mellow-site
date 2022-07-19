import { parseMarkdown } from '$lib/markdown';
import type { RequestHandler } from './__types/[path]';

export const GET: RequestHandler = async ({ params }) => {
	const post = parseMarkdown(`src/content/${params.path}.md`);

	if (!post) {
		return { status: 404 };
	}

	return {
		body: { post },
	};
};

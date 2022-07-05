import fs from 'node:fs';
import { marked } from 'marked';

export interface Metadata {
	title: string;
	description: string;
	date: string;
	slug: string;
	locale?: 'en' | 'it' | 'fr';
}

export interface Result {
	metadata: Metadata;
	content: string;
}

function extractFrontmatter(text: string) {
	const regex = /---\r?\n([\s\S]+?)\r?\n---/;
	const [notFrontmatter, frontmatter] = regex.exec(text) ?? ['', ''];
	const content = text.slice(notFrontmatter.length);

	const metadata = {} as Omit<Metadata, 'slug'>;
	frontmatter.split('\n').forEach((pair) => {
		const colonIndex = pair.indexOf(':');
		// @ts-ignore type 'string' can't be used to index type 'Frontmatter'
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}

function linkRenderer(href: string, title: string, text: string) {
	const targetAttr = href.startsWith('http') ? ' target="_blank"' : '';
	const titleAttr = title !== null ? ` title="${title}"` : '';

	return `<a href="${href}"${targetAttr}${titleAttr} rel="noopener noreferrer">${text}</a>`;
}

export function parseMarkdown(filename: string) {
	const data = fs.readFileSync(filename, 'utf-8');
	const { metadata, content } = extractFrontmatter(data);
	const slug = filename.substring(filename.lastIndexOf('/') + 1).slice(0, -3);
	const renderer = new marked.Renderer();

	renderer.link = linkRenderer;

	return {
		metadata: { ...metadata, slug },
		content: marked(content, { renderer }),
	};
}

export function parseMarkdownDir(dir: string) {
	return fs
		.readdirSync(dir)
		.filter((filename) => /.+\.md$/.test(filename))
		.map((filename) => parseMarkdown(`${dir}/${filename}`));
}

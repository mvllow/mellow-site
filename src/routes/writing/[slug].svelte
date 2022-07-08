<script context="module" lang="ts">
	import type { Load } from './__types/[slug]';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch(`${params.slug}.json`);
		const post = await response.json();
		const crumbs = [
			{ text: 'Writing', href: '/writing' },
			{ text: post.metadata.title, href: post.metadata.slug },
		];

		return {
			props: { post },
			stuff: { crumbs },
		};
	};
</script>

<script lang="ts">
	import Link from '$lib/link.svelte';
	import type { Result as Post } from '$lib/markdown';

	export let post: Post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description} />
</svelte:head>

<h1 class="sr-only">Writing</h1>

<article>
	<h2>{post.metadata.title}</h2>
	<p>{post.metadata.description}</p>

	<div class="content">
		{@html post.content}
	</div>
</article>

<hr />

<div class="space-y-2">
	{#if post.metadata.locale}
		<p class="text-f-med">
			<em
				>This article was written by a non-native speaker. Feedback is welcome
				and appreciated.</em
			>
		</p>
	{/if}

	<Link
		href="https://github.com/mvllow/mellow-site/edit/main/src/content/{post
			.metadata.slug}.md">Edit this page</Link
	>
</div>

<style lang="postcss" global>
	.content {
		& [id] {
			@apply scroll-mt-header-height;
		}

		& h1 {
			@apply text-xl font-semibold tracking-tight sm:text-2xl;
		}

		& > * {
			@apply mt-[28px];
		}

		& h1,
		& h2,
		& h3,
		& h4,
		& h5,
		& h6 {
			@apply mt-[56px];
		}

		& h2,
		& h3,
		& h4,
		& h5,
		& h6 {
			@apply font-medium;
		}

		& > p {
			@apply leading-relaxed;
		}

		& em {
			@apply font-serif;
		}

		& blockquote {
			@apply border-l-2 border-f-med pl-3 leading-tight text-f-med;
		}

		& ol {
			@apply list-decimal pl-[18px] leading-relaxed;
		}

		& ul {
			@apply list-disc pl-[18px] leading-relaxed;
		}

		& a:before,
		& a:after {
			color: var(--f-med);
		}

		& a:before {
			content: '{';
		}

		& a:after {
			content: '}';
		}

		& a[target='_blank']:before {
			content: '[';
		}

		& a[target='_blank']:after {
			content: ']';
		}

		& a:hover {
			text-decoration: underline;
			text-decoration-color: var(--f-med);
		}
	}
</style>

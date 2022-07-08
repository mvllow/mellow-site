<script context="module" lang="ts">
	import type { Load } from './__types';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch(`/writing.json`);
		const crumbs = [{ text: 'Writing', href: '/writing' }];

		return {
			props: { posts: response.ok && (await response.json()) },
			stuff: { crumbs },
		};
	};
</script>

<script lang="ts">
	import Link from '$lib/link.svelte';
	import type { Result as Post } from '$lib/markdown';

	export let posts: Post[];

	const sortedPosts = posts.sort(
		(a, b) =>
			new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
</script>

<svelte:head>
	<title>Writing</title>
	<meta name="description" content="A garden of discovery and creation." />
</svelte:head>

<section>
	<h1>Writing</h1>

	<ol class="leading-loose">
		{#each sortedPosts as post}
			<li>
				<span class="text-sm text-f-med">{post.metadata.date}&nbsp;</span>
				<Link href="/writing/{post.metadata.slug}">{post.metadata.title}</Link>
			</li>
		{/each}
	</ol>
</section>

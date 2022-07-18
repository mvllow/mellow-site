<script context="module" lang="ts">
	import type { Load } from './__types';

	export const load: Load = async ({ props }) => {
		const crumbs = [{ text: 'Writing', href: '/writing' }];

		return {
			props,
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
	<link
		rel="alternative"
		type="application/rss+xml"
		title="RSS"
		href="/rss.xml"
	/>
</svelte:head>

<section>
	<h1 class="headline">Writing</h1>

	<ol>
		{#each sortedPosts as post}
			<li>
				<time class="text-sm tabular-nums text-f-med"
					>{post.metadata.date}&nbsp;</time
				>
				<Link href="/writing/{post.metadata.slug}">{post.metadata.title}</Link>
			</li>
		{/each}
	</ol>
</section>

<script lang="ts">
	import Link from '$lib/link.svelte';
	import type { Result as Post } from '$lib/markdown';
	import type { PageData } from './$types';

	export let data: PageData;

	export let post = <Post>(data.body?.post || {});
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description} />
</svelte:head>

<article lang={post.metadata.locale}>
	<h1 class="headline">{post.metadata.title}</h1>
	<p>{post.metadata.description}</p>

	{@html post.content}
</article>

<hr />

<div class="space-y-3">
	{#if post.metadata.locale !== 'en'}
		<p>
			<em
				>This article was written by a non-native speaker. Feedback is welcome
				and appreciated.</em
			>
		</p>
	{/if}

	<div>
		<Link
			href="https://github.com/mvllow/mellow-site/edit/main/src/content/{post
				.metadata.slug}.md">Suggest changes to this page</Link
		>
	</div>
</div>

<style lang="postcss">
	article :global(h2) {
		@apply text-base font-semibold tracking-tight sm:text-lg;
	}

	article :global(h3) {
		@apply font-serif text-base font-medium italic;
	}

	article :global(ul) {
		@apply list-disc pl-[18px];
	}

	article :global(ol) {
		@apply list-decimal pl-[18px];
	}

	article :global(blockquote) {
		@apply border-l-2 border-f-med pl-3 text-f-med;
	}

	article :global(figure > figcaption) {
		@apply mt-3.5 text-xs;
	}
</style>

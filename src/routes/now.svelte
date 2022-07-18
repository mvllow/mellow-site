<script context="module" lang="ts">
	import type { Load } from './__types';

	export const load: Load = async () => {
		const crumbs = [{ text: 'Now', href: '/now' }];

		return {
			stuff: { crumbs },
		};
	};
</script>

<svelte:head>
	<title>Now</title>
	<meta name="description" content="Ora e dopo." />
</svelte:head>

<section>
	<h1 class="sr-only">mellow journal</h1>
	<p class="headline">Now</p>

	<article>
		<h2>2022-07-16 A tomato</h2>
		<p>
			I ate a tomato from the ground from a newly found community garden. Pure
			joy. A simple, natural process that gets swept up by the unnecessary
			distractions of society. Take me back in time, please.
		</p>
	</article>

	<article>
		<h2>2022-07-04 Digital garden</h2>
		<p>
			Started a personal website redesign with no javascript, small images, and
			a focus on sustainability and sharing my journey. Embracing functional
			minimalism.
		</p>
	</article>
</section>

<style lang="postcss">
	article > *,
	section > * {
		@apply mt-7;
	}

	article > h2 {
		@apply mt-14 text-base font-semibold tracking-tight sm:text-lg;
	}
</style>

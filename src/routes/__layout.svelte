<script>
	import Breadcrumbs from '$lib/breadcrumbs.svelte';
	import WebringSigil from '$lib/webring-sigil.svelte';
	import '../app.css';
</script>

<header style="--layer: 10">
	<div
		aria-hidden="true"
		class="absolute top-[-1000px] left-0 z-[calc(var(--layer)+1)] h-[calc(1000px+var(--page-top))] w-full bg-b-low"
	/>

	<div
		class="fixed top-0 left-0 z-[var(--layer)] flex h-header-height w-full items-center border-b px-page-gutter before:absolute before:inset-0 before:z-[-1] before:bg-b-low [@supports(backdrop-filter:blur(0))]:before:bg-b-low-a [@supports(backdrop-filter:blur(0))]:before:backdrop-blur-md"
	>
		<div class="mx-auto flex w-full max-w-content items-center">
			<Breadcrumbs />
		</div>
	</div>
</header>

<main class="flex justify-center px-page-gutter py-page-top">
	<div class="min-h-content w-full max-w-content space-y-10 sm:space-y-20">
		<Breadcrumbs />

		<slot />
	</div>
</main>

<footer
	class="flex h-footer-height items-center justify-center border-t px-page-gutter"
>
	<div
		class="flex w-full max-w-content flex-col-reverse items-center justify-between gap-3 sm:flex-row sm:gap-0"
	>
		<p class="text-sm text-f-med">
			<em>Per favore ama tutti.</em>
		</p>

		<nav>
			<ul class="flex items-center space-x-3 sm:space-x-6">
				<li>
					<a
						href="/about"
						class="text-sm tracking-wide text-f-med hover:text-f-high">About</a
					>
				</li>
				<li>
					<a
						href="/now"
						class="text-sm tracking-wide text-f-med hover:text-f-high">Now</a
					>
				</li>
				<li>
					<a
						href="/writing"
						class="text-sm tracking-wide text-f-med hover:text-f-high"
						>Writing</a
					>
				</li>
				<li>
					<a
						href="/rss.xml"
						class="text-sm tracking-wide text-f-med hover:text-f-high">RSS</a
					>
				</li>
				<li>
					<a
						href="https://webring.xxiivv.com/#random"
						target="_blank"
						class="text-f-med hover:text-f-high"
						aria-label="xxiivv webring"
					>
						<WebringSigil />
					</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>

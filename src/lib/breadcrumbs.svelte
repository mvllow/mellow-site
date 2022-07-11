<script>
	import { page } from '$app/stores';

	$: crumbs = [{ text: 'mellow', href: '/' }, ...($page.stuff.crumbs ?? [])];
</script>

<nav>
	<ol class="flex items-center">
		{#each crumbs as { text, href }}
			{@const selected = text === crumbs[crumbs.length - 1].text}

			<li
				class="text-md lowercase after:text-f-med last:truncate [&:not(:last-child)]:after:mx-[1ch] [&:not(:last-child)]:after:content-['/'] {selected
					? 'font-serif italic'
					: ''}"
			>
				<a
					href={selected ? '#' : href}
					aria-label={selected ? 'Return to top of page' : undefined}
					class="focus:underline focus:outline-none">{text}</a
				>
			</li>
		{/each}
	</ol>
</nav>

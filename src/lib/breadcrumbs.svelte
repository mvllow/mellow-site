<script>
	import { page } from '$app/stores';

	$: crumbs = [{ text: 'mellow', href: '/' }, ...($page.stuff.crumbs ?? [])];
</script>

<ol class="flex items-center">
	{#each crumbs as { text, href }}
		{@const selected = text === crumbs[crumbs.length - 1].text}

		<li
			class="text-md lowercase after:text-f-med last:truncate [&:not(:last-child)]:after:mx-[1ch] [&:not(:last-child)]:after:content-['/']"
			class:font-serif={selected}
			class:italic={selected}
		>
			<a href={selected ? '#' : href}>{text}</a>
		</li>
	{/each}
</ol>

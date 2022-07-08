<script>
	export let href = '';

	let isExternal = href.startsWith('http');
</script>

<a
	{href}
	rel={isExternal ? 'external' : undefined}
	target={isExternal ? '_blank' : undefined}
	class="link"><slot /></a
>

<script>
	export let href = '';

	let isExternal = href.startsWith('http');
</script>

<a {href} target={isExternal ? '_blank' : undefined} class="link"><slot /></a>

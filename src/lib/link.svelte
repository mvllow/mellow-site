<script>
	export let href = '';

	let isExternal = href.startsWith('http');
</script>

<a
	{href}
	rel={isExternal ? 'external' : undefined}
	target={isExternal ? '_blank' : undefined}><slot /></a
>

<style>
	a:before,
	a:after {
		color: var(--f-med);
	}

	a:before {
		content: '{';
	}

	a:after {
		content: '}';
	}

	a[target='_blank']:before {
		content: '[';
	}

	a[target='_blank']:after {
		content: ']';
	}

	a:hover {
		text-decoration: underline;
		text-decoration-color: var(--f-med);
	}
</style>

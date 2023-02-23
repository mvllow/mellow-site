import type { PageLoad } from './$types';

export const prerender = true

export const load: PageLoad = async () => {
	const crumbs = [{ text: 'Now', href: '/now' }];
	return {
		stuff: { crumbs },
	};
};


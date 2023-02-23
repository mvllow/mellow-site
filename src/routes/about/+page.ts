import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const crumbs = [{ text: 'About', href: '/about' }];

	return {
		stuff: { crumbs },
	};
};

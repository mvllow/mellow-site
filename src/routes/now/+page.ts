import type { PageLoad } from './$types';


export const load: PageLoad = async () => {
	const crumbs = [{ text: 'Now', href: '/now' }];
	return {
		stuff: { crumbs },
	};
};


export const layout = "layouts/base.njk";
export const eleventyComputed = {
	crumbs: (data) => data.page.url !== "/" && [{ title: data.title, href: "#" }],
};

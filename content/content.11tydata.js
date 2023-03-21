module.exports = {
	layout: "layouts/base.njk",
	eleventyComputed: {
		crumbs: (data) =>
			data.page.url !== "/" && [{ title: data.title, href: "#" }],
	},
};

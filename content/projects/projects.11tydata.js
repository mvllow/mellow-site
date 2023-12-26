module.exports = {
	tags: ["projects"],
	layout: "layouts/post.md",
	eleventyComputed: {
		crumbs: (data) => [
			{ title: "projects", href: "/projects" },
			{ title: data.title, href: "#" },
		],
	},
};

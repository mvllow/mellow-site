module.exports = {
	tags: ["posts"],
	layout: "layouts/post.md",
	eleventyComputed: {
		crumbs: (data) => [
			{ title: "writing", href: "/writing" },
			{ title: data.title, href: "#" },
		],
	},
};

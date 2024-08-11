export const tags = ["posts"];
export const layout = "layouts/post.md";
export const eleventyComputed = {
	crumbs: (data) => [
		{ title: "writing", href: "/writing" },
		{ title: data.title, href: "#" },
	],
};

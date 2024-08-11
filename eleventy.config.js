import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { EleventyHtmlBasePlugin, IdAttributePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./tailwind.config.js");
	eleventyConfig.addWatchTarget("./style.css");

	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
			format || "yyyy-LL-dd",
		);
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg}");
	eleventyConfig.addWatchTarget("style.css");

	eleventyConfig.setLayoutResolution(false);

	return {
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "content",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
	};
}

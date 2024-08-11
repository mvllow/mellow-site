import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginDrafts from "./eleventy.config.drafts.js";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import markdownItLinkAttributes from "markdown-it-link-attributes";

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./tailwind.config.js");
	eleventyConfig.addWatchTarget("./style.css");

	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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

	eleventyConfig.amendLibrary("md", (mdLib) =>
		mdLib.use(markdownItLinkAttributes, {
			matcher(href, config) {
				return href.startsWith("http");
			},
			attrs: {
				target: "_blank",
				rel: "noopener noreferrer",
			},
		}),
	);

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

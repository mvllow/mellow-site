export default {
	plugins: {
		"tailwindcss/nesting": {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
	},
};

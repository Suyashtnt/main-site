const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");

const defaults = {
	style: "sass",
};

module.exports = {
	preprocess: [
		sveltePreprocess({ defaults, postcss }),
	],
};

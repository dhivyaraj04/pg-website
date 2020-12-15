const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
module.exports = withTypescript(withSass());
module.exports = withSass({
	exportPathMap: function() {
		return {
			"/": { page: "/" }
		};
	}
});
const withImages = require("next-images");
module.exports = withImages({
	inlineImageLimit: false,
	fileExtensions: ["jpg", "jpeg", "png", "gif"],
	webpack(config, options) {
		return config;
	}
});

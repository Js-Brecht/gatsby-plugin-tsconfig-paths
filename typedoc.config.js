const path = require("path");

const themePath = path.resolve(path.join(".", "theme"));

/**
 * @type {import("typedoc").TypeDocOptions}
 */
module.exports = {
	entryPoints: ["./src/types.ts", "./src/gatsby-node.ts"],
	out: "docs",
	compilerOptions: {
		target: "es6",
	},
	theme: "hierarchy",
	readme: "README.md",
	// mode: "file",
	searchInComments: true,
	hideGenerator: true,
	excludeNotDocumented: true,
	excludeExternals: true,
	excludeInternal: true,
	excludeProtected: false,
	excludePrivate: true,
};

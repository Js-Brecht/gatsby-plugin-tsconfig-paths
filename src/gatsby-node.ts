import path from "path";
import pick from "lodash/pick";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { CreateWebpackConfigArgs } from "gatsby";
import { PluginOptions, ValidPluginOptions, WebpackConfigFn } from "./types";

/**
 * These are the lists of extensions for this plugin to process
 * Currently, it is processing all `typescript` and `javascript`,
 * since that is assumed to be how typescript will be loaded by
 * Gatsby.
 *
 * The `extensions` option of of this plugin should match the general
 * webpack resolution.
 * * References: `['.ts', '.tsx', '.js', '.jsx']`
 *
 * @returns {string[]} Array of valid file extensions
 */
export const resolvableExtensions = (): string[] => [
	".ts",
	".tsx",
	".js",
	".jsx",
];

/**
 * Sets up the webpack configuration to use `tsconfig-paths-webpack-plugin`, which will
 * add aliases for webpack that will match what is found in the `tsconfig.json`.
 *
 * @remarks Default options
 * * `configFile` will be set to the tsconfig.json found in the process's current working directory.
 * * `extensions` will match `resolvableExtensions()` from this plugin/
 * @param {CreateWebpackConfigArgs} actions The actions passed in by Gatsby
 * @param {PluginOptions} pluginOptions The plugin options defined by the user
 * @internal
 */
export const onCreateWebpackConfig: WebpackConfigFn = (
	{ actions }: CreateWebpackConfigArgs,
	pluginOptions?: PluginOptions,
): void => {
	const defaultOptions: Partial<PluginOptions> = {
		configFile: path.join(process.cwd(), "tsconfig.json"),
		extensions: resolvableExtensions(),
	};

	if (pluginOptions) {
		// Omit keys that are not going to be used by tsconfig-paths-webpack-plugin
		pluginOptions = pick(pluginOptions, ...ValidPluginOptions);
	}

	// Compile the loader options.  If additional options are included
	// by the end user, then override the defaults with them.
	const options = Object.assign({}, defaultOptions, pluginOptions);

	actions.setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin(options)],
		},
	});
};

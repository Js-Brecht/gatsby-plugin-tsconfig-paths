import { Options as TsconfigPathsOptions } from "tsconfig-paths-webpack-plugin/lib/options";
import {
	CreateWebpackConfigArgs,
	PluginCallback,
	PluginOptions as GatsbyPluginOptions,
} from "gatsby";
import { keys } from "ts-transformer-keys";

export type { TsconfigPathsOptions };

export interface PluginOptions extends TsconfigPathsOptions {}
export const ValidPluginOptions = keys<TsconfigPathsOptions>();

/**
 * Same interface that gatsby uses for the `onCreateWebpackConfig()` function
 * @internal
 */
export type WebpackConfigFn = (
	args: CreateWebpackConfigArgs,
	options?: PluginOptions & GatsbyPluginOptions,
	callback?: PluginCallback
) => void;

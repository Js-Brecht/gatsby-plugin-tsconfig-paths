import { Options as TsconfigPathsOptions } from 'tsconfig-paths-webpack-plugin/lib/options';
import { CreateWebpackConfigArgs, PluginOptions as GatsbyPluginOptions, PluginCallback } from 'gatsby';
import { keys } from 'ts-transformer-keys';

export interface PluginOptions extends TsconfigPathsOptions { }
export const ValidPluginOptions = keys<TsconfigPathsOptions>() as string[];

/**
 * Same interface that gatsby uses for the `onCreateWebpackConfig()` function
 */
export type WebpackConfigFn = (
    args: CreateWebpackConfigArgs,
    options?: PluginOptions & GatsbyPluginOptions,
    callback?: PluginCallback
) => void;

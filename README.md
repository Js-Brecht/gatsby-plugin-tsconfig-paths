# TSConfig Paths plugin for Gatsby

## Description

This plugin will provide support for paths configured in your tsconfig by using
`tsconfig-paths-webpack-plugin`.

---

## How to install

* Install `gatsby-plugin-tsconfig-paths` in your project

```shell
npm install -D gatsby-plugin-tsconfig-paths
```

* Include the plugin in your `gatsby-config.js`.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    ...,
    `gatsby-plugin-tsconfig-paths`
  ]
}
```

* Configure using any of [`tsconfig-paths-webpack-plugin`'s](https://github.com/dividab/tsconfig-paths-webpack-plugin#options) options

---

## Available Options

* For list of `options` that are available for this plugin, see the
`tsconfig-paths-webpack-plugin` documentation at the following:

> <https://github.com/dividab/tsconfig-paths-webpack-plugin#options>

for example:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    ...,
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
        colors: false
      },
    }
  ]
}
```

## Default options

* `configFile`: Defaults to the `tsconfig.json` located at your process's
current working directory.
* `extensions`: Defaults to ['.ts', '.tsx', '.js', '.jsx'].

## Additional information

According to the documentation for `tsconfig-paths-webpack-plugin`, if
the tsconfig option `allowJs` is set, then this plugin's `extensions` option should
be set to match `webpack`'s.  Because typescript transpiling is usually done
in the same set of loaders as javascript, this plugin will set the webpack
extensions to match the default described above, using the `resolvableExtensions`
endpoint.

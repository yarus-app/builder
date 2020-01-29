# [Yarus](https://github.com/yarus-app)/[builder](https://github.com/yarus-app/builder)

Blazing fast, zero configuration node app and libs builder

## Getting Started

### Installing

For [Builder](https://github.com/yarus-app/builder) itself installation is done by executing one command.

```bash
npm install --save-dev @yarus/builder
```

Dependending on your transpiling needs you need Babel with the requires presets/plugins. This is nothing extra to install typically as you might have these things in-place already. Example:

```bash
npm install --save-dev @babel/core @babel/plugin-external-helpers @babel/plugin-transform-runtime
```


## Usage

### Command Line Interface

[Builder](https://github.com/yarus-app/builder) comes with a binary which can be called from within your scripts section in the `package.json` file.

```package.json
"scripts": {
  "prepare": "preppy"
}
```

There is also some amount of parameters you can use if the auto detection of your library does not work out correctly.

  * `--root`          `auto`  The root folder of your project
  * `--output`        `auto`  Override output folder (and package.json entries)
  * `--watch`         `false` Keeps running and rebuilds on any change
  * `--no-sourcemap`  `false` Disables creation of a source map file during processing
  * `-v`, `--verbose` `false` Verbose output mode
  * `-h`, `--help`            Get help
  * `--run`                   Executes the generated binary after creation

### Binary Output(s)

`src/cli/{cliname}/index.js`
`src/cli/{cliname}.js`
`src/cli/index.js`
`src/cli.js`

### Environment Settings

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

---

Made with ❤️ by [Yaroslav Usenko](https://github.com/yar-usenko). It is free software, and may be redistributed under the [MIT License](LICENSE.md) detailed in the [LICENSE.md](LICENSE.md) file.

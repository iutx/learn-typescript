### prepare

initialize project.

```shell
npm init -y
```

### webpack

1. install dependency

```shell
cnpm i -D webpack webpack-cli typescript ts-loader
```

2. describe webpack config
3. describe tsconfig.json
4. add build command to package.json

```json
  "scripts": {
    "build": "webpack"
  },
```

5. run build

```shell
npm run build
```

### html webpack plugin

1. install  html-webpack-plugin

generate html file automatic.

```shell
cnpm i -D html-webpack-plugin
```

2. configuration webpack.config.js

```js
// import html webpack plugin
const  HtmlWebpackPlugin = require('html-webpack-plugin');
```

```js
module.exports = {
  ...
  // configuration html webpack plugin
  plugins: [
      new HtmlWebpackPlugin(),
  ]
}
```

3. run build will generate html in dist

```shell
npm run build

# ./dist/index.html
# <!doctype html><html><head><meta charset="utf-8"><title>Webpack App</title><meta name="viewport" content="width=device-width,initial-scale=1"><script defer="defer" src="bundle.js"></script></head><body></body></html>
```

4. configuration personal config in generation html

example 1: custom title instead default value `Webpack App`

```js
module.exports = {
  ...
  // configuration html webpack plugin
  plugins: [
      new HtmlWebpackPlugin({
        title: "My Application",
      }),
  ]
}
```

example 2: use html template

```js
module.exports = {
  ...
  // configuration html webpack plugin
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
  ]
}
```


### webpack dev server

:::tips
Use vscode live server better.
:::

1. install

```shell
cnpm i -D webpack-dev-server
```

2. configuration command in `package.json`, e.g. dev

```shell
"scripts": {
  ...
  "dev": "webpack server"
}

npm run dev
```

3. visit with tips

```shell
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8082/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.123.139:8082/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8082/
```


### clean webpack plugin

Will clean dist directory first when build.

1. install

```shell
cnpm i -D clean-webpack-plugin
```

2. import in webpack.config.js

```js
// import clean webpack plugin
const {ClearWebpackPlugin} = require('clean-webpack-plugin');
```

```js
module.exports = {
  ...
  // configuration html webpack plugin
  plugins: [
      ...
      new ClearWebpackPlugin(),
  ]
}
```

### configuration resolve extensions

1. create module file named `module1.ts`

```ts
export const hello = "Hello World!";
```

2. import in index.js

```ts
import {hello} from "./module1";

console.log(hello);
```

3. configuration `.ts` and `.js` can be a module in webpack.config.js

```js
module.exports = {
  ...
  resolve: {
    extensions: ['.js', '.ts']
  }
}
```

4. build

```shell
npm run build
```


### babel

Compatibility ES version.

1. install 

```shell
cnpm i -D @babel/core @babel/preset-env babel-loader core-js
```

2. configuration

Add babel loader

```js
module.exports = {
  ...
  module: {
      rules: [
          {
              ...
              use: {
                  loader: "babel-loader",
                  options: {
                  // preset env
                      presets: [
                          [
                              // specified env plugin
                              "@babel/preset-env",
                              // configuration
                              {
                                  // target browser version
                                  targets: {
                                      "chrome": "88",
                                  },
                                  // core-js version
                                  "corejs": "3",
                                  // the method of use core-js
                                  "useBuiltIns": "usage",
                              }
                          ]
                      ]
                  }
              },
              'ts-loader'
          }
      ]
  }
}
```

setting `targets`, const in ts will render const

```js
targets: {
  "chrome": "88",
  "ie": "11",
},
```

if targets add ie 11, const will render to var.

3. arrow function disabled

`=>` can't use in ie, set arrowFunction is false will disabled.

```js
module.exports = {
  ...
  output: {
    enviorment: {
      arrowFunction: false,
    }
  },
}
```



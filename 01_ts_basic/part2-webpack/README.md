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
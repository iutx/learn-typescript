Watch file changed, build automatic.
```shell
tsc xxx.ts -w 
```

If directory had tsconfig.json
- you can use `tsc` to build all *.ts.
- use `tsc -w` to watch all *.ts changed and build automatic.

tsconfig.json: ts compiler config
```json
{
    // specify which .ts files need to compile
    "include": [
        "./src/**/*", // ** means any directory, * means any file。
    ], 
    // specify which .ts files need to exclude
    // default: ["node_modules", "bower_components", "jspm_packages"]
    "exclude": [
        "./src/hello/**/*",
    ], 
    // extends other ts config.
    "extends": "./configs/base",
    // like include, but specify file list.
    "files": ["test1.ts", "test2.ts"],

    // compiler options
    "compilerOptions": {
        "target": "ES6", // specified target build version you want.
        "module": "commonjs", // specify build module standard rules you want.
        "lib": ["es6", "dom"], // specify library you want to use.
        "moduleResolution": "node", // specify how to resolve module.
        "outDir": "./dist", // specify output directory.
        "outFile": "./dist/app.js", // specify output file name, merge all files into one.
        "allowJs": true, // allow javascript files to compiling, default false.
        "checkJs": true, // check javascript files syntax, default false.
        "removeComments": true, // remove comments, default false.
        "noEmit": true, // only execute compile, but doesn't have dist.
        "noEmitOnError": true, // doesn't generate dist file if there is error.

        "alwaysStrict": true, // always use strict mode, default false.
        "noImplicitAny": true, // don't allow any implicit type, default false.
        "strictNullChecks": true, // don't allow null or undefined, default false.
        "strict": true, // use strict mode, all strict config's main options.
    }
}   
```

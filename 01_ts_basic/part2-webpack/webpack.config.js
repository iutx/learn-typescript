// import path package
const path = require('path');

// import html webpack plugin
const  HtmlWebpackPlugin = require('html-webpack-plugin');

// import clean webpack plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    // entry point of the application
    entry: "./src/index.ts", 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // loade modules when webpack package.
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
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
                ],
                exclude: /node_modules/
            }
        ]
    },
    // configuration html webpack plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],

    // configuration typescript module use for import
    resolve: {
        extensions: ['.js', '.ts']
    }
}
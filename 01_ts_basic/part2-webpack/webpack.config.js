// import path package
const path = require('path');

module.exports = {
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
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}
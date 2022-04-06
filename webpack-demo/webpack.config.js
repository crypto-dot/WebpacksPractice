const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    devtool: 'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        publicPath: '/',
    },
    
};
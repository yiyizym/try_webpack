var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname + "/app",
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            jquery: __dirname + "/jquery-1.10.2.js"
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery" //should use the jquery version that support commonjs, otherwise the $ will be not defined. 
        }),
        new ExtractTextPlugin("bundle.css"),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './app/index_template.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'another_index.html',
          template: './app/another_index_template.html'
        })
    ]
};

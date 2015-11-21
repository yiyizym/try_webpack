var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            jquery: "./jquery-1.10.2.js"
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery" //should use the jquery version that support commonjs, otherwise the $ will be not defined. 
        }),
        new ExtractTextPlugin("bundle.css")
    ]
};

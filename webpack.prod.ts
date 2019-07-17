import * as path from 'path';
import * as merge from 'webpack-merge';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';

// import * as TerserJSPlugin from 'terser-webpack-plugin';
const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "[name].[contenthash:4].css"
});

import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash:4].js"
    },
    plugins: [
        miniCssPlugin
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});
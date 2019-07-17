import * as path from 'path';
import * as merge from 'webpack-merge';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

// hack: override MiniCssExtractPlugin plugin
common.plugins[1] = new MiniCssExtractPlugin({
    filename: "[name].bundle.[chunkhash].css",
    chunkFilename: "[name].bundle.[chunkhash].css"
});
    
module.exports = merge(common, {
    mode: 'production',
    //devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.[chunkhash].js',
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});

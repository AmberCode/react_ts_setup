import * as path from 'path';
import * as merge from 'webpack-merge';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
    
module.exports = merge(common, {
    mode: 'production',
    //devtool: 'source-map',
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});

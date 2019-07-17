import * as merge from 'webpack-merge';
import common from './webpack.common';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
    
module.exports = merge(common, {
    mode: 'production',
    //devtool: 'source-map',
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});

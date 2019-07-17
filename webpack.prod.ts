import * as merge from 'webpack-merge';
import common from './webpack.common';

// import * as TerserJSPlugin from 'terser-webpack-plugin';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});
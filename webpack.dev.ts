import * as merge from 'webpack-merge';
import common from './webpack.common';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9000
    }
});

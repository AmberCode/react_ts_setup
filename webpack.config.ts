import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devMode = process.env.NODE_ENV !== 'production';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html'
});

const miniCssPlugin = new MiniCssExtractPlugin();

const config: webpack.Configuration = {
    mode : devMode ? 'development' : 'production',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                        modules: {
                            localIdentName: "[name]__[local]--[hash:base64:5]"
                        }
                      }
                    }
                  ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        miniCssPlugin,
        new webpack.WatchIgnorePlugin([
            /\.d\.ts$/
        ])
    ]
};

if (devMode) {
    config.devtool = 'source-map';
}

export default config;
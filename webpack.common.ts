import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html'
});

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "[name].bundle.[chunkhash].css",
    chunkFilename: "[name].bundle.[chunkhash].css"
});

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.[chunkhash].js',
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
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
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

export default config;
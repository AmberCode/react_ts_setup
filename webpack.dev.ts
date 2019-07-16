import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html'
});

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index.tsx",
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
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader',
                    {
                      loader: 'typings-for-css-modules-loader',
                      options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true
                      }
                    }
                  ]
            }
        ]
    },
    plugins: [htmlPlugin]
};

export default config;
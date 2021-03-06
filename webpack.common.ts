import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as CleanWebPlugin from "clean-webpack-plugin";

const config: webpack.Configuration = {
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[chunkhash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2000,
              name: "images/[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial"
        }
      }
    }
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebPlugin.CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist/*"]
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.[chunkhash].css",
      chunkFilename: "[name].bundle.[chunkhash].css"
    }),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/])
  ]
};

export default config;

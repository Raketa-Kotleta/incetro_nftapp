const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: [
        path.join(__dirname,'src', 'modules', 'landing.js'),
        path.join(__dirname,'src', 'modules', 'navbar.js')
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "landing-page.js",
        clean: true,
    },
    module: {
        rules: [
           {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
           },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'image-webpack-loader',
                  options: {
                    pngquant: {
                      quality: [0.55, 0.90],
                      speed: 1
                    },
                  }
                },
              ],
            },
           {
            test: /\.(html)$/,
            use: ['html-loader']
            }
          
        ],
    },
    plugins:[ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','templates','index.html'),
        }),
        
    ],
    devServer: {
        static: path.resolve(__dirname, 'src','templates'),
        host: "0.0.0.0",
        port: 8080,
        hot: true,
    },
}
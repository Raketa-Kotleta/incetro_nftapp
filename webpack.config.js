const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: [
        path.join(__dirname,'src', 'modules', 'landing.js'),
        path.join(__dirname,'src', 'modules', 'navbar.js')
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "landing-page.js",
        clean: true,
    },
    module: {
        rules: [
           {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
           },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
           {
            test: /\.(html)$/,
            use: ['html-loader']
            }
          
        ],
    },
    plugins: [
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
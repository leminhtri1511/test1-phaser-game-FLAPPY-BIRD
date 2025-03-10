const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/game.js", // File chính của game
    output: {
        filename: "bundle.js", // Tên file sau khi build
        path: path.resolve(__dirname, "dist"), // Nơi lưu file build
        clean: true, // Xóa file cũ trước khi build mới
    },
    mode: "development", // "development" để debug, đổi thành "production" khi release
    module: {
        rules: [
            {
                test: /\.js$/, // Áp dụng Babel cho file .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], // Dịch ES6+ sang ES5
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html", // Sử dụng template HTML
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: "assets", to: "assets" } // Copy ảnh, âm thanh vào thư mục build
        //     ],
        // }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 8080, // Chạy game trên localhost:8080
        open: true, // Tự động mở trình duyệt khi chạy server
    },
    resolve: {
        alias: {
            phaser: path.resolve(__dirname, "node_modules/phaser/dist/phaser.js"),
        },
    },
};

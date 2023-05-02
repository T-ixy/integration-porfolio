const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production"
}

module.exports = {
    mode:mode,

    devtool: "source-map",

    entry: {
        app: '/src/app.js',
        style: '/src/style.js'
    },

    output: {
        filename: ["name"].js,
        path: Path.resolve(__dirname, 'public/assets'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin]
}
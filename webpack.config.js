const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "app.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "app")
            ],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ["es2015"]
            }
        }]
    },
    stats: {
        colors: true
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
    resolve: {
        extensions: ['.js',],
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        overlay: {
            errors: true,
            warnings: true
        }
    }
};
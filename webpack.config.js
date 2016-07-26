// Webpack Configuration File
// Refer to https://damienbod.com/2016/06/12/asp-net-core-angular2-with-webpack-and-visual-studio/
// And http://webpack.github.io/docs/configuration.html

// Imports
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

// Vars
var isProd = (process.env.NODE_ENV === 'production');

// Actual configuration
module.exports = function makeWebpackConfig() {
    var config = {};

    // add debug messages
    config.debug = !isProd;

    // Eval modules + sourcemaps for debugging
    if (!isProd) {
        config.devtool = 'cheap-module-eval-source-map';
    }

    // Entry points
    config.entry = {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts' // our angular app
    };

    // clarify output filenames
    var outputfilename = '[name].js';
    if (isProd) {
        //config.devtool = 'source-map';
        outputfilename = '[name].[hash].js';
    }

    // Output
    config.output = {
        path: root('./wwwroot'),
        publicPath: isProd ? '' : 'http://localhost:5000/',
        filename: outputfilename,
        chunkFilename: isProd ? '[id].[hash].chunk.js' : '[id].chunk.js'
    };

    config.resolve = {
        cache: true,
        root: root(),
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
    };

    config.module = {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    };

    config.plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new htmlWebpackPlugin({
            template: './app/index.html'
            //inject: 'body'
            //chunksSortMode: packageSort(['polyfills', 'vendor', 'app'])
        })
    ]

    return config;
}();
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
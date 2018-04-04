var webpack = require('webpack');
const path = require('path');

var libraryName = 'chanoch-com-components';
var ctx = '';

const isProd = process.env.NODE_ENV === 'production' 
        || process.argv.slice(-1)[0] == '-p'
        || process.argv.some(arg => arg.indexOf('webpack-dev-server') >= 0);

if(isProd) {
    ctx = '.min';
}

function getPlugins() {
    const plugins = [];

    // pass env to webpack
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }));

    if(isProd) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                mangle: false
            }
        }));
    }
    return plugins;
}

module.exports = {
    entry: {
        index: path.join(__dirname, '/src/index.js'),
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: libraryName + ctx + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js.?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
    },
    externals: [
        "react",
        "react-dom"
    ],
    plugins: getPlugins()
}
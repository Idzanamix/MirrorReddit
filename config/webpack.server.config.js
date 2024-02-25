const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /(\overlayscrollbars|\.global)\.css$/;
const { DefinePlugin } = require('webpack');

module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx', '.json'
        ]
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                exportOnlyLocals: true
                            },
                        }
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash].[ext]',
                },
            },
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
}
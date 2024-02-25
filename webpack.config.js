const webpackClientConfig = require('./config/webpack.client.config');
const webpackServerConfig = require('./config/webpack.server.config');

module.exports = [
    webpackClientConfig,
    webpackServerConfig
]


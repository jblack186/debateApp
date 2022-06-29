const path = require('path')

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@features': path.resolve(__dirname, 'src/features'),
            '@theme': path.resolve(__dirname, 'src/theme'),
        },
    }

    return config
}

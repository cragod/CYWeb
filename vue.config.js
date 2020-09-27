const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    publicPath: './',
    css: { extract: false },
    chainWebpack: config => {
        // 删除这个 preload 插件。
        config.plugins.delete('preload');
    },
    // 配置webpack
    configureWebpack: config => {
        if (isProduction) {
            // 开启分离js
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            };
        }
    },
    devServer: {
        open: true,
        proxy: {  //配置跨域
            '/quant': {
                target: 'http://api.gatro.net',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
            },
        }
    },
}
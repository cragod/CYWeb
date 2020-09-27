module.exports = {
    publicPath: './',
    css: { extract: false },
    chainWebpack: config => {
        // 删除这个 preload 插件。
        config.plugins.delete('preload');
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
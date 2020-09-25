const proxy = require('http-proxy-middleware');

module.exports = {
    devServer: {
        open: true,
        proxy: {  //配置跨域
            '/quant': {
                target: 'http://152.32.164.171',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                onProxyRes: function (proxyRes, req, res) { // 代理response事件
                    console.log('res---->\n\n\n')
                    // console.log(proxyRes.headers)
                },
                onProxyReq: function (proxyReq, req, res) { // 代理requset事件
                    console.log('req---->\n\n\n')
                    delete req.headers.host
                },
            },
        }
    },
}
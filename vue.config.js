module.exports = {
    devServer: {
        proxy:{
            '/api':{
                target:'https://www.wumeili.top',
                changeOrigin: true,
                secure: false,
                pathRewrite:{
                    '^api' : 'https://www.wumeili.top'
                }
            }
        }
    }
}
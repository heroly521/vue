module.exports = {
    devServer: {
        proxy:{
            '/api':{
                target:'http://192.168.1.103:3030',
                changeOrigin: true,
                secure: false,
                pathRewrite:{
                    '^/api' : 'http://192.168.1.103:3030'
                }
            }
        }
    }
}
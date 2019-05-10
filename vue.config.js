

module.exports = {
  devServer: {
    open: true, //浏览器自动打开页面
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 8080,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    proxy: {
        //匹配所有以/api开头的请求路径
        '/api': {
            target: "http://localhost:4000", //代理目标的基础路径
            ws:true,
            changOrigin:true, //开启跨域
            pathRewrite:{ //重写路径，去掉路径中开头的/api
                '^/api':'/'
            }
        }
    }
},
};
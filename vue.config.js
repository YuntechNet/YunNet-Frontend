module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/YunNet-Frontend/" : "",
  devServer: {
    proxy: {
      "/api": {
        target: "http://yunnet-boom.dorm.yuntech.edu.tw:8000",
        secure: false
      }
    }
  }
};

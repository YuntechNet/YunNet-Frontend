module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/YunNet-Frontend/" : "",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        secure: false
      }
    }
  }
};

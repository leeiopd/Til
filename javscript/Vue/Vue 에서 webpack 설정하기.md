# Vue

### - Vue 에서 webpack 설정하기



* vue cli3 로 생성된 프로젝트에서 webpack 을 사용하려면 vue.config.js 에 configureWebpack option 을 추가하면 된다.

```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```





```javascript
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}
```

* 배포환경과 개발환경 구분





```javascript
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  configureWebpack: config => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: { drop_console: true },
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: { comments: false },
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false
          }
        })
      ]
    };
  }
};

```

* Build 시 console.log 제거하기




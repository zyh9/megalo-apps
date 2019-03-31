### megalo官网

[megalo，请戳我](https://megalojs.org/)

### 分包示例

```javascript
    //app.js
    pages: [ 'pages/index/index', 'pages/cart/index', 'pages/user/index' ],
    subPackages: [
        {
            root: 'pagesOther',
            pages: [ 'other/index' ]
        }
    ]
```

### 静态资源拷贝

```javascript
    chainConfig.plugin('copy-webpack-plugin')
      .use(
        CopyWebpackPlugin,
        [
          [{
            from: resolve(__dirname, './src/static'),
            to: resolve(`dist-${process.env.PLATFORM}/static`)
          }]
        ]
      )
```

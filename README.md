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
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            path: _.resolve(`dist-${platform}/`),
            name: './static/img/[name].[ext]'
        }
    }

    plugins: [
        new CopyWebpackPlugin([
            {
                from: _.resolve(__dirname, '../static'),
                to: _.resolve(`dist-${platform}/static`),
                ignore: [ '.*' ]
            }
        ])
    ]
```

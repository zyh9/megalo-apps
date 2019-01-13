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

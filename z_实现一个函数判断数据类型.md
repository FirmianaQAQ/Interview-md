# [< |](./readme.md) 实现一个函数判断数据类型

```
function getType(obj) {
   if (obj === null) return String(obj);
   return typeof obj === 'object' 
   ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase()
   : typeof obj;
}
```

```
// 调用
getType(null); // -> null
getType(undefined); // -> undefined
getType({}); // -> object
getType([]); // -> array
getType(123); // -> number
getType(true); // -> boolean
getType('123'); // -> string
getType(/123/); // -> regexp
getType(new Date()); // -> date

```

## 代码练习：./zz_test2.js
## [参考文档](https://www.cnblogs.com/ziyunfei/archive/2012/11/05/2754156.html)
## [toLowerCase](https://www.w3school.com.cn/jsref/jsref_toLowerCase.asp)
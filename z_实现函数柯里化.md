# [< |](./readme.md) 实现函数柯里化

```
const curry = (fn, ...args1) => (...args2) => (
 arg => arg.length === fn.length ? fn(...arg) : curry(fn, ...arg)
)([...args1, ...args2]);

// 调用
const foo = (a, b, c) => a * b * c;
curry(foo)(2, 3, 4); // -> 24
curry(foo, 2)(3, 4); // -> 24
curry(foo, 2, 3)(4); // -> 24
curry(foo, 2, 3, 4)(); // -> 24
```

## [参考文档地址](https://www.jianshu.com/p/2975c25e4d71)
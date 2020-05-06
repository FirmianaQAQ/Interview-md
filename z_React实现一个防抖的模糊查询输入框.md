# [< |](./readme.md) React实现一个防抖的模糊查询输入框

- 解题思路：函数防抖的要点，是需要一个 setTimeout 来辅助实现，延迟运行需要执行的代码。如果方法多次触发，则把上次记录的延迟执行代码用 clearTimeout 清掉，重新开始计时。若计时期间事件没有被重新触发，等延迟时间计时完毕，则执行目标代码。

```
// 主程
const debounceFunc = (func, wait, immediate) => {
  let timer = null
  return function (...args) {
    let context = this
    if (immediate && !timer) func.apply(context, args)
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
```

## 代码练习：./zz_test4.js
## [参考文档：JS中的函数防抖](https://www.cnblogs.com/wssdx/p/11557706.html)
- “函数防抖”的关键在于，在 一个事件 发生 一定时间 之后，才执行 特定动作。
## [参考文档：JavaScript 中 call()、apply()、bind() 的用法](https://www.runoob.com/w3cnote/js-call-apply-bind.html)
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
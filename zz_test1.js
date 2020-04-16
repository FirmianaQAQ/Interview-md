// mock test
// 原函数
function add (a, b) {
  return a + b
}

// Currying后
function curryingAdd (a) {
  return function (b) {
    return a + b
  }
}

let t1 = add(1, 2)

let t2 = curryingAdd(1)(2)


// console.log(t1, t2)

// test 2
const curry = (fn, ...args1) => (...args2) => (
  arg => arg.length === fn.length ? fn(...arg) : curry(fn, ...arg)
)([...args1, ...args2]);

// test 2 解析
function func1 (fn, ...args1) {
  return function func2 (...args2) {
    return (function func3 (arg) {
      return arg.length === fn.length ? fn(...arg) : curry(fn, ...arg)
    })([...args1, ...args2])
  }
}


const foo = (a, b, c) => a * b * c;

let k1 = foo(2, 3, 4);
let k2 = curry(foo)(2, 3, 4);
let k3 = curry(foo, 2)(3, 4);
let k4 = curry(foo, 2, 3)(4);
let k5 = curry(foo, 2, 3, 4)();
// 要注意分号 ; 哦～

// 统一输出
(function () {
  console.log({
    'add-value': t1,
    'curryingAdd-value': t2,
    'curryFoo-value': [
      k1,
      k2,
      k3,
      k4,
      k5
    ],
  })
})()

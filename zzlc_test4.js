/**
 * @Author: Firmiana
 * @Date: 2020-04-30 09:24:09
 * @Desc: 快乐数
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 */

let n = 145459

var isHappy = (n) => {
  let set = new Set(), sum
  n += ''
  while (sum !== 1) {
    sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += n[i] * n[i]
    }
    n = sum + ''
    if (set.has(sum)) return false
    set.add(sum)
  }
  return true
}


var isHappyTwo = (n) => {
  if (n === 1) return true
  const getSumFunc = n => {
    return n = (n + '').split('').reduce((sum, item) => {
      return sum + item * item
    }, 0)
  }
  let slow = n = getSumFunc(n)
  let fast = n = getSumFunc(n)
  while (n !== 1 && slow !== fast) {
    slow = getSumFunc(n)
    fast = getSumFunc(getSumFunc(fast))
    n = slow
  }
  return n === 1
}


console.log('isHappy:', isHappy(n))
console.log('isHappyTwo:', isHappyTwo(n))

/**
 * @Author: Firmiana
 * @Date: 2020-11-08 01:23:27
 * @Desc: 买卖股票的最佳时机 II
 * @Desc: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

var maxProfit = function (prices) {
  // ^ 方法1
  // let res = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //   if (prices[i + 1] > prices[i]) {
  //     res += prices[i + 1] - prices[i]
  //   }
  // }
  // return res

  // ^ 方法2
  // total 初始值, 或者计算结束后的返回值。
  // currentValue 当前元素。
  // currentIndex 当前元素的索引。
  // initialValue 传递给函数的初始值。
  let initialValue = 0
  return prices.reduce((total, currentValue, currentIndex) =>
    currentIndex === 0 || currentValue < prices[currentIndex - 1]
      ? total
      : total + currentValue - prices[currentIndex - 1]
    , initialValue)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
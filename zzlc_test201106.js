/**
 * @Author: Firmiana
 * @Date: 2020-11-06 11:11:23
 * @Desc: 根据数字二进制下 1 的数目排序
 * @Desc: https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 */

var sortByBits = function (arr) {
  // ^ 方法1
  // let waitArr = arr.map(item => {
  //   return {
  //     key: ((item.toString(2)).match(/1/g) || []).length,
  //     value: item
  //   }
  // })
  // waitArr.sort((a, b) => {
  //   return a['key'] !== b['key'] ? a['key'] - b['key'] : a['value'] - b['value']
  // })
  // return waitArr.map(item => {
  //   return item.value
  // })
  // ^ 方法2
  // return arr.sort((a, b) => (a.toString(2).match(/1/g) || []).length - (b.toString(2).match(/1/g) || []).length || a - b)

  // ^ 方法3 
  function countBitsFunc (n) {
    let cnt = 0;
    while (n != 0) {
      cnt++;
      n &= (n - 1);
    }
    return cnt;
  }
  // return arr.sort((a, b) => countBitsFunc(a) - countBitsFunc(b) || a - b)

  // ^ 方法4 
  for (let i = 0; i < arr.length; i++) {
    arr[i] = ((arr[i].toString(2).match(/1/g) || []).length) * 100000 + arr[i]
  }

  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    arr[i] %= 100000
  }
  return arr
};

// console.log(
//   sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
// )
// console.log(
//   sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])
// )
console.log(
  sortByBits([8848, 4205, 113, 3764, 2376, 6352, 6372, 9927, 2990, 4286, 7783, 2121, 3749, 7800, 7479, 2723, 8305, 8276, 3598, 5776, 8016, 5053, 3113, 4395, 3595, 5079, 3065, 3158, 6141, 4187, 1328, 4900, 2120, 3239, 6474, 2218, 4892, 7993])
)

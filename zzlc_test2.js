/**
 * @Author: Firmiana
 * @Date: 2020-04-26 11:38:55
 * @Desc: 数组中数字出现的次数
 * @Desc: 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)
 */

const nums = [4, 1, 4, 6];


(function () {
  const obj = {}
  // plan 1
  for (let index of nums) {
    obj[index] ? delete obj[index] : obj[index] = index
  }
  // plan 2
  // nums.forEach(index => {
  //   obj[index] ? delete obj[index] : obj[index] = index
  // })
  console.log(Object.keys(obj))
  return Object.keys(obj)
})()
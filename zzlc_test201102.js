/**
 * @Author: Firmiana
 * @Date: 2020-11-02 11:21:14
 * @Desc: 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];

var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter(v => nums2.includes(v)))]
}

console.log(intersection(nums1, nums2))

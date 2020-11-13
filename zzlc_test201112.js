/**
 * @Author: Firmiana
 * @Date: 2020-11-12 11:00:11
 * @Desc: 按奇偶排序数组 II
 * @Desc: https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 */

var sortArrayByParityII = function (A) {
  let i = 0;    // 扫描偶数索引
  let j = 1;    // 扫描奇数索引

  while (i < A.length && j < A.length) {
    if (A[i] % 2 == 1) { // 偶数索引上出现一个奇数
      [A[i], A[j]] = [A[j], A[i]]; // 交换
      j += 2;            // 奇数指针j上肯定是奇数，j指针+2
      continue;          // 交换到偶数索引i的不一定是偶数，继续执行if判断
    }
    i += 2;              // 此时A[i]是偶数，i指针+2
  }
  return A
};

console.log(sortArrayByParityII([4, 2, 5, 7]))
/**
 * @Author: Firmiana
 * @Date: 2020-05-15 10:00:39
 * @Desc: 给定一个整数数组和一个整数 k
 * @Desc: 你需要找到该数组中和为 k 的连续的子数组的个数。
 * @Desc: 前缀和的思想
 * @Eg: 输入 nums = [1,1,1], k = 2
 * @Eg: 输出 2 , [1,1] 与 [1,1] 为两种不同的情况。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
0, k = 0

// 主程序
const subarraySum = (nums, k) => {
  if (!nums.length) return false
  const cache = new Map([[0, 1]])
  let count = 0, sums = 0
  for (let i = 0; i < nums.length; i++) {
    sums += nums[i]
    if (cache.has(sums - k)) count += cache.get(sums - k)
    cache.has(sums) ? cache.set(sums, cache.get(sums) + 1) : cache.set(sums, 1)
  }
  return count
}

const res = subarraySum(nums, k)

console.log(res)
/**
 * @Author: Firmiana
 * @Date: 2020-04-26 11:38:55
 * @Desc: 两数之和
 * @Desc: 任取nums里两个值 和等于target
 * @Desc: 每个数字只能用一次
 */

const nums = [2, 7, 11, 15],
  target = 9

const twoSum = function (nums, target) {
  const mapTemp = []
  for (const key in nums) {
    if (mapTemp[nums[key]]) return [+mapTemp[nums[key]], +key]
    mapTemp[target - nums[key]] = key
  }
}

console.log(twoSum(nums, target))
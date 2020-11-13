/**
 * @Author: Firmiana
 * @Date: 2020-11-10 13:27:31
 * @Desc: 下一个排列
 * @Desc: https://leetcode-cn.com/problems/next-permutation/
 */

let nums = [0, 0, 4, 2, 1, 0];
// let nums = [1, 2, 3];

var nextPermutation = function (nums) {

  // ^ 方法1
  // let i = nums.length - 1 - 1
  // while (i >= 0 && nums[i] >= nums[i + 1]) i--
  // if (i >= 0) {
  //   let j = nums.length - 1
  //   console.log(nums, nums[i], nums[j])
  //   while (j >= 0 && nums[i] >= nums[j]) j--
  //   [nums[i], nums[j]] = [nums[j], nums[i]]
  // }
  // let left = i + 1
  // let right = nums.length - 1
  // while (left < right) {
  //   [nums[left], nums[right]] = [nums[right], nums[left]]
  //   left++
  //   right--
  // }
  // return nums

  // ^ 方法2 内存溢出了
  // let originalNum = (nums.join(''))

  // function permute (input) {
  //   var permArr = [],
  //     usedChars = [];
  //   function main (input) {
  //     var i, ch;
  //     for (i = 0; i < input.length; i++) {
  //       ch = input.splice(i, 1)[0];
  //       usedChars.push(ch);
  //       if (input.length == 0) {
  //         permArr.push(usedChars.join(''));
  //       }
  //       main(input);
  //       input.splice(i, 0, ch);
  //       usedChars.pop();
  //     }
  //     return permArr
  //   }
  //   return main(input);
  // };
  // let temp = permute(nums)

  // temp = Array.from(new Set(temp))
  // temp.sort((a, b) => a - b)
  // let waitArr = temp[temp.indexOf(originalNum) + 1]
  //   ? (temp[temp.indexOf(originalNum) + 1] + '').split('').map(Number)
  //   : nums.sort((a, b) => a - b)

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = waitArr[i]
  // }
  // return nums

  // ^ 方法3
  let s = (l, r, t) => (t = nums[l], nums[l] = nums[r], nums[r] = t), l = -1, r = nums.length
  for (let i = r; i--;)
    if (nums[i] > nums[i - 1]) l = i - 1, i = 0
  if (l !== -1)
    for (i = r; i-- > l;)
      if (nums[i] > nums[l]) s(i, l), i = 0
  while (++l < --r) s(l, r)
  return nums
};

console.log(
  nextPermutation(nums)
)

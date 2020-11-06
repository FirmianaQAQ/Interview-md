/**
 * @Author: Firmiana
 * @Date: 2020-11-03 14:52:19
 * @Desc: 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 * @param {number[]} A
 * @return {boolean}
 */

let A = [1, 2, 3, 4, 2, 1];


var validMountainArray = function (A) {
  let leftFlag = 0, rightFlag = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      rightFlag = 1
      if (leftFlag == 1) return false;
    } else if (A[i] > A[i + 1]) {
      leftFlag = 1
    } else return false;

  };
  return leftFlag == 1 && rightFlag == 1 && A.length > 2 ? true : false;
};

console.log(validMountainArray(A))
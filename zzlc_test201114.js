/**
 * @Author: Firmiana
 * @Date: 2020-11-16 09:27:27
 * @Desc: 数组的相对排序
 * @Desc: https://leetcode-cn.com/problems/relative-sort-array/
 */

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];

var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    let indexA = arr2.indexOf(a);
    let indexB = arr2.indexOf(b);
    if (indexA === -1 && indexB === -1) { // 如果两个元素都不在arr2中按升序排列
      return a - b
    } else if (indexA === -1) { // 如果有一个不在arr2中（a），另一个在arr2中(b)不在arr中的元素要排在后面
      return 1
    } else if (indexA !== -1 && indexB !== -1) { // 如果两个元素都在arr2中，他们的顺序跟在arr2中一致
      return indexA - indexB
    }
  })
};

console.log(relativeSortArray(arr1, arr2))
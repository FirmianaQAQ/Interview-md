/**
 * @Author: Firmiana
 * @Date: 2020-11-04 14:21:48
 * @Desc: 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * @Desc: 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 */

// var intervals = [[1, 3], [6, 9]], newInterval = [2, 5];
var intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8];

var insert = function (intervals, newInterval) {
  let result = [], i = 0, leng = intervals.length;
  // ^ 输入数组与原始数组比较输出左段
  while (i < leng && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  // ^ 与中段数组进行比较及合并 定义输入数组最大最小值
  while (i < leng && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1])
    ]
    i++;
  }
  result.push(newInterval);
  // ^ 直接输出原始数组右段
  while (i < leng) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(insert(intervals, newInterval))
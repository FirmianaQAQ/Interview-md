/**
 * @Author: Firmiana
 * @Date: 2020-11-16 09:14:53
 * @Desc: 根据身高重建队列
 * @Desc: https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 */

var K = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
var reconstructQueue = function (people) {
  let res = [];
  if (!people) return [];
  // 采用从高到低排序的方法,先将people按照以下方式排序
  // 按照每项第一个数字从高到低排序，如果高度相等按照第二个数字从低到高排序
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
  // 这里主要是通过每项的第二个数字来实现插入，保证顺序的合理性
  people.forEach(item => {
    res.splice(item[1], 0, item)
  })
  return res;
};

console.log(reconstructQueue(K))
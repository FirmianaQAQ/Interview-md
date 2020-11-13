/**
 * @Author: Firmiana
 * @Date: 2020-11-09 09:28:21
 * @Desc: 最接近原点的 K 个点.
 * @Desc: https://leetcode-cn.com/problems/k-closest-points-to-origin/
 */

let points = [[3, 3], [5, -1], [-2, 4]], K = 2;

function quickSelect (points, start, end, K) {
  const p = d(points[start]); // pivot元素
  let l = start, r = end;
  while (l <= r) { 	     // 左右两个指针
    if (d(points[l]) <= p) { // 左指针指向的元素比pivot小，不用移动，看下一个，指针右移
      l++;
      continue;
    }
    if (d(points[r]) > p) { // 右指针指向的元素比pivot大，不用移动，看下一个，指针左移
      r--;
      continue;
    }
    // 左指针指向的元素比pivot大，右指针指向的元素比pivot小，交换左右指针指向的元素
    [points[l], points[r]] = [points[r], points[l]];
    l++;
    r--;  // 指针同时收缩1
  }
  [points[start], points[r]] = [points[r], points[start]]; // 交换pivot元素和右指针指向的元素
  if (r == K) { // 排好了
    return;
  } else if (r < K) { // 左边还不够K个，则[r+1:end]要继续排
    quickSelect(points, r + 1, end, K);
  } else { // 左边大于K个，则对左边继续排
    quickSelect(points, start, r - 1, K);
  }
}

function d (point) {  // 求到原点的距离
  return point[0] * point[0] + point[1] * point[1];
}

var kClosest = function (points, K) {
  // ^ 方法1
  // let waitRes = [];
  // points.map(item => {
  //   waitRes.push({ key: (item[0] ** 2 + item[1] ** 2), value: item })
  // })
  // waitRes.sort((a, b) => {
  //   return a['key'] !== b['key'] ? a['key'] - b['key'] : a['value'] - b['value']
  // })
  // waitRes = waitRes.slice(0, K);
  // return waitRes.map(item => {
  //   return item.value
  // })
  // ^ 方法2
  // for (let i = 0; i < points.length; i++) {
  //   points[i] = { key: ((points[i][0] ** 2) + (points[i][1] ** 2)), value: points[i] }
  // }
  // points.sort((a, b) => a['key'] !== b['key'] ? a['key'] - b['key'] : a['value'] - b['value'])
  // points = points.slice(0, K);
  // return points.map(item => {
  //   return item.value
  // })
  // ^ 方法3
  // return points.sort((a, b, c = (a[0] ** 2) + (a[1] ** 2), d = (b[0] ** 2) + (b[1] ** 2)) => c - d).splice(0, K)
  // ^ 方法4
  if (points.length <= K) {
    return points;
  }
  quickSelect(points, 0, points.length - 1, K); // 范围是整个数组
  return points.slice(0, K);  // 排完后，取前K个
};

console.log(kClosest(points, K))
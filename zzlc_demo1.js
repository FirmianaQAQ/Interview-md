/**
 * @Author: Firmiana
 * @Date: 2020-05-15 11:30:06
 * @Desc:
 */
var a = [9];
var b = [10];
console.log(a == 9, b == 10, a < b)

var arr1 = ['a', 'b', 'c']
var arr2 = ['b', 'c', 'a']
console.log(
  arr1.sort() === arr1,
  arr2.sort() === arr2,
  arr1.sort() === arr2.sort()
)

const n = 5;
console.log(1..n);


function jke1 (name) {
  return 'good mor ,' + name
}
jke1('sky')
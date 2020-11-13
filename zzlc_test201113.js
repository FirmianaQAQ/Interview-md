/**
 * @Author: Firmiana
 * @Date: 2020-11-13 10:29:49
 * @Desc: 奇偶链表
 * @Desc: https://leetcode-cn.com/problems/odd-even-linked-list/
 * @Desc: https://leetcode-cn.com/problems/odd-even-linked-list/solution/die-dai-9xing-dai-ma-chao-92-by-mantoufan/
 */

let inputArr = [1, 2, 3, 4, 5]

var oddEvenList = function (head) {
  if (head && head.next) {
    var p = [head, head.next], n = p[1]
    while (p[1] && p[1].next) {
      p[0].next = p[0].next.next
      p[1].next = p[1].next.next
      p = [p[0].next, p[1].next]
    }
    p[0].next = n
  }
  return head
};

console.log(oddEvenList(inputArr))
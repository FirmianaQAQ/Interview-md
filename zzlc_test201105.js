/**
 * @Author: Firmiana
 * @Date: 2020-11-05 10:58:58
 * @Desc: 单词接龙
 * @Desc: https://leetcode-cn.com/problems/word-ladder/
 */

const match = (word1, word2) => {
  // 1. 设置次数
  let time = 0;

  // 2. 遍历，如果不相同，次数 + 1，如果超过 1 次，中止循环
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i] && !time) {
      time++;
    } else if (word1[i] !== word2[i] && time) {
      time++;
      break;
    }
  }

  // 3. 返回是否可以相连
  return time === 1;
}

const ladderLength = (beginWord, endWord, wordList) => {
  // 1. 建立哈希映射
  const map = {};

  // 2. 遍历数组，建表
  for (let i = 0; i < wordList.length; i++) {

    // 2.1 获取字符串 1
    const word1 = wordList[i];

    // 2.2 再遍历一次数组
    for (let j = 0; j < wordList.length; j++) {

      // 2.3 相同位置不能构成表
      if (i === j) {
        continue;
      }

      // 2.4 获取字符串 2
      const word2 = wordList[j];

      // 2.5 建立映射
      if (match(word1, word2)) {
        if (!map[word1]) {
          map[word1] = [];
        }
        map[word1].push(word2);
      }
    }

    // 2.6 记住 beginWord 也要建表
    if (match(word1, beginWord)) {
      if (!map[beginWord]) {
        map[beginWord] = [];
      }
      map[beginWord].push(word1);
    }
  }

  // 3. 设置本层需要遍历的元素
  let now = [beginWord];

  // 4. 设置集合存放已经用过的元素
  const set = new Set();

  // 5. 定义结果
  let time = 0;

  // 6. 开始广度优先搜索
  while (now.length) {
    // 6.1 每走一次结果 + 1
    time++;

    // 6.2 设置下一层需要遍历的元素
    const next = [];

    // 6.3 遍历数组
    for (let i = 0; i < now.length; i++) {
      // 6.4 获取当前元素表
      const neighbor = map[now[i]] || [];
      // 6.5 遍历并将元素添加到下一层中
      for (let j = 0; j < neighbor.length; j++) {
        if (neighbor[j] === endWord) {
          return time + 1;
        }
        if (!set.has(neighbor[j])) {
          set.add(neighbor[j]);
          next.push(neighbor[j]);
        }
      }
    }

    // 6.6 交接
    now = next;
  }

  // 7. 如果没结果，那就返回 0
  return 0;
};

console.log(ladderLength(
  'hit',
  'cog',
  ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
));
# [< |](./readme.md) forEach map filter的区别

## forEach

- `forEach`遍历数组，参数为一个回调函数，回调函数接收三个参数，当前元素，元素索引，整个数组

## map

- `map`与`forEach`类似，遍历数组，但其回调函数的返回值会组成一个新数组，新数组的索引结构和原数组一致，原数组不变

## filter

- `filter`会返回原数组的一个子集，回调函数用于逻辑判断，返回true则将当前元素添加到返回数组中，否则排除当前元素，原数组不变
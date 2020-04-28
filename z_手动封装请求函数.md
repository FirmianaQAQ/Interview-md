# [< |](./readme.md) 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数

```
// 主程
const request = (url, body, okCb, errCb, maxCount = 5) => {
  return fetch(url, body).then(res => okCb(res)).catch(err => {
    return maxCount <= 0 ? errCb('请求超时:', err) : request(url, body, okCb, errCb, --maxCount)
  })
}

// 调用
request('https://host/path', { method: 'GET', headers: {} }, (res) => {
  console.log(res.json());
}, (err) => console.error(err))
```

## 代码练习：./zz_test3.js
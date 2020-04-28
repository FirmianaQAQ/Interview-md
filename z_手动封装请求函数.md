# [< |](./readme.md) 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数

```
function request (url, body, successCallback, errorCallback, maxCount = 3) {
  return fetch(url, body)
    .then(response => successCallback(response))
    .catch(err => {
      if (maxCount <= 0) return errorCallback('请求超时');
      return request(url, body, successCallback, errorCallback, --maxCount);
    });
}

// 调用
request('https://some/path', { method: 'GET', headers: {} }, (response) => {
  console.log(response.json());
}, (err) => console.error(err));
```

## 代码练习：./zz_test3.js
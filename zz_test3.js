
const request = (url, body, okCb, errCb, maxCount = 5) => {
  return fetch(url, body).then(res => okCb(res)).catch(err => {
    return maxCount <= 0 ? errCb('请求超时:', err) : request(url, body, okCb, errCb, --maxCount)
  })
}

// 调用
request('https://host/path', { method: 'GET', headers: {} }, (res) => {
  console.log(res.json());
}, (err) => console.error(err))
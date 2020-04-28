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
# [< |](./readme.md) 浏览器的缓存机制 

### 浏览器的缓存机制可分为`强缓存`和`协商缓存`，服务端可以在响应头中增加` Cache-Control/Expires` 来为当前资源设置缓存有效期 (`Cache-Control的max-age的优先级高于Expires`) ，浏览器再次发送请求时，会先判断缓存是否过期，如果未过期则命中强缓存，直接使用浏览器的本地缓存资源，如果已过期则使用协商缓存，协商缓存大致有以下两种方案：
- 唯一标识：`Etag(服务端响应携带)` & `If-None-Match(客户端请求携带)`
- 最后修改时间： `Last-Modified(服务端响应携带)` & `If-Modified-Since (客户端请求携带)` ，`其优先级低于Etag`。
### 服务端判断值是否一致，如果一致，则直接返回`304`通知浏览器使用本地缓存，如果不一致则返回新的资源。

## [参考文档](https://www.jianshu.com/p/54cc04190252)
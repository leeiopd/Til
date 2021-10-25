# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 10. Redis

##### 03_Redis Nodejs

* node-redis 설치
  * npm install redis



* node-redis 사용

```javascript
// ./index.js

const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

// redis cache 등록
client.hmset("fruit", {
  lemon: 5000,
  green: 2000,
});

// redis cache 조회
client.hgetall("fruit", (err, res) => {
  console.log(res);
});
```


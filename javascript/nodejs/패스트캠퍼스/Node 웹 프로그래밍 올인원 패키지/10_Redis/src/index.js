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

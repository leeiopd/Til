# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 04. Sequelize

##### 02_dotenv 설정

* env 설정
  * 환경 설정 변수 (db 접속 id 와 password 등) 를 편하게 모아서 설정 가능
* dotenv NPM module 을 설치하여 사용



```javascript
// ./.env(.sample)

DATABASE = "데이터베이스시스템"
DB_USER = "root"
DB_PASSWORD = "패스워드"
DB_HOST = "DB호스트"
```

* process.env 로 접근 가능
  * Ex) process.env.DATABASE == "데이터베이스시스템"


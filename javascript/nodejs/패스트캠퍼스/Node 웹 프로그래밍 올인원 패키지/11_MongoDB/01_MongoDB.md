# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 11. MongoDB

##### 01_MongoDB

* 목차
  1. MongoDB 란
  2. MongoDB Cli
  3. Mongoose CRUD



* MongoDB 란 무엇인가

  1. Key Value 형태로 저장

     ```json
     {
       "name": "워커",
       "price": 1200
     }
     ```

  2. 동적 스키마

     ```json
     1번째 줄 {"name":"워커", "price": 1200}
     2번째 줄 {"thumbnail":"abc.png"}
     ```

     * 테이블 구조를 바꾸지 않고, 데이터를 독립적으로 저장 가능



* RDBMS 와의 비교

  | RDBMS       | MongoDB     |
  | ----------- | ----------- |
  | Database    | Database    |
  | Table       | Collection  |
  | Row         | Document    |
  | Column      | key / field |
  | Primary Key | Object ID   |






# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 11. MongoDB

##### 02_MongoDB Cli



* 목차
  1. Databse 생성 및 데이터 삽입
  2. find (조회)
  3. sort, skip (정렬)
  4. update (수정)
  5. remove (삭제)



* Databse 생성 및 데이터 삽입

  ```json
  // Databse 생성
  use exercise;
  
  // person Collection 생성
  db.createCollection("person");
  
  // person data 삽입
  // person Collection 이 존재하지 않으면, 생성 후 삽입
  db.person.insert({"name": "testName", "lecutre":"nodejs"});
  
  // Database 의 모든 Collection 삭제
  db.dropDatabase();
  ```



* collection 생성 옵션

  | 속성      | 설명                                                         |
  | --------- | ------------------------------------------------------------ |
  | capped    | true 로 하면 용량초과시 오래된 데이터를 덮어버림.<br />size 입력 필수 |
  | autoindex | ObjectId 에 indexing 적용                                    |
  | size      | Collection 의 최대사이즈                                     |
  | max       | Collection 의 추가할수 있는 최대 개수                        |

  



* 여러 데이터 삽입

  ```json
  db.test.insert([
    {"name": "testName", "lecture":"nodejs"},
    {"name": "house", "lecture":"python"},
    {"member":"person", "lecture":"python"}
  ]);
  ```

  



* find (조회)

  ```json
  // collection 전체 조회
  > db.board.find()
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf26"),
  	"title" : "hello",
  	"content" : "첫번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 2
  }
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf27"),
  	"title" : "hi",
  	"content" : "두번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 23
  }
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf28"),
  	"title" : "test",
  	"content" : "세번째 글입니다.",
  	"writer" : "test",
  	"hit" : 10
  }
  
  
  // wirter 가 "admin"
  > db.board.find({"writer":"admin"}).pretty()
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf26"),
  	"title" : "hello",
  	"content" : "첫번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 2
  }
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf27"),
  	"title" : "hi",
  	"content" : "두번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 23
  }
  
  
  // hit > 20
  > db.board.find({"hit": {$gt:20}}).pretty()
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf27"),
  	"title" : "hi",
  	"content" : "두번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 23
  }
  
  
  // hit < 20
  > db.board.find({"hit": {$lt:20}}).pretty()
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf26"),
  	"title" : "hello",
  	"content" : "첫번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 2
  }
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf28"),
  	"title" : "test",
  	"content" : "세번째 글입니다.",
  	"writer" : "test",
  	"hit" : 10
  }
  
  
  // 5 < hit < 20
  > db.board.find({"hit": {$gt:5, $lt:20}}).pretty()
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf28"),
  	"title" : "test",
  	"content" : "세번째 글입니다.",
  	"writer" : "test",
  	"hit" : 10
  }
  
  
  // 작성자가 "admin" 이면서 hit 가 10 이하
  > db.board.find(
    {
      $and:[
        {"writer":"admin"},
        {"hit":{$lt:10}}
      ]
    }
  ).pretty()
  // 결과
  {
  	"_id" : ObjectId("617a54ef286b673f6751bf26"),
  	"title" : "hello",
  	"content" : "첫번째 글입니다.",
  	"writer" : "admin",
  	"hit" : 2
  }
  ```



* 비교 연산자

  | 연산자 | 설명                      |
  | ------ | ------------------------- |
  | $eq    | = 일치하는 값             |
  | $gt    | 큰값                      |
  | $gte   | 크거나 같은               |
  | $lt    | 작은                      |
  | $lte   | 작거나 같은               |
  | $ne    | != 일치하지 않는          |
  | $in    | 배열안에 속하는 경우      |
  | $nin   | 배열안에 속하지 않는 경우 |

  



* count, sort, limit

  ```json
  // count
  > db.board.find().count()
  
  // sort - hit 내림차순
  > db.board.find().sort({"hit":-1})
  
  // limit
  > db.board.find().limit(2)
  
  // skip
  > db.board.find().skip(1)
  ```





* update

  

  ```json
  // 수정
  > db.board.update({"title":"test"}, {"content":"content update!"})
  // 결과 - 수정될 값으로 입력한 내용으로 전체가 변경
  {
  	"_id" : ObjectId("617a689f286b673f6751bf34"),
  	"content" : "content update!"
  }
  
  
  // 부분 수정
  > db.board.update({"title":"hello"}, { $set: {"content":"content update!"}})
  // 결과 - 입력된 부분만 수정
  {
  	"_id" : ObjectId("617a689f286b673f6751bf32"),
  	"title" : "hello",
  	"content" : "content update!",
  	"writer" : "admin",
  	"hit" : 2
  }
  ```



* remove

  ```json
  // 삭제
  > db.board.remove({"writer":"admin"})
  // 결과 - 조건에 해당되는 모든 데이터 삭제
  WriteResult({ "nRemoved" : 2 }) // 2개 항목 삭제됨
  ```

  


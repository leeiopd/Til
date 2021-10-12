# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 10. Redis

##### 02_Redis 사용하기

* Redis Docker 컨테이너 실행
  * docker run -p 6379:6379 redis



* Redis Docker 컨테이너 접속
  * docekr exec -it "Container ID" /bin/bash



* Redis 접속
  * Redis-cli





* set a 10
  * 변수 a 에 10 을 대입
* get a
  * -> "10"



* expire a 10
  * 선언된 a 가 10초 후 만료
* a 의 만료 시간 확인
  * ttl a
* 10 초후, get a
  * (nil) 출력, 변수 a 가 만료됨



* 선언된 모든 변수 확인
  * keys *





* List
  * lpush num_lists 2
    * num_lists 에 2를 왼쪽으로 삽입
    * List 는 중복 원소 삽입 가능
  * rpush num_lists 3
    * num_lists 에 3을 오른쪽으로 삽입
  * lrange num_lists 0 -1
    * num_lists 의 모든 원소 출력, 0은 시작 -1은 마지막 원소
    * index 로 출력 범위 설정





* Set
  * sadd num_sets 1
    * num_sets 에 1 삽입
    * set 은 중복 원소 삽입 불가
  * smembers num_sets
    * 현제 num_sets 출력



* Hash
  * hmset fruit orange 2000 appple 1000
    * fruit: { orange: 2000, apple: 1000 }
    * Hash 형 데이터 fruit 을 선언
  * hmget fruit orange
    * Hash 형 fruit 의 orange 키 의 value 출력
  * hmget fruit orange
    * Hash 형 fruit 의 orange 키 의 value 와 apple 키 의 value 출력


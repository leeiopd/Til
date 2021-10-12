# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 10. Redis

##### 01_Redis

* 목차
  * Redis 개요 및 설치
  * Redis 사용하기
  * Redis 캐싱
  * Redis 세션



* Redis 란 무엇인가
  * 메모리에 데이터를 저장
    * 메모리를 데이터 저장소로 DB 처럼 사용하여 속도 향상
  * C언어로 작성



* 사용 용도
  * 사용자의 세션 서버
    * 사용자 로그인 인증 세션 발급
  * 웹페이지 캐싱
    * 웹페이지의 내용을 매번 db 에 요청하지 않고, redis 에서 저장하고 있는 내용으로 보여줌



* Redis 설치
  * 윈도우 - 공식적인 지원 X
    * github 주소: https://github.com/microsoftarchive/redis
  * Mac - brew install redis

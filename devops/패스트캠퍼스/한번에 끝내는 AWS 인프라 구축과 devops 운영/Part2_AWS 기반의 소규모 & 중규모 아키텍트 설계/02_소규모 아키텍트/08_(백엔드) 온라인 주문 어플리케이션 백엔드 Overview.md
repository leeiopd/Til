# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 08_(백엔드) 온라인 주문 어플리케이션 백엔드 Overview



##### 이벤트 스토밍 결과

![08_01_이벤트 스토밍 결과](./imgs/08_01_이벤트 스토밍 결과.png)



##### 유의할 점

* FrontEnd 요소(UI) 를 최소화
  * Rest API 도 최대한 배제
* CRUD는 간략히만 다룰 것
* 주문자, 사장님, 배달기사 이렇게 3개의 actor 에 따라 app을 따로 개발할 것

| CRUD   | URL              | Function |
| ------ | ---------------- | -------- |
| READ   | /articles/       | list     |
|        | /articles/1      | detail   |
| CRETE  | /articles/new    | new      |
|        | /articles/create | create   |
| UPDATE | /articles/1/edit | edit     |
|        | /articles/update | update   |
| DELETE | /articles/delete | delete   |


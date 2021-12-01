# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 24_(인프라) AWS CloudFront 와 CDN의 동작원리



##### AWS Cloudfront

* Cloudfront = Cache + CDN
* 기본적으로는 Cache 서버
* Cache 서버는 전 세계에 흩어져 있는 인프라를 활용하기 때문에 추가적으로 CDN의 기능도 보유
* 웹 서버의 비용을 감소시키며, 전 세계의 유저를 대상으로 고속으로 웹서비스를 제공하도록 하는 서비스



##### 기존방식

![24_01_기존방식](./imgs/24_01_기존방식.png)

* 클라이언트가 요청할 때마다 서버가 응답해주는 방식
* HTML 문서를 준비해둿다가 뿌려주는 것이 아니라. 동적으로 생성
* 유저 입장에서 느린편
* 서버 입장에서 서버 비용이 많이 발생
  * 유저의 요청마다 연산 작업이 발생



##### Cache - 새로운 방식

![24_02_cache 방식](./imgs/24_02_cache 방식.png)

* 클라이언트가 요청하여 응답된 결과를 cache 로 저장
* 다음번 클아이언트의 요청에는 기존 server에 요청할 필요 없이 chache server 에 요청하여 저장된 정보를 추출
* 요청할 때마다 동적으로 생성하는 방식에서 벗어나, 준비된 데이터를 cache 에 저장하고 그걸 그대로 뿌려줌
  * 유저의 바뀐 정보의 결과값을 반영하지 못하는 문제 발생
    * cache 서버의 자동 update 기간을 설정하여 해결
    * page 의 update 간격을 조회 빈도에 따라 설정



##### CDN

* 전 세계 어느 위치에서 접속하더라도 빠른 속도로 서비스 할 수 있도록 하는 서비스
* Content Delivery Network
* 전 세계에 흩어져 있는 Edge Location (캐시서버)을 활용
  * 사용자 인근의 Edge Location 서버에 접속



##### Route 53, Certificate Manager, CloudFront, ELB, EC2

![24_03_서버 구조](./imgs/24_03_서버 구조.png)

* Route 53 을 Cloudfront 로 등록
* Cloudfront 를 ALB 연결

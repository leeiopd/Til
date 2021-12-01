# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 22_(인프라) AWS Route53 도메인 등록과 Hosted zone 설정하기



##### Route 53 를 활용한 http 설정

![22_01_Route53 을 활용한 http 설정](./imgs/22_01_Route53 을 활용한 http 설정.png)

* Route53 의 Domain 을 ELB 에 연결



##### 로드벨런스 설정

* 로드벨런서 리스너 port - 유저가 접근하는 port
* 대상 그룹 port - 로드벨런서 그룹에 해당하는 인스턴스로 넘겨줄때의 접근 port



##### Route 53 설정

* Route 53
* 호스팅 영역
* 생성한 Domain Name
* 레코드 생성
  * 설정 진행
  * url 에 관련된 설정 가능


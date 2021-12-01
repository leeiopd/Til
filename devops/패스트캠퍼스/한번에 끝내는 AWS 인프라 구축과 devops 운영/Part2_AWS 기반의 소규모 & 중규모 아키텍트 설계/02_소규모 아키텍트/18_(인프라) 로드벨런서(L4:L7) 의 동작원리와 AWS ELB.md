# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 18_(인프라) 로드벨런서(L4/L7) 의 동작원리와 AWS ELB



##### 로드벨런싱이란?

![18_01_로드벨런싱이란](./imgs/18_01_로드벨런싱이란.png)

* 클라이언트 수가 늘어났을 때, 요청을 처리하는 서버의 scale out 으로 해결 시 트래픽의 분산을 해주는 서비스
* Elastic Locad Balancer (ELB)
  * L4
  * L&



##### L4 로드벨린서

* L4 Load Balacer - Classic Load Balancer (CLB)
  * Layer 4 - Transport Layer
  * 네트워크 7Layer 중 Layer 4 (Transport Layer) 에서 작동
* 장점
  * 빠르고 저렴하다
  * 단순하다 - 방향만 바꿔주는 형태
* 단점
  * Microservice 에 불리
    * 데이터에 따라 각각의 service 서버에 나누어주는 동작이 불가능



##### L7 로드벨린서

* L7 Load Balacer - Application Load Balancer (ALB)
  * Layer 7 - Application Layer
  * 네트워크 7Layer 중 Layer 7 (Application Layer) 에서 작동
* 장점
  * 스마트하다
  * Microservice 에 유리
    * 데이터에 따라 각각의 service 서버로 트래픽을 분산 
* 단점
  * 데이터를 확인해야 하므로 속도 이슈
  * 비용 이슈

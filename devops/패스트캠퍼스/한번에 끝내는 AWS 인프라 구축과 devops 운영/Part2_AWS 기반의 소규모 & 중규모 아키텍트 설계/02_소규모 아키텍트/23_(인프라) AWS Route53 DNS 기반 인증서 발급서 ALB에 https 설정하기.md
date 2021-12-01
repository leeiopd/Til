# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 23_(인프라) AWS Route53 DNS 기반 인증서 발급서 ALB에 https 설정하기



##### Http 와 Https

* Http
  * 웹 페이지의 정보를 웹 서버에 전송요청하는 프로토콜
    * 80 port
  * 클라이언트와 서버가 통신 할 때, 정보를 있는 그대로 전송
  * 보안에 취약
* Https
  * Http 에 암호화 기능을 추가
    * 443 port
  * 암호화 기능이 추가 되었으므로 보안성이 좋지만 느림
  * 서버 보안인증서 발급 필요



##### Route 53, Certificate manager 를 활용한 https 설정

![23_01_Certificate manager를 활용한 https 설정](./imgs/23_01_Certificate manager를 활용한 https 설정.png)

* Certificate Manager
  * AWS 서버 보안인증서 서비스 제공



##### Certificate manager 설정

* AWS Certificate Manager
* 인증서
* 인증서 요청
  * 인증서 유형 - 퍼블릭 인증서 요청
  * 도메인 이름 추가 - 인증서 발행이 필요한 domain 입력
  * 검증 방법 선택 - DNS 검증
    * 입력한 Domain 의 소유 확인
      * email 검증
      * DNS 검증
  * 태그 추가 - Name : 별칭
  * 검증
    * DNS 검증 - CNAME 기록 추가 (Route53 에 등록된 domain 의 값을 비교하여 검증)
    * email 검증 - email 으로 진행 (보안에 취약)



##### Locad Balacer 설정

* Load Balancer 의 리스너에 443 port 를 추가
  * https 연결 허가
* LoadBalancer 리스너 추가
  * 프로토콜 : 포트 - HTTPS:443
  * 전달 대상 - loadbalace group
  * 보안정책 - 해당 보안정책
  * 기본 SSL 인증서 - Certificate Manager 를 통해 생성한 SSL

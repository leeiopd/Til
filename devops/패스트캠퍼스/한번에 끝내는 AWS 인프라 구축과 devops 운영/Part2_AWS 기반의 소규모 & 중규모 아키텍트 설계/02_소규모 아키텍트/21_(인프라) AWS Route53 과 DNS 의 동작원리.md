# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 21_(인프라) AWS Route53 과 DNS 의 동작원리



##### 도메인 등록 절차

![21_01_클라이언트 상에서의 절차](./imgs/21_01_클라이언트 상에서의 절차.png)

* url 을 통한 접속을 위해서는 domain 등록이 필요하다.
* 등록 대행자는 domain 등록을 대행해준다.
  * 가비아 / Route53 / freenom 등
* 닷(.) 뒤의 문자에 따라 각각 다른 등록소에 등록이 된다.
  * .com / .net / .co.* 등
*  domain 을 동록하면 DNS server 에 domain name 과 ip 주소가 링크되어 저장된다.
  * 등록 대행자는 저장된 DNS server 의 내용을 Top level domain 등록소에 등록해 준다.
* 등록소는 ICANN (국제 적으로 IP 관리 하는 곳) 의 Root name server 에 등록한다.



##### 클라이언트 상에서의 절차

1. url 입력 (a.com)
2. 클라이언트는 ICANN 의 Root name server 에 domain 확인
3. Root name server 는 .com 에 해당하는 등록소의 Top level domain server 에 url 과 링크된 ip 주소를 찾는다.
4. url 과 링크된 IP 주소는 다시 Top level domain 서버에서 ICANN 의 Root name server 로, 그리고 다시 클라이언트에게 전송된다.




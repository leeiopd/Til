# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 09_(VPC) NACL 설정하기 1



##### NACL(네트워크 ACL) / Security Group

* NACL - stateless
* Security Group - stateful



##### NACL 과 Security Group 의 차이

* 일반적인 Request & Response

  |      | Request     | Response    | IP             | Port |
  | ---- | ----------- | ----------- | -------------- | ---- |
  | A    | source      | destination | 175.34.136.133 | 1025 |
  | B    | destination | source      | 13.120.100.100 | 80   |

  * Request : A -> B

  * Response : B -> A
  * 1025 port - Outbound - 임시포트
    * 임시 포트의 범위 : 1024 - 65535
  * 80 port - Inbound

* Statefull

  * EC2 Security Group 설정 예시
    * Inbound : 80
      * 80 port 만 접근 허용
    * Outbound : none
      * 모든 Port 에 대한 Outbound 불허
  * Statefull 동작
    * 상태에 대한 기억을 하기 때문에, 1025 port 에서 발생한 80 port 의 Inbound 의 상태를 기록
    * 기록된 요청 발생지인 1025 port 에 대한 Outbound 를 Security Group 설정에 예외적으로 허용

* Stateless

  * EC2 NACL 설정 예시
    * Inbound : 80
      * 80 port 만 접근 허용
    * Outbound : none
      * 모든 Port 에 대한 Outbound 불허

  * Stateless 동작
    * Security Group 의 설정을 따름
    * 모든 Outbound 불허



##### NACL 설정

* 모든 subnet 이 연결되어 있는 기본 NACL 이 존재

  * 연결된 subent
    * public subnet : 실습용 fastcampus-public-subnet
    * private subnet : 실습용 fastcampus-private-subnet
  * 기본 NACL 을 private NACL 로 사용

* NACL 생성 - public NACL

  * NACL 이름 입력 - public_NACL
  * VPC 선택 - 실습용 fastcampus-pvc

* Subnet 연결

  * 서브넷 연결 편집
    * 실습용 fastcampus-public-subnet 선택
  * private_NACL 에는 자동으로 fastcampus-private-subnet 만 연결된 상태가 됨

* NACL(public_NACL) 규칙 설정

  * Inbound

    |      | 규칙번호 | 유형        | 프로토콜 | 포트범위 | 소스      | 허용/거부 |
    | ---- | -------- | ----------- | -------- | -------- | --------- | --------- |
    | 추가 | 100      | SSH(22)     | TCP(6)   | 22       | 0.0.0.0/0 | Allow     |
    | 추가 | 200      | HTTP(80)    | TCP(6)   | 80       | 0.0.0.0/0 | Allow     |
    | 추가 | 300      | HTTPS(443)  | TCP(6)   | 443      | 0.0.0.0/0 | Allow     |
    | 기본 | -        | 모든 트래픽 | 모두     | 모두     | 0.0.0.0/0 | Deny      |

    * 규칙 번호 : 규칙이 적용되는 순서
      * 낮은 숫자 순으로 규칙이 적용

  * Outbound

    |      | 규칙번호 | 유형            | 프로토콜 | 포트범위   | 소스      | 허용/거부 |
    | ---- | -------- | --------------- | -------- | ---------- | --------- | --------- |
    | 추가 | 100      | 사용자 지정 TCP | TCP(6)   | 1024-65535 | 0.0.0.0/0 | Allow     |
    | 기본 | -        | 모든 트래픽     | 모두     | 모두       | 0.0.0.0/0 | Deny      |

    * 포트범위 1024-65535 : Outbound 의 경우 임시포트가 배정되어서 나가기 때문에 1024-65535 범위의 포트를 모두 허용 해 주어야함
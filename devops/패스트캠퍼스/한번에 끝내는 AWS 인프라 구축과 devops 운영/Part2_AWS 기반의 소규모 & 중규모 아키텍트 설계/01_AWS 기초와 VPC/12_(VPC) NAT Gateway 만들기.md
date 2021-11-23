# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 12_(VPC) NAT Gateway 만들기



##### NAT Gateway

* Private Subnet 에서 Bastion Host 를 통해서가 아닌, 직접 외부 인터넷과 연결
* 프로그램 설치 및 업데이트 등 으로 사용



##### 목차

* NAT Gateway 만들기
* NAT Gateway 로 Private EC2 에 Mysql 설치하기



##### NAT Gateway 만들기

* NAT Gateway 생성

  * NAT Gateway 이름 - fastcampus-natgateway
  * 서브넷 설정 - public subnet
    * 퍼블릭 서브넷으로 할당을 해야지 인터넷 게이트웨이를 통해 외부 네트워크와 통신이 가능
  * 탄력적 IP 할당 - IP할당 설정

* 라우팅 편집

  * private 라우팅 테이블에 NAT Gateway 를 대상으로하는 설정을 추가

    |      | 대상        | 대상               | 상태 | 전파됨 |
    | ---- | ----------- | ------------------ | ---- | ------ |
    | 기본 | 10.0.0.0/16 | local              | 활성 | 아니요 |
    | 추가 | 0.0.0.0/0   | 생성한 NAT Gateway | 활성 | 아니요 |

    * 10.0.0.0/16 이외의 모든 요청을 NAT Gateway 로 통신





##### NAT Gateway 설정 확인

* Private EC2 console 에서 mysql 설치 명령어가 정상 동작
  * 외부 인터넷과의 통신으로 다운로드 정상 진행
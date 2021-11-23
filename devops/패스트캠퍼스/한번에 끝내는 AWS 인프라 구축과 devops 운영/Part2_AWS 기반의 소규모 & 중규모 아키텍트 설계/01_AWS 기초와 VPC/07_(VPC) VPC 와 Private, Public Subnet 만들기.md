# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 07_(VPC) VPC 와 Private, Public Subnet 만들기



##### VPC 만들기 실습

* AWS VPC 만들기 (VPC)
* Subnet 만들기
  * Public Subnet
  * Private Subnet





##### AWS VPC 만들기 (VPC)

* 기본적으로 Default VPC 1개가 생성되어 있음
* Custome VPC 만들기
  * VPC 생성
    * PVC 이름 입력(선택)
    * IPv4 CIDR 블록 - 10.0.0.0/16
    * IPv6 CIDR 블록 - 블록없음
    * 테넌시 - 기본값
      * 테넌시 : 전용으로 적용 시 VPC 인스턴스를 단일 테넌트 전용 하드웨어에서 실행, 비용이 많이 청구됨
  * VPC 생성 결과
    * 네트워크 ACL 자동 생성
    * 보안그룹 자동 생성
    * 라우팅 테이블 자동생성
    * 그 외에 VPC 내부의 속성들은 모두 생성을 해주어야 함
      * Subnet
      * 인터넷 게이트웨이
      * 엔드포인트 등





##### Subnet 만들기

* Public Subnet 만들기

  * VPC 선택
  * 서브넷 이름 입력 - public subnet
  * 가용영역 선택 - 2a
    * 하나의 Subnet 은 하나의 가용영역에 존재
  * IPv4 CIDR 블록 - 10.0.0.0/24
    * Subnet 내부의 CIDR 블록 지정

* Private Subnet 만들기

  * VPC 선택
  * 서브넷 이름 입력 - public subnet
  * 가용영역 선택 - 2c
    * 하나의 Subnet 은 하나의 가용영역에 존재
  * IPv4 CIDR 블록 - 10.0.1.0/24
    * Subnet 내부의 CIDR 블록 지정

* 생성 결과

  ![07_01_VPC&subnet 생성결과](./imgs/07_01_VPC&subnet 생성결과.png)

  * Route Table / Router - VPC 생성시 자동 생성
  * NACL - Subnet 생성시 자동생성


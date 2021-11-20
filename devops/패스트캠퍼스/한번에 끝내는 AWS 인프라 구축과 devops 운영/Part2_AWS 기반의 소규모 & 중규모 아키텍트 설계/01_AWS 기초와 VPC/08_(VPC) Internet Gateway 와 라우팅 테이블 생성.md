# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 08_(VPC) Internet Gateway 와 라우팅 테이블 생성



* VPN의 Subnet 을 Public/Private 로 규정하는 것은 라우팅 테이블



##### 인터넷 게이트웨이 생성

* 인터넷 게이트웨이 생성

  * 인터넷 게이트웨이 이름 입력 - fastcampus-igw

* 생성 후 게이트웨이의 상태 : Detached

  * VPC 와 연결되어있지 않은 상태
  * 연결 후 Attached
    * 실습용 fastcampus-vpc 와 연결

* 생성 결과

  ![08_01_igw 생성 결과](./imgs/08_01_igw 생성 결과.png)

  * 인터넷 게이트웨이와 VPC 를 연결하였지만, 각각의 Subnet 과의 연결은 되어있지 않은 상태
    * Route Table 에서 인터넷 게이트웨이 와의 연결 설정이 필요





##### 라우팅 테이블 설정

* 라우팅 테이블 상태

  * 생성된 모든 Subnet 이 기본 VPC 생성 시 자동으로 생성된 기본 라우팅 테이블에 연결되어 있다.

* 퍼블릭 라우팅 테이블 생성

  * 라우팅 테이블 이름 입력 - fastcampus-public-ltb

* 라우팅 테이블 설정

  * 서브넷 연결
    * Public Subnet
      * 실습용 public subnet 인 fatcampus-public-subnet 을 fastcampus-public-ltb 에 연결
    * Private Subnet
      * 연결되지 않은 fatcampus-private-subnet 만 기본 라우팅 테이블에 연결된 상태
      * 기본 라우팅테이블을 private 라우팅 테이블로 사용
  * 라우팅 설정
    * Public 라우팅 테이블
      * 기본 라우팅은 10.0.0.0/16 을 local(같은 VPC) 로 연결만 설정되어 있다.
      * Public 라우팅 테이블은 외부 인터넷과의 연결을 담당
        * 10.0.0./16 외의 값은 모두 인터넷 게이트웨이와 연결 되어야 한다.
      * 0.0.0.0/0 (모든 ip) 를 실습용 fastcampus-igw 를 대상으로 추가
        * 라우팅 테이블에 작성되어진 순서대로 동작하기 때문에, 10.0.0.0/16 에 해당하는 연결 외의 모든 연결을 인터넷 게이트웨이와 연결하게 된다.

* 생성 결과

  ![08_02_igw&라우팅테이블 생성 결과](./imgs/08_02_igw&라우팅테이블 생성 결과.png)

  
# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 19_(인프라) ALB 에 인스턴스 연결하여 웹서비스 실행하기



##### ALB 설정

* 대상 그룹 생성
  * EC2 메뉴
  * 로드벨런싱
  * 대상그룹 - EC2 서버의 집합체 - MSA 도입 시, 서비스 별 그룹을 생성하여 그룹 내 서버들을 여러개 생성하여 관리 할 수 있다.
    * Create target group
      * Basic configuration
        * Choose a target type - instances
        * Target group name - testTg
        * Protocol : Port - HTTP:8000
          * 프로토콜에 따라 연결해 주는 port
          * 실습 프로젝트의 경우 8000 port
        * VPC - 실습 프로젝트의 EC2 인스턴스가 포함된 VPC
        * Protocol version - HTTP1
      * Health checks - 로드벨런서의 서버 상태 확인기능
        * Health check protocol - HTTP
        * Health check path - /order/order/
      * Register targets
        * 대상 ec2 인스턴스를 Target Group 으로 등록
* 로드벨런서 생성
  * EC2 메뉴
  * 로드벨런싱
  * 로드벨런서
    * 로드벨런서 생성
      * Load balancer types -  Application Load Balancer
      * Basic configuration
        * Load balancer name - fastcampusELB
        * Scheme - Internet-facing
        * IP address type - IPv4
      * Network mapping
        * VPC - 기본 vpc
        * Mapping - 4개의 ap 모두 할당
      * Security groups - skip 기본설정
      * Listeners and routing
        * Listener HTTP:80
          * protocal : Port - HTTP : 80
          * Default action - testTg



##### 인스턴스 복제

* 이미지 생성
  * EC2
  * 인스턴스
  * 대상 인스턴스 선택
  * 이미지 생성
    * 이미지 이름 - img_for_fastcampus
    * 이미지 설명 - first
    * 재부팅 안 함 - 활성화
    * 이미지 생성
  * 이미지 AMI 생성확인
* 복제된 이미지로 인스턴스 생성
  * 이미지 AMI 시작하기
    * 실습용 EC2 인스턴스와 같이 설정하여 생성
* 로드벨런싱 설정
  * 대상그룹에 생성된 인스턴스 추가

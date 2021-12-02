# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 27_(인프라) 오토스케일링 설정 (AWS Auto scaling Group 와 AMI)



##### 오토스케일링

* ELB 에 연결된 EC2 를 늘렸다가 줄였다가 하는 것
  * Scale out
* 유저가 적을 때는 비용을 아끼고, 유저가 많을 때는 서버 과부화를 막는다.
  * 실제 발생하는 트래픽과 사용량에 따라 조절된다



##### 오토스케일링 설정 프로세스

* 서버 셋팅
* 이미지 생성
  * 이미지 - 서버 내부의 환경을 그대로 캡쳐
* 시작 템플릿 생성
  * 시작 템플릿 - 서버 외부적인 부분, EC2 성능/Key pair 까지 설정
* 대상 그룹 생성
  * default 인스턴스 개수
* ALB 생성
* Auto Scaling 그룹 생성



##### 이미지 생성

* 이미지 생성
  * 이미지 이름 - fastcampus-django-nginx
  * 이미지 설명 - server-nginx
  * 태그 추가
    * 키 / 값 - description / forAutoscaling



##### 시작 템플릿 생성

* EC2
* 시작 템플릿
* 시작 템플릿 생성
  * 시작 템플릿 이름 및 설명
    * 시작 템플릿 이름 - fastcampus-nginx
    * 템플릿 버전 설명 - forAutoscaling
    * Auto Scaling 지침 - check
  * 시작 템플릿 콘텐츠
    * Amazon Machine Image(AMI) - 내 AMI:생성한 이미지인 fastcampus-django-nginx
  * 인스턴스 유형
    * 인스턴스 유형 - t2.nano
  * 키 페(로그인)
    * 키페어 이름 - 사용할 키페어 선택
  * 네트워크 설정
    * 네트워킹 플랫폼 - EC2-Classic
      * Virtual Private Cloud(VPC)
        * 설정한 VPC 사용 가능
      * EC2-Classic
        * 기본 제공 VPC 사용
    * 보안그룹 선택 - 선택
  * 스토리지(볼륨) - 기본설정
  * 그외 - skip



##### 대상 그룹 설정

* 로드 밸런싱
* 대상 그룹
* 대상 그룹 생성
  * Basic configuration
    * Choose a target type - Instances
    * Target group name - fastcampus-nginx-20211202
    * Protocol : Port - HTTP : 80
    * Protocal version - HTTP1
  * Register targets - default EC2 인스턴스 설정 (AMI 를 생성한 인스턴스



##### 로드밸런서 설정

* 로드밸런싱
* 로드밸런서
* 로드배런서 생성
  * Basic configuration
    * Load balancer name - nginx-lb-20211202
    * Scheme - Internet-facing
    * IP address type - IPv4
  * Network mapping
    * VPC - 기본 vpc
    * Mappings - 전부 선택
  * Security groups - 선택
  * Listeners and routing
    * Protocal : Port - HTTP : 80
    * Default action - 생성한 대상 그룹



##### 오토 스케일링 그룹 생성

* 오토 스케잉링 그룹
* 오토 스케일링 그룹 생성
  * 시작 템플릿 또는 구성 선택
    * 이름 - autoscaling-20211202
    * 시작 템플릿 - 생성한 시작 템플릿 선택
    * 버전 - Lastest
  * 인스턴스 시작 옵션 선택
    * 네트워크
      * VPC - 기본 VPC
      * 가용 영역 및 서브넷 - 전부 선택
    * 인스턴스 유형 요구 사항 - default / skip
  * 고급 옵션 구성
    * 로드 밸런싱 선택 사항 - 기존 로드 밸런서에 연결
    * 기존 로드 밸런서에 연결 - 로드 밸런서 대상 그룹에서 선택
    * 기존 로드 밸런서 대상 그룹 - 생성한 로드 밸런서 그룹 선택
    * 상태 확인 선택사항 - EC2, ELB 둘다 선택 / 상태 확인 유예 기간 300초 (기본)
    * 추가 설정 선택사항 - 모니터링 - CloudWatch 내에서 그룹 지표 수집 활성화 check
  * 그룹 크기 및 조정 정책 구성
    * 그룹 크기
      * 원하는 용량 - 1
      * 최소 용량 - 1
      * 최대 용량 - 10
    * 조정 정책 선택사항 - 대상 추적 조정 정책 : 인스턴스 scaling 기준
      * 조정 정책 이름 - Target Tracking Policy_20211202
      * 지표 유형 - 평균 CPU tkdydfbf
      * 대상 값 - 50
      * 인스턴스 요구 사항 - 300 초
      * 확대 정책만 생성하려면 축소 비활성화 - X
    * 인스턴스 축소 보호 - 선택 사항
      * 인스턴스 축소 보호 활성화 - X
  * 알림 추가 - skip
  * 태그 추가 - skip
  * Auto Scaling 그룹 생성



##### 결과

* 오토스케일링 그룹의 생성 결과로, AWS Autoscaling 에 관리를 받는 기본 instance 가 생성이 된다.
* 생성된 instance 는 시작 템플릿으로 설정된 성능이며, 이미지를 생성한 최초 instance의 환경을 복제하여 구동되고 있다.


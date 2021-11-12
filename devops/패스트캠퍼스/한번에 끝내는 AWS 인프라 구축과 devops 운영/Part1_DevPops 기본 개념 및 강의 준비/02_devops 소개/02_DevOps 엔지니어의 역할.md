# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part1. DevOps 기본 개념 및 강의 준비

### 02. DevOps 소개

#### 02_DevOps 엔지니어의 역할



*  목차
  1. DevOps vs DevOps 엔지니어
  3. DevOps 팀의 업무 도메인
  4. DevOps 팀의 핵심 지표





* DevOps vs DevOps 엔지니어
  * 데브옵스 엔지니어는 조직에 데브옵스 문화를 정착시키는데 도움을 주는 역할
  * 개발자가 개발 뿐만 아니라 운영에도 참여할 수 있는 환경을 만들어 준다.
  * 조직이 성장하면서 업무 도메인이 세분화 된 팀들로 구성 될수 있다.
  * 데브옵스 팀의 고객 : 개발자
    * 데브옵스 팀에서 구축하고 운영하는 많은 시스템들의 주 사용자가 개발자



* DevOps 팀의 업무 도메인 : 문제단위
  * 네트워크 (Network)
    * 가상 네트워크 및 물리 네트워크 구성
    * 프록시 / VPN 서버 구성
    * DNS 서버 운영
  * 개발 및 배포 플랫폼 (Development & Deployment Platform)
    * GitLab / GitHub 과 같은 버전관리 및 개발 협업 플랫폼 운영
    * CI/CD 파이프라인 시스템 구축 및 운영
    * QA 테스트 및 성능 테스트를 위한 환경 제공
    * 패키지 저장소 운영 및 배포 산출물 관리
  * 오케스트레이션 플랫폼 (Orchestration Platform)
    * 쿠버네티스 / ECS / Nomad 와 같은 오케스트레이션 시스템 구축 및 운영
      * 오케스트레이션 : 컴퓨터 시스템과 어플리케이션, 서비스의 자동화된 설정, 관리, 조정을 의미
    * Airflow / Argo Workflows 와 같은 워크플로우 엔진 구축 및 운영
      * 정기적으로 수행되어야 하는 cronjob 같은 job 계열을 수행 할 수 있는 환경 제공
  * 관측 플랫폼 (Observability Platform)
    * 로그 / 메트릭 / 업타임 / APM 정보를 관측할 수 있는 중앙화된 시스템 구축 및 운영
      * DashBoard
    * 주요 이벤트에 대한 일림 시스템 구축
  * 클라우드 플랫폼 (Cloud Platform)
    * 개발자들이 활용할 수 있도록 클라우드 환경 운영 (자체 클라우드, 퍼블릭 클라우드 등)
      * AWS 등
  * 보안 플랫폼 (Security Platform)
    * LDAP / AD / SAML 등을 활용하여 통합된 임직원 계정계 운영
    * 서버 및 데이터베이스 접근제어 시스템 구축 및 운영
      * 서버에 ssh 접근 시 개별 사용자 인증 및 Log 설정
    * 네트워크 박화벽 정책 관리
  * 데이터 플랫폼
    * MySQL / DynamoDB / Redis 와 같은 데이터베이스 구축 및 운영
    * RabbitMQ / Kafka / SQS 등과 같은 메시징 서비스 구축 및 운영
    * 데이터 웨어하우스 / BI 대시보드 구축 및 운영
  * 서비스 운영 (Service Operations)
    * 개발자들과 협업하여 서비스 공동 운영
* DevOps 팀의 업무 도메인 : 행위 기반
  * 구축 (Provisioining)
  * 설정 (Configuration)
  * 운영 (Operation)
  * 사용 (Usage)
  * 교육 (Training)
  * 문서화 (Documentation)



* DevOps 팀의 핵심 지표
  * 장애복구 시간, MTTR (Mean Time To Recovery)
    * 얼마나 빠르게 장애 상황에 복구할 수 있는가?
    * 장애 복구 시간이 오래 걸릴 시 인프라 자동화나 배포 파이프라인의 최적화가 필요
  * 변경으로 인한 결함률 (Change Failure Rate)
    * 얼마나 자주 변경 사항으로 인하여 장애가 발생하는가?
    * 변경으로 인한 결함이 자주 발생 된다면, CI 파이프 라인/테스트 진행 과정 이슈 확인 필요
  * 배포 빈도 (Deployment Frequency)
    * 배포를 얼마나 자주하는가?
    * 배포 빈도가 낮다면, 조직내의 문화/시스템 문제가 있을 수 있음
      * 개발 문화 개편
      * 큰 규모의 시스템 -> 마이크로 서비스 시스템 체계로 개편
  * 변경 적용 소요 시간 (Lead Time for Changes)
    * 변경사항의 프로덕션 배포에 걸리는 소요 시간은 얼마인가?
    * 변경사항이 빌드되고 테스트 되는 과정에서 이슈 확인 필요




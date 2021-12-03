# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 17_(인프라) AWS CodeDeploy 1



##### AWS CodeDeploy

* Amazon EC2, AWS Fargate, AWS Lambda 및 온프레미스 서버와 같은 다양한 컴퓨팅 서비스에 대한 소프트웨어 배포를 자동화하는 완전관리형 배포 서비스
* 새로운 기능을 더욱 쉽고 빠르게 출시할 수 있고, 애플리케이션을 배포하는 동안 가동 중지 시간을 줄이는 데 도움이 되며, 복잡한 애플리케이션 업데이트 작업을 처리
* 소프트웨어 배포를 자동화함으로써 오류가 발생하기 쉬운 수동 작업 제거
* 배포 요구 사항에 맞게 서비스가 확장에 용의



##### AWS CodeDeploy 의 구성요소

* Compute Platform
  * EC2
  * On-premieses
  * serverless Kambda
  * ECS
* Deplyment Types & Groups
  * LoadBalance 의 Target Group 과 유사
* IAM & Service Roles
  * 협업을 위한 사용자 계정 및 권한 설정




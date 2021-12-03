# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 08_(인프라) AWS Fargate를 통한 배포



##### 순서

* 클러스터 생성
  * 클러스터 : 컨테이너의 집합체
* 작업 생성
  * 클러스터 내부의 작업 설정
  * 작업 내부에 컨테이너 존재
* 작업 실행



##### ECS 활용을 위한 클러스터 생성

* AWS ECS
* 클러스터
  * 클러스터 생성
    * 클러스터 템플릿 선택
      * 네트워킹 전용 - Fargate 만 사용 하는 설정
    * 클러스터 구성
      * 클러스터 이름 - fastcampus-fargate-cluster
      * 네트워킹 - 기본설정
      * Tags - 기본설정
      * CloudWatch 컨테이너 인사이트 - 활성화
    * 생성



##### 클러스터 작업 생성

* AWS ECS
* 작업 정의
  * 새 작업 정의 생성
    * 시작 유형 호환성 선택
      * FARGATE - 선택
      * EC2 - 고전적인 방식, EC2 를 거쳐서 docker 가 배포
      * EXTERNAL - 다른 docker repository 사용 시
    * 작업 및 컨테이너 정의 구성
      * 태스크 정의 이름 - fargate-task
      * 태스크 역할 - skip
      * 네트워크 모드 - 기본
      * 운영 체제 패밀리 - 기본
    * 작업 크기
      * 작업 메모리 - 0.5 GB (최소)
      * 작업 CPU (vCPU) - 0.25 GB (최소)
    * 컨테이너 추가
      * 표준
        * 컨테이너 이름 - django1
        * 이미지 - ECR Repository 에 Upload 한 Image 주소
        * 프라이빗 레지스트리 인증 - X (기본)
        * 메모리 제한 - 소프트제한 128
        * 포트 매핑 - 8000 tcp
      * 그외 - skip
    * 그외 - skip
    * 생성
* 작업 실행
  * 작업은 실행하여야 동작 시작
  * 작업 실행
    * 시작 유형 - FARGATE
    * 운영 체제 패밀리 - skip
    * 작업정의 - 생성한 fargate-task
    * 플랫폼 버전 -LATEST (기본)
    * 클러스터 - 생성한 클러스터 fastcampus-fargate-cluster
    * 작업 개수 - 1
    * 작업 그룹 - skip
    * VPC 및 보안 그룹
      * 클러스터 pvc - default
      * 서브넷 - 전체선택
      * 보안그룹 편집
        * 보안 그룹 선택
    * 작업 실행



##### 작업 실행 결과

* ECS 클러스터 작업의 퍼블릭 IP 로 접속 시, django 서버의 구동을 확인 할수 있다.

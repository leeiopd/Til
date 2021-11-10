# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part1. DevOps 기본 개념 및 강의 준비

### 02. DevOps 소개

#### 01_DevOps 개요



*  목차
  1. DevOps 정의
  2. DevOps 역사
  3. DevOps 가 필요한 이유
  4. DevOps 는 어떻게 하는 것인가?





* DevOps 정의
  * Wiki : 제품의 변경사항을 품질을 보장함과 동시에 프로덕션에 반영하는데 걸리는 시간을 단축하기 위한 실천 방법의 모음
  * 개발 (Dev) 과 운영(Ops) 의 합성어
  * 개발과 운영의 경계를 허물고 하나의 팀으로 통합하고자 하는 문화 혹은 철학



* DevOps 역사 : 태동
  * 2009년 O'Reilly Velocity 컨퍼런스
  * < 하루에 10회 이상 배포하기 : Flickr 에서 Dev 와 Ops 의 협업 >
* DevOps 역사 : 탄생
  * 2009년 DevOpsDays Ghent
  * 패트릭 드부아가 <10 Deploys per Day> 발표를 듣고 감명 받아 주최된 컨퍼런스
  
* DevOps 역사 : 구글 검색어 트랜드
  * 2009 년을 시작으로 가파른 성장세






* DevOps 가 필요한 이유
  * 소프트웨어 개발의 라이프사이클 : SDLC (Software Development Lifecycle)
    * Design / Develop / Test / Deploy / Operate / Support
    * 각 단계별 전문가로 구성된 기능 조직 운영
      * Design : Architect
      * Develop : Developer
      * Test : SDET
      * Deploy : Release Eng
      * Operate : Sys Admin
      * Support : Customer Support
    * 조직의 규모가 크다면 의사소통이 많아지기 때문에, 커뮤니케이션 문제가 발생하고 병복구간이 생기기 쉬워진다.
  * 개발자가 소프트웨어의 생애주기 중 여러 단계에 참여할 수 있다면?
    * DevOps 가 조직에 정착되고 나면 개발자는 작성한 코드에 대해 스스로 테스트, 배포, 운영 할 수 있다.
  * Full-cycle Developer
    * 소프트웨어 개발 생에주기의 전체에 직접 참여하는 개발자 (넷플릭스 에서 제시한 모델)





* DevOps 는 어떻게 하는 것인가?
  * DevOps 는 패러다임, 방법을 제시하지 않는다.
  * DevOps 는 문화, 개발과 운영의 벽을 허물어 더 빨리 자주 배포하자





* DevOps 실천 방법 : AWS
  * 지속적 통합 (Continuous Integration)
    * 변경사항을 build 및 test 를 진행 후, 통합하여 제품의 품질 보장
    * 개발 결과물을 운영으로 전달 하는 과정에서 품질 보장
    * DevOps 의 기본 사항
  * 지속적 배포 (Continuous Delivery)
    * 개발 결과물의 산출물을 자동으로 개발환경이나 운영환경까지 배포하도록 만든 파이프라인
    * DevOps 의 기본 사항
  * 마이크로서비스 (Micro-services)
    * 자동화된 파이프라인을 도입하였더라도, 규모가 있는 서비스에서는 빌드 및 테스트 배포 단계에서 병목현상이 발생
    * 커다란 서비스를 여러 마이크로 서비스로 쪼개어 빌드 타임과 배포타임을 단축시킬수 있음
  * IaC (Infrastructure as Code)
    * Infrastructure 를 code 로 관리
    * 서비스를 배포함에 있어서 Infra 변경사항이 발생 할 때, 자동화시켜 적용
  * 모니터링과 로깅 (Monitoring & Logging)
    * 제품의 메트릭과 로그데이터를 중앙에서 확인 할 수 있는 환경 제공
    * 개발자들이 직접 운영에 참여 함으로써, 제품에 문제가 발생 시 빠르게 대처 가능
  * 소통 및 협업 (Communication & collaboration)
    * Slack : 메신저
    * Jira : 이슈트래킹 시스템
    * Confluence / Notion : Wiki 시스템
* DevOps 실천방법 : Flickr (2009)
  * 변화에 대응하기 위한 도구
    * 자동화된 인프라 (Automated Infrasturcture)
    * 버전관리 공유 (Shared Versiohn Control)
    * 쉬운 빌드 및 배포 (One-step Build and Deploy)
    * 기능 활성화 스위치 (Feature Flag)
    * 메신저 봇 (IRC and IM Robot)
  * 변화에 대응하기 위한 문화
    * 존중 (Respect)
    * 신뢰 (Trust)
    * 실패에 대한 긍정적인 자세 (Healty Attitude about Failure)
    * 비난하지 않기 (Avoiding Blame)








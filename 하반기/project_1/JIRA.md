# JIRA

### 1. JIRA란 무엇인가?

> #### Issue Tracking 시스템

* 프로젝트에서 예상되거나 또는 프로젝트에서 예상 되거나 또는 이미 발생한 "이슈"들을 관리하는 것
* 관리 대상 이슈로는 업무(작업), 문제점, 개선 사항 등이 있음
* 이슈 관리 방법
  - 목록으로 정리
  - 우선 순위 부여
  - 담당자 지정
  - 진행 과정을 추적
* 이러한 일련의 내용들을 시스템적으로 관리
* 유사한 솔루션: Redmine, Mantis, Trac, Bugzilla 등



> #### Proejct 관리 도구

* 프로젝트 진행에 필요한
  * 기간, 리소스 등에 대한 계획 수립
  * 이슈들의 진행 상태 추적
  * 통합된 리포트 및 대시보드 제공
* 프로젝트 참여자의 업무 과정(태스크의 할당, 작업 로그 등)을 기록
* 프로젝트 전반에 걸친 모니터링 및 플래닝 도구 제공
* 개발 과정이나 업무 처리에 필요한 다양한 도구와 연동



> #### Jira Core / Software / ServiceDesk

* 필요 시 하나의 jira에 모두 설정 가능
  * Core : Jira의 기본기능 탑재
  * Software : Board 기능 및 Software Type 프로젝트 사용가능
  * ServiceDesk : 사용자 Portal 및 SLA 관리 기능 사용가능
* Software나 ServiceDesk 사용 시 Core기능은 기본으로 포함





### 2. JIRA의 프로젝트

* 실제 조직의 프로젝트와 Mapping
* 프로젝트 단위로 이슈들을 관리
* 멤버 관리
* 이슈 유형(Issue Type) 관리
* 워크플로우 관리





### 3. JIRA Issue 생성 및 기본 정보 입력

> #### JIRA Issue

* 실제 해야 할 업무를 등록
* 프로젝트에 속함
* 기본 트래킹 단위
* 워크플로우 적용



> #### Issue 생성 및 기본 필드 입력

* Project
* Issue Type
* Summary
* Priority
* Assignee
* Description
* Attachments





### 4. Issue Type

> #### JIRA에서 제공하는 기본적인 Issue Type (Core)

* Task: 일반적인 작업으로 가장 작은 규모
* Sub-Task: 하나의 이슈를 세부적으로 나누는 하위 이슈



> #### JIRA에서 제공하는 기본적인 Issue Type (Software)

* Bug: 제품이 설계대로 동작하지 않는 문제점
* Improvement: 제품이 가지고 있는 기능을 개선 또는 향상시키는 것
* Epic: 애자일에서 큰 규모의 작업으로 여러 Story들의 집합
* Story: 일반적인 작업으로 중간정도의 규모
* Task: 일반적인 작업으로 가장 작은 규모
* Sub-Task: 하나의 이슈를 세부적으로 나누는 하위 이슈



### 5.  Issue 상세 관리(이동, Link, Sub-Task 등)

> #### More 메뉴

* Log Work
* Voters
* Watchers
* Create Sub-Task
* Move
*  Link
* Clone
* Labels
* Delete





### 6.  Issue Priority와 Time Tracking

> #### Issue Priority

* 일을 진행하는 우선 순위
* 조직의 여건에 맞게 우선 순위를 정해야 함
  * 모든 이슈가 Highest나 High일 수는 없음
* 일반적인 우선 순위 및 조치 방법
* Highest: 시스템이 전혀 사용 불가능한 상태
  * 조치 방법: 10분 이내 담당자 지정. C레벨 보고
* High: 시스템의 주요 기능이 동작 불능
  * 조치 방법: 1시간 이내 담당자 지정. 팀장 보고
* Medium: 시스템의 일부 기능에 제약
  * 조치 방법: 4시간 이내 담당자 지정
* Low: 시스템 기능은 동작하나 일부 기능 불편
  * 조치 방법: 24시간 이내 담당자 지정
* Lowest: 시스템 기능 동작에 영향 없음



> #### Time Tracking

* 프로젝트 리소스 중에서 시간은 매우 중요한 자원
* 각 단위 작업들에 대한 시간을 산정하여 프로젝트 전체의 일정을 예측해야 함
* 예상 작업 시간 (Estimated Time)
  * 이슈 생성 시 입력
* 실제 작업 시간 (Logged Time)
  * 작업 시간을 기록하면 Remaining Time 자동 계산



### 7. Workflow

> #### Workflow의 효과

* 진행 중인 작업의 상태를 명확하게 알려 줌
  * 작업 상태를 알기 위한 커뮤니케이션 불필요
* 전체 프로젝트의 상태 파악 및 리소스 계획 수립 가능
* 새로운 팀원을 포함한 전체 팀원들 간의 협업 용이



>#### JIRA에서 기본적으로 제공하는 Workflow

* Open: 이슈가 최초 생성되어 아직 작업에 들어가기 전 상태
* In Progress: 담당자가 정해지고 이슈에 대한 작업이 진행 중인 상태
* Resolved: 담당자가 작업을 완료한 상태
* Closed: 이슈를 요청했던 요청자가 담당자의 작업 결과에 만족하여 이슈의 완료에 동의한 상태
* Reopened: 완료된 이슈에 문제가 발견되어 다시 작업을 진행하는 상태



> #### Issue Resolution

* 이슈 해결 방법 입력
  * Fixed, Duplicate, Won’t Fix, Unresolved 등
* JIRA 애자일에서 기본적으로 제공하는 Workflow
  * Kanban Software Development
  * Scrum Software Development



### 8.  Bulk Operation

> #### Bulk Operation이란?

* 여러 이슈들에 대한 다음과 같은 작업들을 한꺼번에 수행할 수 있는 기능
  * Workflow 상태 변화
  - 이슈 편집 또는 삭제
  * Move
  * Watch 또는 Stop Watching



### 9. Issue 검색 및 JQL

> #### JIRA의 Issue 검색 기능

* 프로젝트,이슈타입, 상태, 텍스트 등 다양한 조건을 기반으로 검색
  - Apache Lucene 검색 엔진 사용
* 검색 결과를 “필터”로 저장했다가 재 사용 하거나 다른 사람과 공유 가능
* Basic Search 기능을 통해 초보자도 쉽게 사용 가능한 검색 기능
* Advanced Search 기능을 통해 JQL(Jira Query Language) 기반의 고급 검색 기능
* 검색 결과를 차트로 표시하거나 엑셀로 저장 가능



> #### Advanced Search 및 JQL

* SQL과 유사한 JQL(JIRA Query Language) 언어 기반의 강력한 검색 기능
* Basic Search에서 제공하지 못하는 검색 가능
  - Project Category 조건, 함수 사용, AND/OR 등 논리 연산자
* Syntax Help 및 자동 완성 기능을 통해 문법을 완전히 외우지 않아도 사용 가능



>  #### JQL Tips

* 자동 완성 기능을 최대한 활용
  * 예: 'project = ' 이라고만 입력하면 선택 가능한 프로젝트 추천
* AND, OR 연산자를 활용하여 여러 조건 결합
* 값이 없는 필드의 경우 'EMPTY' 키워드 통해서 검색 가능
  * 예: due date = EMPTY
* 기본 제공되는 함수 및 문법 활용
  * 금주에 완료 될 이슈: due <= endOfWeek()
  * 지난 2주 간 업데이트가 없는 이슈: not updated >= startOfDay(-2w)
  * 나의 진행 중인 이슈: resolution is EMPTY and assignee = currentUser()



> #### Issue Filter

* 검색 결과를 저장 하여 재 사용 하는 기능
* 다른 사람에게 필터를 공유하여 조직 내에서 활용
* 필터 관리 기능
* 저장된 필터를 수정하여 재 활용





### 10. Dashboard

> #### Dashboard란?

* 프로젝트의 전체적인 정보를 실시간 볼 수 있는 페이지
* 커스터마이제이션 가능
  * 표시할 내용, 레이아웃 등
* 프로젝트 팀원들과 공유
* Built-in 또는 Add-on 형태의 Gadget 제공
  * Gadget: 표, 차트 등 다양한 시각화 도구
* 저장된 필터를 자료의 소스로 사용



### 11.  Agile 보드

> #### Kanban 보드

* 칸반(Kanban)
  * 신호, 지시카드를 나타내는 일본어
* 도요타에서 연결된 여러 공정 작업 효율화를 위해 채택했던 방법 중의 하나
  * JIT(Just In Time)
  * Lean Production
  * Kanban 시스템
* 카드만큼 생산할 분량을 결정
  * 카드 인출을 통해 생산을 시작
* 칸반 체계를 JIRA에 구현한 애자일 보드의 하나



> #### Scrum 보드

* 전체 프로젝트 기간을 Sprint 라는 정해진 기간 (Time-Box)로 분리
* 프로젝트 전체적으로 해야할 작업(이슈) 내용을 백로그에 저장/생성
* Sprint 별로 할 수 있는 분량만큼의 작업(백로그)를 선택해서 Sprint에 넣고 작업
* Sprint 기간 동안 처리 불가능한 작업들은 리뷰를 거쳐 다음 Sprint로 이관
* 백로그를 관리하고 Sprint 기간의 통제, 리뷰를 주도할 스크럼 마스터 역할의 필요성



> #### 보드 Configuration

* 보드에 대한 각종 구성 관리
* 보드로 표시할 프로젝트나 쿼리
* 표시할 컬럼
* 퀵 필터
* 보드의 표시 방법(컬러, 레이아웃)
* 작업 요일(Working days)
* 이슈 상세 보기(Issue Detail View)





### 12. User/Group 관리

> #### 사용자 추가 방법

* Invite User – 이메일을 통해 사용자를 초대하면, 사용자가 각자 계정 생성
* Create User – 관리자가 직접 계정을 등록해 주는 방식
* LDAP, Active Directory 연동





### 13. Reporting

> #### JIRA Reporting

* 프로젝트 개요
  * Activity View
  * Statistics View
* 프로젝트 리포트
  * Average Age Report
  * Created vs. Resolved Issues Report
  * Pie Chart Report
  * Resolution Time Report
  * Time Since Issues Report
  * Time Tracking Report



> #### Agile Reporting

* Burndown Chart
  * 스프린트 내, 예상 작업량 대비 완료된 분량 표시
  * 앞으로 남아 있는 작업 분량, 예상 종료일 추정
  * 예상 작업 시간, 이슈 개수, Story Point 등 다양은 기준으로 작업 분량 산정
* Velocity Chart
  * 스트린트 동안 예상된 작업량 대비 얼마나 수행(완료)했는지 표시
  * 스프린트 별 통계
  * 팀이 스프린트마다 어느 정도의 작업을 수행할 수 있는지 측정

* Control Report
  * 이슈들이 각 워크플로우 상태에 머문 시간
  * 전체 평균(Rolling Average)의 모양을 통해서 프로세스가 개선 중인지 알 수 있음
    (우하향 – 단계별 처리 시간 단축)
  * 평균과 이슈들의 편차를 통해서 워크플로우 상 bottle-neck이 되는 지점 파악 가능
* 기타
  * Sprint Report
  * Cumulative Flow Diagram
  * Version Report
  * Epic Report
  * Epic Burndown
  * Release Burndown
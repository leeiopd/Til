 # Firebase

* 구글에서 제공하는 BaaS
  * Backend as a service
  * 클라우드 시스템을 이용해서 서버와 데이터 베이스를 구축을 제공
  * 서버를 구축하는데 필요한 시간 단축
  * 구글의 방대한 클라우드 시스템을 이용한 데이터베이스 및 스토리지 제공
  * 보안 문제도 알아서 해결 해줌
  * 여러가지 API와 편의기능 제공
  * 프론드엔드 개발자가 서버까지 공부를 해야 하는 환경으로 변화 중

* RDBMS(SQL database) vs NoSQL
  * Relational
    * Schema를 먼저 정의 해야 함
    * foreignKey로 연결
  * Document data model
    * NoSQL
    * Java Script의 dictionary 형태로 데이터 정리
    * SQL query로 조회 불가능 
* NoSQL 클라우드 데이터베이스(구글의 DB)
  * 고정되지 않은 데이터베이스 스키마
    * 처음 그로젝트를 시작할 때와 프로젝트가 커질 때 상당한 이점이 된다.
    * 트리 형태로 되어 있어서 데이터 간의 관계를 정의할 수 없다.
  * 쿼리 속도가 느림
    * SQL 쿼리를 사용할 수 없고 대신 트리 구조를 잘 만들어야 한다.
    * 검색에 걸리는 노드의 개수가 많아지면 연산 속도가 매우 느려진다.
      * 몇 단계의 레이어를 거치는 방식으로 레이어를 짜야 개선 할 수 있음.
    * 최근엔 firestore의 등장으로 개선되었다고 한다.
  * JSON 형태로 된 데이터
    * Parsing 할 필요가 없기 때문에 클라이언트와의 연동이 편하고 parse error의 가능성도 없다.
* 클라우드 함수
  * Real-time database
    * 데이터를 저장, 삭제, 변경
    * Consistency 확보를 위한 후 처리와 분류
  * Firebase authentification
    * 사용자 가입 및 탈퇴 등 사용자 정보 처리
  * Analytics
    * google analytics 이벤트 발생 시 처리
  * Cloud storage
    * storage (일종의 CDN) 관리
  * HTTP
    * HTTP 요청에 대한 응답 생성
    * RESTful API와 비슷
  * Cloud sub/pub
    * google cloud 시스템 간 메세징
* 그 외 편리한 기능들
  * Authentication 모듈 제공
    * 자체적으로 회원가입 및 로그인 기능과 UI를 제공
    * sns를 통한 sso연동도 가능
  * 클라우드 메세징
    * 기기에 상관 없이 간편하게 푸시 알림 기능을 제공
  * google analytics와의 연동
    * 사용자가 서버로 보내는 요청을 기록해 보고서 작성
    * 추적 코드에서 발생시키는 이벤트에 대한 핸들러를 구현 할 수 있음
  * 오류보고, 광고 게재, 호스팅 등,,,

* Repository 만들기
  * git init
    * 현재 directory에 repository를 초기화 함
  * git clone
    * repository를 다운받고 origin이라는 remote repository를 설정함.
* Local directory의 상태
  * Working directory
    * 우리가 실제로보는 로컬 디렉토리
    * .git에 등록된 특정 버전이 반영 된 상태
  * staging area
    * 새로운 commit으로 저장될 파일들의 상태를 저장
  * Git directory
    * .git이 담고 있는 버전 정보
    * Commit을 하면 이곳을 업데이트하게 되고, 이곳이 업데이트되면 working directory와 동기화 된다.

* Commit
  * Push를 하기전에 반드시 pull부터 합니다
* git status
  * 파일들의 상태를 볼 수 있음
* git diff
  * Working directory와 git directory 사이의 차이점을 보여줌
  * 플래그가 없으면 unstaged 파일들을 보여줌
  * --cached가 붙으면 staged파일들을 보여줌
* git reset [filename]
  * filename의 파일

* git branch [name]
  * 새 branch 생성
* git checkout [name]
  * 새 branch를 생성하고 branch 이동
* git merge [name]
  * 현재 브랜치 안에 name 브랜치의 내용과 합친다
  * 부딪히는 경우 conflict가 발생

* branch협업시
  * 통합 브랜치(integrantion branch)
    * 작업이 끝난 버전을 모아두는 완성된 버전의 브랜치
  * 토픽 브랜치(topic branch)
    * 하나의 이슈를 처리하기 위한 통합 브랜치에서 분기하는 브랜치
    * 이슈가 해결되면 pull request를 통해 통합 브랜치에 merge 한후 브랜치 삭제


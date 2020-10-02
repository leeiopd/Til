# Git

* 분산된 버전 컨트롤 시스템
  * 중심화된(centralized) VCS가 아닌 탈중심화된 (distributed) VCS
    * 메인 서버를 중심으로 파일을 관리하는 것이 아니라 각 로컬 브랜치에 별도로 저장된다.
    * 서버 다운에 취약하지 않다.
    * 오프라인 환경에서도 작업할 수 있다.
    * 얼마든지 중간 버전으로 롤백할 수 있다.
  * 브랜치 분리를 통한 협업
    * 서로 ㄷ른 브랜치에서 각자 커밋을 쌓은 후 합칠 수 있다.
    * 주로 릴리즈용 브랜치와 개발용 브랜치를 분리하는 편.
    * 프로젝트 매니저와 각 개발자의 역할 분담이 용이하다.

* Repository와 branch
  * Repository
    * 내 프로젝트와 프로젝트의 모든 버전 정보를 담는 단위
  * Remote reository
    * Repository의 한 가지 상태 -> repository를 저장하고 있는 서버
    * push와 pull이 이루어짐
* Branch
  * 버전들의 히스토리의 독립적인 단위
  * Local directory를 추적하는 local branch와 remote repository를 추적하는 remote branch가 있음.
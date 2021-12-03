# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 16_(인프라) AWS CodeCommit



##### AWS CodeCommit

* GitHub 와 유사한 코드 저장소 및 형상관리 서비스
* AWS CodeCommit 은 git 기반의 리포지토리를 호스팅
* S3 에 모든 코드를 암호화하여 저장 (AWS KMS)
* IAM 인증을 통해 push/pull 에 대한 권리 확인
* 5명 미만까지 무료



##### IAM 유저 생성

* IAM 유저 추가
  * 사용자 추가
    * 사용자 세부 정보 설정
      * 사용자 이름 - codecommit_master
    * AWS 액세스 유형 선택
      * 액세스 유형 - 프로그래밍 방식 액세스
    * 권한 설정
      * 기존 정책 직접 연결 - AWSCodeCommitFullAccess
    * 태그 추가 - skip
    * 사용자 만들기
* Git 자격 증명 생성
  * AWS CodeCommit dㅔ 대한 HTTS Git 자격 증명 생성
  * 자격증명 다운로드



##### EC2 인스턴스 설정

* AWS CLI 설치

  ```bash
  $ sudo apt install awscli
  ```

* AWS configre 설정

  ```bash
  $ aws configure
  ```

  * 생성한 IAM 유저 등록



##### Codecommit 리포지토리 설정

* 리포지토리 생성
  * CodeCommit
  * 리포지토리
    * 리포지토리 생성
* 생성된 리포지토리는 git 과 똑같이 사용하면 됨



##### CodeCommit 사용

* git cline

  ```bash
  $ git clone 'AWS CodeCommit repository 주소'
  ```

  * user name / password 입력은 IAM 으로 생성한 CodeCommit 용 ID와 Password 사용

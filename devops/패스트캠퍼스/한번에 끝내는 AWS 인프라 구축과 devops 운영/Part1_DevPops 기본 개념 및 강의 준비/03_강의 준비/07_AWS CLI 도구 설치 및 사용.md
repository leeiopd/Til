# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part1. DevOps 기본 개념 및 강의 준비

### 03. 강의 준비

#### 07_AWS CLI 도구 설치 및 사용



* 목차
  * AWS CLI 소개
  * AWS CLI 설치 (macOS)
  * AWS 엑세스 키 발급
  * AWS CLI 설정
  * AWS CLI 사용 방법





* AWS CLI 소개
  * AWS 서비스를 관리할 수 있는 명령형 도구
  * Python 기반으로 작성되어 Boto 패키지를 이용
  * 콘솔 상에서 AWS 서비스를 관리하거나, 자동화 스크립트 작성에 활용 할 수 있음





* AWS CLI 설치 (macOS)

  * ```bash
    $ brew install awscli
    ```





* AWS CLI 자격증명: AWS 액세스 키 발급
  * AWS 계정 혹은 IAM 사용자의 액세스 키 발급 필요
* Access Key ID
  * 자격증명 주체를 기리킴
  * 인증 요청한 사람이 누구인가?
  * 공개가능한 key
* Secret Access Key
  * 자격증명 주체 본인임을 인증
  * 인증 요청한 사람이 정말 A가 맞는가?
  * 비공개 key





* AccessKey 생성
  1. 로그인 - 우측상단 계정명 클릭 - 내 보안 자격증명
  2. 보안 자격 증명 - 새 액세스 키 만들기
  3. 키 파일 다운로드





* AWS CLI 자격증명 설정
  * AWS CLI 자격증명 설정 우선순위 - 적용 우선순위
    * CLI 명령어 옵션
    * 환경변수
    * CLI 자격증명 파일 - ~/.aws/credentilas
    * CLI 설정 파일 - ~/.aws/config
    * 컨테이너 자격증명 (EC2의 경우)
    * 인스턴스 프로파일 자격증명 (EC2 의 경우)





* AWS CLI 자격증명 설정: CLI 설정 파일
  * ~/.aws/config
  * 기본설정 관리
    * [default] 섹션이 존재
  * 추가 사용자 프로파일 관리

* AWS CLI 자격증명 설정: 환경변수
  * 환경변수를 통해 AWS CLI의 자격증명을 설정하는 방법은 여려가지
  * 기본적으로 AccessKey 를 설정하는 방법과 사용자 프로파일을 지정하는 방법을 알아두면 좋다.
    * AccessKey 를 통해 설정하는방법
      * AWS_ACCESS_KEY_ID 변수 사용
      * AWS_SECRET_ACCESS_KEY 변수 사용
    * 사용자 프로파일을 지정하는 방법
      * AWS_PROFILE 변수 사용
* AWS CLI 자격증명 설정: CLI 명령어 옵션
  * AWS CLI 명령어 옵션은 가장 높은 우선순위를 가지고 있지만, Access Key 를 지정하는 방법은 없으며, 사용자 프로파일 지정만 가능
    * --profile 옵션을 통해 해당 AWS CLI 명령을 수행 할때, 특정 사용자 프로파일을 이용하여 명령어가 수행되도록 설정
    * CLI 명령어 옵션을 통해 Access Key 를 지정하는 방법은 제공하지 않음
    * 사용자 프로파일을 CLI 명령어 옵션을 통해 지정하는 방법만 제공
* AWS CLI 자격증명 설정: EC2 인스턴스 프로파일
  * 인스턴스 프로파일 (Instance Profile)
    * IAM 역할(Role) 을 EC2 머신에 부여하기 위한 목적
    * EC2 내에서 AWS 서비스에 대한 권한을 수행할 수 있게 됨
  * AWS 를 서비스 운영에 이용한다면, 인스턴스 프로파일의 개념과 사용방법은 필수





* AWS CLI 설정파일로 액세스키 설정

  * 다운로드 받은 AWS AccessKey 정보를 ~/.aws/config 에 작성

    1. AWS AccessKey 정보 확인

       ```bash
       $ cat AWS_AccessKey_file_namne.scv
       AWSAccessKeyID=*********************
       AWSAccessKey=*********************
       ```

    2. AWS 키 정보 작성

       ```bash
       $ vim ~/.aws/config
       ```

       ```
       // ~/.aws/config
       [default]
       aws_access_key_id=*********************
       aws_secret_access_key=*********************
       ```

    3. 설정 완료 Test

       ```bash
       $ aws sts get-caller-identity
       {
       	"UserId": "*************",
       	"Account": "************",
       	"Arn": "arn:aws:iam::*************:root"
       }
       ```

       * Web console 에서 동일한 계정 ID 임을 확인 할 수 있다.



* AWS CLI 기본 리전 설정

  * 사전에 기본 리전을 설정해 두면 AWS CLI 사용시 매번 리전 옵션을 주지 않아도 되어 편리하다.

  * 리전 설정

    * AWS CLI 명령어를 수행할 기본 AWS 리전 설정

    * 명령어 수행시 --region 옵션을 추가하여 재설정 가능

      ```
      // ~/.aws/config
      [default]
      region=ap-northeast-2
      ```

  * 리전  Test

    * ec2 keypair 를 불러오는 명령어 실행 시, region 설정이 필요하다고 함

      ```bash
      $ aws ec2 describe-key-pairs
      
      You must specify a region. You can also configure your region by running "aws configure."
      ```

  * 리전 설정 옵션 명령어 추가

    * --region 리전명 : 옵션추가로 가능

    ```bash
    $ aws ec2 describe-key-pairs --region ap-northeast-2
    {
    	"KeyPairs": [
    		{
    			"KeyPairId": "**********************",
    			"KeyFingerprint": "*******************************",
    			"KeyName": "***************",
    			"Tags": []
    		}
    	]
    }
    ```

  * 기본 리전 설정

    ```
    // ~/.aws/config
    [default]
    region=ap-northeast-2
    ```

    * 기본 리전 설정 후, 리전 옵션없이 명령어 실행이 가능





* AWS CLI 결과 출력 형식 설정

  * 결과 출력 형식

    * AWS CLI 명령어 수행 후 나오는 결과 데이터의 출력 형식을 의미
    * 지원하는 출력 형식: json, text, table, yaml, yaml-stream

    ```
    // ~/.aws/config
    [default]
    output=json
    ```

  * 출력 형식 옵션 명령어 추가

    ```bash
    $ aws ec2 describe-key-pairs --output yaml
    KeyPairs:
    - KeyFingerprint: *******************
    	KeyName: ************
    	KeyPairId: ****************
    	Tags: []
    ```







* AWS CLI 사용자 프로파일 설정

  * 사용자 프로파일 설정을 통해 여러 AWS 자격증명을 이용하여 효율적인 관리 가능

  * 사용자 프로파일 설정

    * ~/.aws/config 파일상에 [profile name] 섹션을 추가하여 여러 사용자 프로파일 등록 가능

    ```
    // ~/.aws/config
    [default]
    
    [profile user1]
    aws_access_key_id=*********************
    aws_secret_access_key=*********************
    ```







* AWS CLI 사용자 프로파일 사용

  * 사용자 프로파일 사용

    * AWS_PROFILE 환경변수 혹은 --profile 옵션을 사용하여 특정 사용자 프로파일로 명령어 수행 가능

      ```bash
      $ export AWS_PROFILE=profile_name aws sts get-caller-identify
      $ aws sts get0caller-identify --profile=profile_name
      ```

    * 설정한 사용자 프로파일은 명령어 수행 시 환경변수 혹은 옵션을 통해 활용 가능





* AWS CLI 멀티 사용자 프로파일

  * 여러 AWS 계정 운영

  * 동일 계정 내 여러 리전 운영

  * 동일 계정 내 여러 IAM 역할 전환 수행

  * AWS SSO 조직 내 SSO 역할 수행

    * SSO (Single Sign On) : 하나의 아이디 및 패스워드를 통해 여러 시스템에 접근 할 수 있는 통합 로그인(인증) 솔루션

      * 사용자 통합 로그인

      * 인증 서버

      * 통합 에이전트 : 각 정보 시스템에 대한 정보 관리

      * LDAP(Lightweight Directory Access Protocol) : 네트워크 상의 자원을 식별하고 인가된 사용자만 접근하도록 하는 네트워크 디렉토리 서비스

        



* AWS CLI 멀티 사용자 프로파일 예제

  ```
  // ~/.aws/config
  [default]
  region=ap-northeast-2
  
  [profile eu-west-1]
  region = eu-west=1
  aws_access_key_id = *******************
  aws_secret_access_key = &&&&&&&&&&&&&&&&&&&&&&
  
  [profile ap-northeast-1]
  region = ap-northeast-1
  aws_access_key_id = ##############
  aws_secret_access_key = @@@@@@@@@@@@@@@@@@@@@
  ```

  

  ```bash
  $ aws configure get region
  ap-northeast-2
  // 기본 사용자 profile 지역 불러오기
  
  $ aws configure get region --profile eu-west-1
  eu-west-1
  // eu-west-1 profile 의 지역 불러오기
  
  $ export AWS_PROFILE=ap-northeast-1
  $ aws configure get region --profile eu-west-1
  // 환경변수 이용하여 eu-west-1 profile 의 지역 불러오기
  ```





* AWS CLI 사용법

  * AWS CLI 명령어 구조

    ```bash
    $ aws <command> <subcommnad> [options and parameters]
    ```

  * 버전확인

    ```bash
    $ aws --version
    ```

  * 메뉴얼 확인

    ```bash
    $ aws help
    $ aws <command> helf
    $ aws <command> <subcommnad> help
    ```

  * 디버그 모드 활성화

    ```bash
    $ aws sts get-caller-identity --debug
    ```

  * 디버그 모드 활성화

    ```bash
    $ aws sts get-caller-identity
    ```

  

  

  

  
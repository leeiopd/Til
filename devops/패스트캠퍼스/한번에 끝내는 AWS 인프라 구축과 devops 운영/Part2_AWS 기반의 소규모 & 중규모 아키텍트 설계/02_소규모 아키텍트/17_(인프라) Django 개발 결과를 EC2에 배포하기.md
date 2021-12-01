# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 17_(인프라) Django 개발 결과를 EC2에 배포하기



##### EC2 생성하기

* 인스턴스 시작
  * Amazone Machine Image(AMI) - Ubuntu
  * 기본 설정



##### Ubuntu 환경 설정

* apt-get update

  ```bash
  $ sudo apt-get update
  ```

* build-essentaial 설치

  ```bash
  $ sudo apt-get install build-essential
  ```

* Python / pip 설치

  ```bash
  $ sudo apt-get install python3
  $ sudo apt-get install pip3



##### git repository 설정

* git repository 생성

* ubuntu ssh 키 발급

  * 키 생성

    * ubuntu shell

      ```bash
      $ ssh-keygen -t rsa
      $ cat .ssh/id_rsa.pub
      ssh-rsa ***************
      ```
      
      * 생성된 rsa key 복사

* git Deploy key 설정

  * repository setting
  * Deploy Key 
  * Add deploy key
    * Title - 키 구분 이름
    * Key - 복사한 ssh-rsa 키 입력

  

  

###### git 계정 설정

* ubuntu ssh 키 발급

  * ubuntu shell

    ```bash
    $ ssh-keygen -t rsa -C "git ID"
    ```

    * 생성된 rsa key 복사

* git 계정 ssh 설정
  * user setting
  * SSH and GPG keys
    * New SSH Key
      * Title - 키 구분 이름
      * Key - 복사한 ssh-rsa 키 입력



##### 프로젝트 설정

* 프로젝트 clone

  ```bash
  $ git clone #################
  ```

* python 가상환경 설치

  ```bash
  $ sudo apt-get install virtualenv
  ```

* python 가상환경 설정

  ```bash
  $ virtualenv -p python myenv
  ```

* pip 설치

  ```bash
  $ sudo apt-get install pytyhon3-pip
  $ pip3 install -r requirements.txt
  ```

  * requirements.txt 로 작성된 pip 목록을 이용하여 pip 설치
    * mysqlclient 설치 관련 에러 발생 -> sudo apt-get install libmysqlclient-dev 설치 후 재설치 시도
  
  
  



##### django 서버 실행

* Runserver

  ```bash
  $ python3 manage.py runserver 0.0.0.0:8000
  ```

  * 인스턴스 인바운드 규칙에 8000번 포트가 설정 되어 있어야한다.

* 백그라운드에서 서버 실행 & shell 종료 후에도 무중단설정

  ```bash
  # runserver 중 ctrl+z
  ç^Z
  [1]+  Stopped                 python3 manage.py runserver 0.0.0.0:8000
  
  # 백그라운드에서 서버 실행
  $ bg
  [1]+ python3 manage.py runserver 0.0.0.0:8000 &
  
  #  shell 종료 후에도 무중단설정
  $ disown -h
  ```

  


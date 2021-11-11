# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part1. DevOps 기본 개념 및 강의 준비

### 03. 강의 준비

#### 08_AWS CLI 도구 설치 및 사용 (Ubuntu)



* 요구사항
  
  * AWS CLI v2
  
    * v1 과달리 파이썬 의존성을 가지지 않으며 AWS 측에서 공식 설치 스크립트를 제공
  
    * 파이썬 패키지 매니저인 pip 를 사용하여 설치 불가
  
    * 설치를 위해 unzip / build-essentail / curl 필요
  
      ```bash
      $ sudo apt update
      # 패키지 목록 갱신
      
      $ sudo apt install unzip build-essential curl
      # unzip / build-essentail / curl 설치
      ```
  
      
  
  
  

* 설치

  ```bash
  $ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip awscliv2.zip
  sudo ./aws/install
  ```

* 특정버전 설치 - 2.2.16

  ```bash
  $ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.2.16.zip" -o "awscliv2.zip"
  unzip awscliv2.zip
  sudo ./aws/install
  ```

  
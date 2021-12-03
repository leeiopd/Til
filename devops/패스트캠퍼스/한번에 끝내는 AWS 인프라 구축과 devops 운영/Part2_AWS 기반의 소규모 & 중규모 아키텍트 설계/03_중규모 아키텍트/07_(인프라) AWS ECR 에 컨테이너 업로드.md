# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 07_(인프라) AWS ECR 에 컨테이너 업로드



##### AWS ECR

* AWS ECR : Amazon **Elastic Container Registry**



##### AWS Docker 배포

 * 배포 방식 개요

   * Docker 의 이미지를 특정 저장소에 저장해 두고, 서버를 구성하면 편리함
   * Docker 자체 저장소인 Docker Registry 를 제공하지만, AWS 에서도 ECR 서비스로 같은 기능을 제공

 * 배포 방식 1 - 고전적인 방식

   ![07_01_AWS Docekr 배포 방식 1](./imgs/07_01_AWS Docekr 배포 방식 1.png)

   * 배포 순서
     1. Local 개발
     2. Docker Image Build
     3. Docker Image Registry 등록
        * Docker Registry
        * AWS ECR - 실습에 사용
     4. ECS 서비스를 이용하여 여러 EC2 에 배포
        * ECS: Elastic Container Service
   * 이슈
     * 관리의 문제 발생
       * Dockere Image 관리
       * 생성된 EC2 서버 관리
       * Auto Scaling 시, EC2 Autoscaling 관리

 * 배포방식 2

   ![07_02_AWS Docekr 배포 방식 2](./imgs/07_02_AWS Docekr 배포 방식 2.png)

   * 배포 순서

     1. Local 개발
     2. Docker Image Build
     3. Docker Image Registry 등록
        * Docker Registry
        * AWS ECR - 실습에 사용
     4. AWS Fargate 에 배포

   * AWS Fargate

     *  **기본 인프라를 관리할 필요 없이** 컨테이너를 배포하고 관리할 수 있는 컴퓨팅 엔진

     * EC2 에 직접 배포할 때 발생하는 관리의 문제 해결



##### 실습 설명

* 실습1

  ![07_03_ECR 실습 1](./imgs/07_03_ECR 실습 1.png)

  1. Docker image build
  2. Docker Image ECR Upload
  3. AWS Fargatge 이용 배포
  4. 접속 확인

* 실습2

  ![07_04_ECR 실습 2](./imgs/07_04_ECR 실습 2.png)

  1. Docker image 2개 build
     * Nginx
     * Django
  2. 각각의 Docker Image 를 각각 ECR 에 업로드
  3. Docker Image 관계 설정
     * AWS CLI 를 이용하여 Docker-compose.yml 작성
     * AWS Fargate 가 이용하기 위함
  4. Fargate 이용 두가지 Docker Image 를 배포



##### AWS CLI

* AWS 며령줄 인터페이스 (CLI) 는 AWS 서비스를 관리하는 통합도구
* 도구 하나만 다운로드하여 구성하면 여러 AWS 서비스를 명령중에서 제어하고 스크립트를 통해 자동화 할 수 있음
* AWS CLI 는 Amazon S3 에서 효율적으로 파일을 보내고 받을 수 있는 간단한 새 명령 파일 셋트틀 제공





##### 실습1

* EC2 컨테이너

  * 생성

    * AMI - Ubuntu
    * 컨테이너 유형 - t2.micro
    * 컨테이너 이름 - docker-ECR

  * 설정

    * docker

      * 설치

        ```bash
        $ curl -fsSL https://get.docker.com/ | sudo sh
        ```

      * 권한 설정

        ```bash
        $ sudo usermod -aG docker $USER

* Django

  * Django project Git clone

  * Dockerfile

    * 생성

      ```bash
      $ vi Dockerfile
      # Django project 폴더 안에서 생성
      ```

    * 작성

      ```dockerfile
      #./Django project 폴더/Dockerfile
      
      # FROM - 사용할 Doker의 이미지, Default Python 이미지 버전으로 설정
      FROM python:3.6.15
      
      # ENV - 환경변수 설정
      ENV PYTHONUNBEFFERED 1
      
      # RUN - 컨테이너가 생성되면서 실행되는 명령어
      RUN apt-get -y update
      RUN apt-get -y install vim
      RUN mkdir /srv/docker-django 
      # ADD - 현재 폴더를 /srv/docker-django 로 복제
      ADD . /srv/docker-django
      # WORKDIR - 실행되는 파일 위치 이동
      WORKDIR /srv/docker-django
      
      RUN pip install --upgrade pip
      RUN pip install -r requirements.txt
      
      # EXPOSE - docker 의 컨테이너가 사용할 port 8000 
      EXPOSE 8000
      # CMD - 창에 실행할 명령어
      CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
      ```

  * Django Image Build

    ```bash
    $ docker build -t ecr/django .
    ```

* ECS 생성
  * Elastic Container Service
  * Amazon ECR
  * Repositories
    * 리포지토리 생성
      * 일반 설정
        * 표시 여부 설정 - 프라이빗 (기본)
        * 리포지토리 이름 - fargate_django
      * 그외 - skip 
      * 리포지토리 생성

* AWS CLI 설정

  * AWS CLI 설치

    ```bash
    $ sudo apt install awscli
    ```

  * AWS CLI 사용설정

    * IAM 생성

      * AWS IAM - Identity and Access Management

        * 액세스 관리
        * 사용자
        * 사용자 추가
          * 사용자 세부 정보 설정
            * 사용자 이름 - awscli
            * AWS 엑세스 유형 선택
              * AWS 자격 증명 유형 선택 - 프로그래밍 방식 액세스
          * 권한 설정
            * 기존 정책 직접 연결 - AdministratorAccess
          *  태그 추가(선택사항)
            * 키 / 값 - Name / admin
          * 사용자 만들기

      * AWS CLI configure 설정

        ````bash
        $ aws configure
        ````

        * AWS Access Key ID - 생성한 IAM 의 액세스 키 ID
        * AWS Secret Access Key - 생성한 IAM 의 비밀 액세스 키
        * Default region name - skip
        * Default output format - skip

  * AWS CLI 로그인

    ```bash
    $ aws ecr get-login --no-include-email --region ap-northeast-2
    ```

    * 결과값을 복사하여 터미널에 입력

* Docker Image Upload

  * Tag 추가

    ```bash
    $ docker tag "도커 이미지 ID" "ECR 리포지토리 주소"
    ```

  * Docker Image Upload

    ```bash
    $ docker push "ECR 리포지토리 주소"
    ```

    




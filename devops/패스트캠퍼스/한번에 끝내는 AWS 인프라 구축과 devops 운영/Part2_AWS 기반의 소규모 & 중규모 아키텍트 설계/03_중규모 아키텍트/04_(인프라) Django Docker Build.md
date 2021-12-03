# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 04_(인프라) Django Docker Build



##### 인스턴스 생성

* EC2
* 인스턴스
* 인스턴스 시작
  * AMI 선택 - Ubuntu
  * 인스턴스 유형 선택 - t2.nano
  * 인스턴스 구성 - 기본
  * 스토리지 추가 - 기본
  * 태그 추가
    * 키 / 값 - Name / docker-django
  * 보안 그룹 구성 - 설정
  * 검토
  * 키페어 선택 - 선택
  * 인스턴스 시작



##### 인스턴스 설정

* Django Project Clone

  * requirements.txt 추가

    ```txt
    asgiref==3.4.1
    Django==3.2.9
    djangorestframework==3.12.4
    mysqlclient==2.1.0
    pytz==2021.3
    sqlparse==0.4.2
    typing_extensions==4.0.0
    +
    uwsgi
    ```

    * uwsgi 추가 작성

* Docker

  * Docker 설치

    ```bash
    $ curl -fsSL https://get.docker.com/ | sudo sh
    ```

  * Docker 설정

    * Docker 권한 설정

      ```bash
      $ sudo usermod -a -G docker $USER
      ```

      * Docker 의 접근권한 설정 - 여러 도커들을 함께 사용 할때, 권한 문제를 해결하기 위해 설정

    * Dockerfile 생성

      ```bash
      $ vi Dockerfile
      ```

      ```dockerfile
      FROM python:3.6.15 # FROM - 사용할 Doker의 이미지, Default Python 이미지 버전으로 설정
      
      ENV PYTHONUNBEFFERED 1 # ENV - 환경변수 설정
      
      RUN apt-get -y update # RUN - 컨테이너가 생성되면서 실행되는 명령어
<<<<<<< HEAD
      RUN apt-get -y install vim
=======
      RUN apt-get -y install vim 
>>>>>>> bfa31f3dd08bb70c135cd7ce96919c2fa55db18e
      
      RUN mkdir /srv/docker-django 
      ADD . /srv/docker-django # ADD - 현재 폴더를 /srv/docker-django 로 복제
      
      WORKDIR /srv/docker-django # WORKDIR - 실행되는 파일 위치 이동
      
<<<<<<< HEAD
      RUN pip install --upgrade pip
=======
      RUN pip install --upgrate pip
>>>>>>> bfa31f3dd08bb70c135cd7ce96919c2fa55db18e
      RUN pip install -r requirements.txt
      
      EXPOSE 8000 # EXPOSE - docker 의 컨테이너가 사용할 port 8000 
      CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] # CMD - 창에 실행할 명령어
      ```

      * Dockerfile 작성

    * Docker 이미지 생성 - Docker build

      ```bash
      $ docker build -t docker/django .
      ```

      * 도커 컨테이너의 이미지 생성 명령어
      * '-t'  - tag 옵션
      * 도커 이미지의 이름 - 'docker/django'
      * '.' - Dockerfile 위치
      * docker build -t '태그 이름' 'Dockerfile 위치'

    * 생성된 Docker 이미지 확인

      ```bash
      $ docker image list
      ```

  * Docker 실행

    ```bash
    $ docker run -p 8000:8000 docker/django
    ```

    * docker/django 도커 이미지로 도커 컨테이너 실행
    * -p 8000:8000 - 도커 외부 포트와 내부포트 설정
      * 8000 접근시, 8000으로 연결

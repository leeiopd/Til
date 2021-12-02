# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 26_(인프라) 어플리케이션 구동 (Nginx, Gunicorn, Supervisor)



##### 차세대 Web Sever - Nginx

* 차세대 웹서버
* Apache 의 대항마
* 더 적은 자원으로 더 빠르게



##### EC2 설정

* ubuntu 환경 설정

  ```bash
  $ sudo apt update
  $ sudo apt-get install pytyhon3-pip
  $ sudo pip3 install gunicorn
  $ sudo apt-get install supervisor
  $ sudo apt-get install nginx
  $ sudo pip3 install django
  ```

* Django 설정

  ```python
  # ./django Project Folder/settings.py
  
  ALLOWED_HOSTS = ['*']
  ```

  * 인스턴스가 생성 될 때 마다, HOST 를 추가해면 번거롭기 때문에 Django 에서는 모든 호스트를 허용

* gunicorn 설정

  * conf.d 파일 생성

    ```bash
    $ cd /etc/supervisor/conf.d
    $ sudo touch django.conf
    $ sudo vi django.conf
    ```

  * conf.d 파일 작성

    ```
    [program:gunicorn]
    directory=/home/ubuntu/'django 프로젝트 폴더명' # django 프로젝트 폴더 경로
    command=/usr/local/bin/gunicorn --worker 3 bin unix:/home/ubuntu/django_nginx/app.sock django_nginx.wsgi:application
    autostart=true
    autorestart=true
    stderr_logfile=/logs/gunicorn.err.log
    stdout_logfile=/logs/gunicorn.out.log
    ```

* nginx 설정

  * django.conf 파일 생성

    ``` bash
    $ cd mkidr /logs
    $ sudo supervisorctl reread
    $ sudo supervisorctl update
    $ cd /etc/nginx/
    $ cd sites-avaliable
    $ sudo touch django.conf
    $ sudo vi django.conf
    ```

  * django.conf 파일 설정

    ```
    server{
      listen 80;
      server_name *.compute.amazonaws.com;
      location /{
        include proxy_params;
        proxy_pass http://unix:/home/ubuntu/'django project 폴더 위치'/app.sock
      }
    }
    ```



##### 테스트

* nginx 의 동작을 확인한 인스턴스의 이미지를 이용하여 인스턴스를 생성
  * 생성한 인스턴스의 80port 접속시 nignx 의 동작이 확인이 가능하다.





##### 추가

![26_01_추가](./imgs/26_01_추가.png)

* Gunicorn - WSGI middleware

  ​	![26_02_추가_WSGI](./imgs/26_02_추가_WSGI.png)

  * WSGI는 **CGI(Common Gateway Interface)**의 일종
    * CGI 
      * 여러 언어 사용자들의 다양한 요청을 이해할 수 있도록 이를 공통된 규칙으로 변환하는 관문 역할
      * CGI 기본 동작 과정
        1. input으로 HttpRequest를 받음
        2. 요청에 대한 정보를 환경변수 형식으로 만들어 파이썬 스크립트의 stdin 형식의 input으로 받음
        3. 스크립트가 print와 같은 stdout 형식으로 응답하면 HTTP 형식으로 변환
    * WSGI
      * 파이썬 스크립트가 웹서버와 **효율적으로** 통신하기 위해 만들어진 인터페이스
      * 웹서버에서의 요청을 해석하여 파이썬 어플리케이션으로 넘겨준다.
      * WSGI 동작 과정
        1. 클라이언트 요청
        2. server side에서 middleware component 호출
        3. middleware component가 application side의 application 호출
  * Gunicorn
    * Gunicorn이나 uWSGI 등은 Nginx로 들어오는 HttpRequest를 파이썬이 이해할 수 있게 동시통역



* Supervisor

  * 유닉스 계열의 시스템에서 여러 프로세스를 모니터링하고, 제어하는 프로그램

  * 구성요소

    | 이름               | 설명                                                         |
    | ------------------ | ------------------------------------------------------------ |
    | supervisord        | 서버 데몬                                                    |
    | supervisorctl      | 커맨드라인 클라이언트                                        |
    | 웹서버             | supervisorctl 에 상응하는 기능을 제공하는 웹UI (기본포트:9001) |
    | XML-RPC 인터페이스 | 위의 웹서버에서 제공하는 인터페이스                          |

    

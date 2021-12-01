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

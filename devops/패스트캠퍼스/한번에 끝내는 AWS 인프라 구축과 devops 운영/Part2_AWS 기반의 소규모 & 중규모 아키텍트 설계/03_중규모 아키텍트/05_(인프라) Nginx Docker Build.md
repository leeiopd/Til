# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 05_(인프라) Nginx Docker Build



##### Docker Compose 설치

* Docker Compose 설치

  ```bash
  $ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  ```

* Docker Compose 권한 설정

  ```bash
  $ sudo chmod +x /usr/local/bin/docker-compose
  ```

  





##### Django Docker 설정 변경

* Dockerfile 수정

  ```dockerfile
  FROM python:3.6.15
  
  ENV PYTHONUNBEFFERED 1
  
  RUN apt-get -y update
  RUN apt-get -y install vim
  
  RUN mkdir /srv/docker-django
  ADD . /srv/docker-django
  
  WORKDIR /srv/docker-django
  
  RUN pip install --upgrade pip
  RUN pip install -r requirements.txt
  
  #EXPOSE 8000
  #CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
  ```

* uwsgi.ini 생성

  ```bash
  $ vi uwsgi.ini
  ```

  ```ini
  # django_project_폴더/uwsgi.ini
  
  [uwsgi]
  # 도커 컨테이너에 생성되는 django 프로젝트 폴더 안의 socket 파일 연결
  socket = /srv/docker-django/django.sock
  master = true
  
  processes = 1
  threads = 2
  
  # 도커 컨테이너에 생성되는 django 프로젝트 폴더
  chdir = /srv/docker-django
  # git_repository_name.wsgi
  module = fastcampus_django.wsgi
  
  # log 저장 폴더
  logto = /var/log/uwsgi/uwsgi.log
  log-reopen = true
  
  vaccum = true
  ```



##### Nginx Docker 이미지 생성

* Nginx 설정

  * nginx 폴더 생성

  * nginx.conf 파일 작성

    ```nginx
    # ~/nginx/nginx.conf
    
    user root;
    worker_processes auto;
    pid /run/nginx.pid;
    
    events{
      worker_connections 1024;
    }
    
    http{
      sendfile on;
      tcp_nopush on;
      tcp_nodelay on;
      keepalive_timeout 65;
      types_hash_max_size 2048;
      
      include /etc/nginx/mime.types;
      default_type application/octet-stream;
      
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
      ssl_prefer_server_ciphers on;
      
      access_log /var/log/nginx/access.log;
      error_log /var/log/nginx/error.log;
      
      gzip on;
      gzip_disable "msie6";
      
      include /etc/nginx/sites-enabled/*;
    }
    ```

  * nginx-app.conf 파일 작성

    ```nginx
    # ~/nginx/nginx-app.conf
    
    upstream uwsgi {
      server unix:/srv/docker-django/apps.sock;
    }
    
    server {
      listen 80;
      server_name localhost;
      charset utf-8;
      client_max_body_size 128M;
      
      location / {
        uwsgi_pass uwsgi;
        include uwsgi_params;
      }
      
      location /media/ {
        alias /srv/docker-django/.media/;
      }
      
      location /static/ {
        alias /srv/docker-django/.static/;
      }
    }
    ```

  * Dockerfile 작성

    ```dockerfile
    FROM nginx:latest
    
    COPY nginx.conf /etc/nginx/nginx.conf
    COPY nginx-app.conf /etc/nginx/sites-available/
    
    RUN mkdir -p /etc/nginx/sites-enabled/ && ln -s /etc/nginx/sites-available/nginx-app.conf /etc/nginx/sites-enabled/
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]

* Nginx Docker 이미지 생성

  ```bash
  $ docker build -t server_dev/nginx .
  ```

* Nginx Docker 컨테이너 실행

  ```bash
  $ docker run -p 80:80 server_dev/nginx
  ```

* 컨테이너 실행 결과는 80번 port 로 접속 시, nginx bad gate 로 가능




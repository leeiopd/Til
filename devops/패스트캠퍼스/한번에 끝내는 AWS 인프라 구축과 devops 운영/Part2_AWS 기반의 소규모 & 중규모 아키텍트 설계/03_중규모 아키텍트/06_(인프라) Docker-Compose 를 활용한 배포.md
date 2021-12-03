# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 06_(인프라) Docker-Compose 를 활용한 배포



##### Docker-Compose 파일 작성

````yaml
# docker compose version '3' 사용
version: '3'
services:
				# nginx 컨테이너 설정
        nginx:
                container_name: nginx
                build: ./nginx
                image: docker/nginx
                restart: always
                ports:
                        - "80:80"
                volumes:
                        - ./fastcampus_django:/srv/docker-django
                        - ./log:/bar/log/nginx
                # django 컨테이너의 실행 뒤, nginx 컨테이너가 실행
                depends_on:
                        - django
                        
				# django 컨테이너 설정
        django:
                container_name: django
                build: ./fastcampus_django
                image: docker/django
                restart: always
                command: uwsgi --ini uwsgi.ini
                volumes:
                        - ./fastcampus_django:/srv/docker-django
                        - ./log:/var/log/uwsgi
````



##### Docker-compose Build

* 이전에 빌드 했던 모든 도커 image 를 삭제 후 진행

* Docker-compose Build

  ```bash
  $ docker-compose up -d --build
  ```

  * -d : 백그라운드 실행 옵션

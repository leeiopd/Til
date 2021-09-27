# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 09. Docker

##### 03_Docker Compose

* Docker Compose
  * 여러 컨테이너를 제어하는 명령어를 하나의 파일로 관리 가능
    * 붙여넣을 파일이 많을 시
    * 커터에너간의 연결 관계 설정시
  * python 기반 yml 확장자 사용





* Docker Compose 설치

  * https://docs.docker.com/compose/install/

  * Docker 와 마찬가지로 Docker Compose 도 root 권한을 주는게 편리함

    * ```bash
      $ sudo chmod +x /usr/local/bin/docker-compose
      ```



* 실습 컨테이너 구성도
  * Node / 3000 port
  * Mysql / 3306 port
    * 실제 서비스에서는, 도커가 아닌 RDS 를 권장





```dockerfile
# node dockerfile

# node 컨테이너
FROM node


# 작업디렉토리를 생성하고 
WORKDIR /src
# 현재위치 소스파일 전체 복사
ADD . /src

# src 폴더로 이동한 다음에 패키지를 install 한다
RUN cd /src && npm install

# Expose port
EXPOSE  3000

CMD ["node", "/src/app.js"]
```



```dockerfile
# mysql dockerfile

# mysql 컨테이너
FROM mysql

# 환경변수
# mysql 이미지의 예약어로 설정됨
ENV MYSQL_ROOT_PASSWORD example
ENV MYSQL_DATABASE company

# 파일 복사
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

# Run app
CMD ["--default-authentication-plugin=mysql_native_password"]
```





```yaml
# docker-composer.yml

# Use root/example as user/password credentials
version: '3.1'

services:

  db:
    build: ./mysql
    restart: always

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080

	# node 이미지를 지정
  node:
  	build: ./node
    restart: always
    links:
    	- db:db_url
    ports:
    	- 3000:3000
```





* Docker-composer 이용 Docker build

```bash
$ docker-compose build
```





* Docker-composer build 이미지 실행

```bash
$ docker-compose up
```

* Docker-composer 를 이용한 이미지 실행은 실행순서의 보장이 되지 않는다.
  * node 의 정상동작을 위해서는 mysql 이 먼저 실행 되어야함

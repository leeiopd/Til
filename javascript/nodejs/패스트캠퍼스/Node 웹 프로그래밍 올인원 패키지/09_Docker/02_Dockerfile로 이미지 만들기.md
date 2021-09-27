# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 09. Docker

##### 02_Dockerfile로 이미지 만들기

* 순서
  1. Dockerfile 을 만든다
  2. 이미지를 생성한다
  3. 이미지로 컨테이너를 실행



* 폴더구조
  * /
    * Dockerfile
    * index.html

```html
<!-- ./index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br><br><br><br><br>
    <div>
        안녕하세요
    </div>
    <div>
        도커연습
    </div>
</body>
</html>
```

```dockerfile
# Dockerfile

# centOS 이미지를 기반으로 작성
FROM centos:latest

# 아파치를 설치
RUN yum install -y httpd

# 현재 폴더의 index.html 파일을 아파치 첫호면으로 복사
COPY index.html /var/www/html/

# 아파치 실행
# Docker 이미지를 띄웠을때, 처음 실행되는 명령어
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
```



* 도커 이미지  생성

```bash
$ docker build -t test .
```

* -t : 버전명 test 설정
* . : 현재위치 dockerfile 로 생성



* 도커 이미지 생성 완료

```bash
$ docker images

REPOSITORY   TAG       IMAGE ID       CREATED              SIZE
test         latest    95f64a7b9bb9   About a minute ago   286MB
```





* 도커 이미지 실행

```bash
$ docker run -d -p 80:80 test
```

* 80번 port 연결시, 도커 test 이미지의 80번 port 연결
* aws 주소 접속시, 복사된 index.html page 로 연결됨





* 도커 Bash 접속

```bash
$ docker exec -it 994dabc6dcd3 /bin/bash
```

* -it + 도커ID


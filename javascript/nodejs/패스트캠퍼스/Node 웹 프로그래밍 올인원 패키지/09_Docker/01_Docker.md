# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 09. Docker

##### 01_Docker

* 준비사항

  * AWS 접속
  * 포트 설정
    * 80, 3000 번 port open 설정
  * 서비스 삭제
    * nginx 정지
      * sudo service nginx stop
    * pm2 정지
      * pm2 stop 0

  

  

* Docker 설치

  * curl -s https://get.docker.com/ | sudo sh
    * curl -s : https 의 데이터를 가져오기
    * 데이터 가져온 후 sudo 명령 실행



* Docker sudo 없이 사용 설정
  * Docker 는 기본적으로 root 권한 필요
  * sudo usermod -aG docker $USER
    * 현재 접속 사용제에게 권한 부여
    * == sudo usermod -aG docker ubuntu
      * AWS ubuntu 기본 유저



* Docker 란?
  * 전세계적으로 사용되고 있는 컨테이너 가상화 플랫폼
  * VM웨어 -> 호스트 OS 위에 가상 OS 를 올린다.
  * Docker -> 호스트 OS 와 시스템 자원을 공유
    * 호스트 OS 위에 가상 OS X : 호스트 OS 의 자원을 더 효울적으로 사용 가능
    * VM 웨어 보다 빠름



* 용어
  * 도커 이미지 : ubuntu + nodejs + express 등 실행할 서비스들ㄹ을 패키지화 해 놓은것
    * 내가 이미지를 만ㄷ르고 dockerhub 를 통해 github 처럼 pull/push 가능
  * 컨테이너 : 이미지를 토대로 서비스 환경을 구축, 어러개의 컨테이너가 작가능



* 이미지 검색방법
  * dockerhub site : https://hub.docker.com/
  * docker search 명령





* 이미지 다운로드 (ubuntu)
  * docker pull ubuntu



* 다운로드 이미지 확인
  * docker images
    * 도커 이미지 목록



* 이미지 삭제(ubuntu)
  * docker rmi ubuntu





* cent OS 다운로드 후 cent OS 터미널 접속
  * docker run -it centos /bin/bash





* Nginx 다운로드 후 웹서버 실행
  * docker run -d -p 3000:80 --name webserver nginx
    * -d : 백그라운드 실행 옵션
    * -p : 포트 옵션 / 3000 번포트





* 컨테이너 중지
  * docker stop 컨테이너ID

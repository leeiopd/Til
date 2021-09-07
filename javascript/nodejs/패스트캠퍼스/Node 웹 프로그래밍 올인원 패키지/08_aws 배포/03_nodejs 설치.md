# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 08.AWS 배포

##### 03_nodejs 설치



```bash
$curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

* curl 로 node 12 ver 다운로드
  * 설치된 운영체제인 ubuntu 16 ver 에 맞게 다운로드 됨



```bash
$sudo apt-get install -y nodejs
```

* ubuntu 운영체제에 nodejs 를 설치하는 명령



```bash
$node -v
v12.22.6
$npm -v
v6.14.15
```

* 설치 확인



* ./opt 에 myproject 폴더 생성 후 진행
  * /opt : 리눅스에서 크롬브라우저, 안드로이드 스튜디오등과 같은 써드파티 어플리케이션에 대한 설치 디렉토리로 사용됨

```bash
$sudo chown ubuntu:ubuntu myproejct/
```

* myproejct 폴더의 권한을 root 에서 ubuntu로 이전



```bash
$sudo npm install -g nodemon express exprss-generator
```

* myproject 폴더에 node 환경 설치
  * 권한 무제로 sudo 로 명령
* express-generator
  * express proejct 의 기본 구조 생성
    * ./public/
    * ./routes/
    * ./views/
    * ./bin/
    * ./app.js
  * 명령어: express





* 인바운드 규칙 : 외부에서 서버로 들어오는 연결에 대한 규칙
  * express 에 설정된 3000번 port 를 인바운드 규칙에 추가해야 외부에서 express 로 접속이 가능





* nodemon
  * node 에 대한 모니터링
  * source 를 update 하면, node 의 재실행



* pm2
  * 서버에 오류를 모니터링
  * 서버의 오류 발생시 또는 서버 종료시 자동으로, 서버의 재실행
  * 서버의 실행을 유지



```bash
$sudo npm install -g pm2 - 설치

$pm2 start bin/www - pm2 실행

$pm2 list - 실행중인 서버 목록 조회

$pm2 stop 0 - index number 로 서버 종료
```




# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 02_nodemon

* 동작
  * 실행중인 서버 코드가 저장 될 때마다, 자동으로 재배포 동작을 수행
    * 자동으로 코드의 변경을 반영

* 설치
  * npm install -g nodemon
    * 설치 시, -g 옵션을 추가하여, nodemon 명령어 추가

* 실행
  * nodemon 실행파일







```javascript
// package.json
{
  "name": "02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start":"npx nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

* Scripts 명령어에 npx 작성해 두면, script 명령어가 실행 될때, module 이 설치가 되어 있지 않더라도 설치해서 실행
  * nodemon 의 경우 global module 로 주로 설치하기 때문에, 프로젝트 폴더에서는 설치를 진행하지 않은 경우를 방지
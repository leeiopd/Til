# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 02. nodeJS 기초

##### 05_npm

* npm : Nodejs Package Manager
  * https://www.npmjs.com/



```bash
# npm 설치 후
npm init
npm install express
npm install uuid4
```



```javascript
// index.js
const uuid4 = require("uuid4");

var id = uuid4();
console.log(id);
```

* 설치된 uuid4 모듈의 사용





```json
// package.json
{
  "name": "exex1",
  "version": "1.0.0",
  "description": "study",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "migrationArc",
  "license": "ISC",
  "keywords": [],
  "dependencies": {
    "express": "^4.17.1",
    "uuid4": "^2.0.2"
  }
}
```

* dependencies
  * npm 으로 설치된 모듈이 dependencies 에 명시되어 있음
  * package.json 로 개발 환경을 유지 할 수 있음
* scripts
  * custom 명령어를 작성
  * 작성한 명령어는 "npm run + 명령어" 로 실행





* package-rock.json
  * 각 라이브러리의 모듈들이 참조하는 모듈들의 버전에 대해 명시되어 있음
  * 모듈 충돌 err 방지
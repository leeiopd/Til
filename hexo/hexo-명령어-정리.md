# hexo 기본 명령어 정리


### 1. 포스팅 작성

```bash
$ hexo new [layout] "title" 
```

* layout
  * 기본 레이아웃은 3가지 종류, 각각 다른 경로로 저장
    * post - source/_posts
    * page - source
    * draft - source/_drafts
  * layout을 생략할 경우 post로 생성됨
  * title : 저장 될 파일 명

* Post

  * 홈페이지에 게시되는 기본적인 글
  * 레이아웃 종류를 입력하지 않아도 포스트로 자동 인식 - 기본 레이아웃
  * 기본 레이아웃은 `_config.yml`의 `default_layout` 에서 변경 가능

* Page

  * 해당 경로로 접근해야 볼 수 있는 페이지를 작성 할 때 사용

* Draft - 초안

  * 바로 게시하지 않고 작성할 수 있는 초안

  * 포스트를 작성 할 때 초안을 먼저 작성 하고 `publish` 명령어로 배포하는 방법으로 게시 가능

  * 로컬 서버에서는 `--draft` 명령어를 추가하여 확인 가능

    ```bash
    $ hexo server --draft
    ```

* Title - 파일 명

  * `_config.yml` 에서 `placeholder` 설정 가능
  
    ```
    _config.yml
    
    # Writing
    new_post_name: :year:month:day-:title.md
    ```
  
    
  
    | Placeholder | 용도                                                |
    | ----------- | --------------------------------------------------- |
    | :title      | 포스트 제목 (소문자만 가능, 공백은 하이픈으로 변경) |
    | :year       | 생선 연도                                           |
    | :month      | 생성 월 ( 0 포함)                                   |
    | :i_month    | 생성 월 (0 제외)                                    |
    | :day        | 생성 날짜 (0 포함)                                  |
    | :i_day      | 생성 날짜 (0 제외)                                  |
  
* Front-matter

  * 포스트 최 상단의 블락으로 해당 파일의 정보를 입력하는 공간

  * `---` 로 구분

    ```
    ---
    title: title
    data: 2019/6/19 18:55:30
    ---
    ```

  * 설정

    | 설정       | 용도                            | 기본 값            |
    | ---------- | ------------------------------- | ------------------ |
    | layout     | 레이아웃                        |                    |
    | title      | 제목                            |                    |
    | data       | 배포한 날짜                     | 파일 생성 날짜     |
    | updated    | 수정된 날짜                     | 파일 생성 날짜     |
    | comments   | 코멘트 기능 여부                | true               |
    | tags       | 태그 (Page에서는 사용 불가)     |                    |
    | categories | 카테고리 (Page에서는 사용 불가) |                    |
    | permalink  | 포스트 url 수동 설정            |                    |
    | thumbnail  | 썸네일 지정                     | 본문 첫번째 이미지 |

* categories/tags

  * Post와 Draft에서만 사용 가능.
  * 카테고리를 지정 시, 메인 화면의 메뉴에 자동 추가 됨.
  * 카테고리를 여러개 지정 시, 아래의 카테고리가 서브 카테고리가 됨.
  * 테크는 여러개 설정 가능



### 2. 로컬 서버

* 로컬 서버 설치
	```bash
	$ hexo install hexo-server --save
	```

* 로컬서버 실행

  ```bash
  $ hexo sever
  INFO  Start processing
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
  ```
  
* <http://localhost:4000/> 로 접속 가능

* 명령어

  | 옵션         | 용도                                      |
  | ------------ | ----------------------------------------- |
  | -i, --ip     | 서버 ip 지정                              |
  | -p, --port   | 포트번호 설정                             |
  | -s, --static | 정적 파일만 게시                          |
  | -l, --log    | 서버로그를 표시                           |
  | -o, --open   | 서버 기동가ㅗ 동시에 부러우저 창으로 접속 |
  | -draft       | 초안 게시                                 |

  

### 3. 정적파일 게시

* 서버에 배포하기 전, 정적 파일을 최신버전으로 생성해야 함.

  ```bash
  $ hexo generate
  ```

* `--watch` 옵션을 사용하여 실시간으로 파일을 생성 가능, 파일 변화가 있으면 즉시 생성

  ```bash
  $ hexo generate --watch
  ```

* 정적파일 생성 + 배포

  ```bash
  $ hexo generate --deploy
  ```

  ```bash
  $ hexo deploy --generate
  ```



### 4. 배포

* 로컬에서 작성한 내용을 원격 서버에 반영하기 위한 작업

  ```bash
  $ hexo deploy
  ```

* Git 서버에 배포하기 위해서는 Git 서버 배포 플러그인을 서치 해야 함

  ```
  $ npm install hexo-deployer-git --save
  ```

  
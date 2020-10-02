# ElasticBeanstalk

## 0. 준비

- 반드시 오류가 없이 돌아가는 코드 준비!
- aws 가입



## 1. 프로젝트 설정

- `.gitignore`
  - gitignore.io 통해서 생성
- `pip` 설정
  - `pip freeze > requirements.txt`
- 루트페이지 설정
  - `path('', __your_view__.__your_list__),` 경로 잡아주기



## 2. AWS IAM 설정

- 권한추가
  - `AWSElasticBeanstalkFullAccess`
- key 저장
  - **분실 주의!!!!!!!!!! 유출 주의!!!!!!!!**



## 3. AWS 계정 설정

- `awscli` 설치

  - `pip install awscli`
- 설치 확인

  - `aws --version`

- 계정 설정

  - `aws configure`

  ```bash
  AWS Access Key ID: 본인 KEY ID 입력
  AWS Secret Access Key: 본인 Secret Access 입력
  Default region name: ap-northeast-2 # 한국
  Default output format: json
  ```

- 확인
  - `vi ~/.aws/config`
  - `vi ~/.aws/credentials`



## 4. EB

- `eb cli` 설치

  - `pip install awsebcli`
- 프로젝트 폴더로 이동
- 설정

  - `eb init`
- 추가 입력해야 하는 명령어는 강사님과 함께 진행
- 완료 확인
  - 프로젝트 폴더 아래 `.elasticbeanstalk/` 폴더 생성되어 있음!
  - 배포 관련된 정보가 담겨 있는 곳!



## 5. Django 설정

- admin을 위한 계정 생성
  - `python manage.py createsuperuser`
- 유저 정보 담긴 json 생성
  - `python manage.py dumpdata accounts.User --indent 4 > users.json`
  - 만들어진 파일은 accounts/fixtures 폴더로 이동



- staticfile 설정
  - settings.py 수정

```python
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

# 얘는 프로젝트마다 선택사항 (없는 경로를 쓰면 deploy 시 에러)
STATICFILES_DIRS = [
    STATIC_DIR = os.path.join(BASE_DIR, 'static'),
]
```



- 프로젝트 루트에 폴더 생성
  - `mkdir .ebextensions` : 배포와 관련된 추가 설정 및 동작하는 명령어를 작성하는 곳
- `.ebextensions/default.config` 파일 생성후 작성

```bash
# default.config
option_settings:
    aws:elasticbeanstalk:application:environment:
        DJANGO_SETTINGS_MODULR: movie_project.settings
    aws:elasticbeanstalk:container:python:
        WSGIPath: movie_project/wsgi.py
    aws:elasticbeanstalk:container:python:staticfiles:
        /static/: staticfiles/
```

- 배포 후 실행할 명령어  `ebextensions/migrate.config` 파일 생성후 작성

```1bash
# .ebextensions/db-migrate.config
container_commands:
    01_migrate:
        command: "python manage.py migrate"
        leader_only: true
    02_chown_sqlitedb:
        command: "sudo chown wsgi db.sqlite3"
        leader_only: true
    03_createsuperuser:
        command: "python manage.py loaddata users.json"
        leader_only: true
    04_collectstatic:
        command: "python manage.py collectstatic"
    05_casts:
    	command: "python manage.py loaddata casts8.json"
        leader_only: true
    05_genres:
    	command: "python manage.py loaddata genre.json"
        leader_only: true
    05_directors:
    	command: "python manage.py loaddata directors8.json"
        leader_only: true
    05_moives:
    	command: "python manage.py loaddata movies8.json"
        leader_only: true
```

* 추가 내용 직접 작성!

## 6. EB create

- 생성
  - `eb create`



## 7. 환경변수 설정

- 사용한 환경변수 적용, aws 사이트에서도 가능
  - `eb setenv SECRET_KEY='your_key' AWS_ACCESS_KEY_ID='your_id'`



## 8. ALLOWED_HOST 설정

- CNAME 확인
  - `eb status`

- settings.py 에 ALLOWED_HOST 추가



## 9. Deploy!

- 커밋남기기
  - `git add .`
  - `git commit -m "deploy"`
- 배포하기
  - `eb deploy`
- 기도하기
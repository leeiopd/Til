# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 02. 소규모 아키텍트

#### 16_(인프라) 데이터베이스 구축 (AWS RDS)



##### RDS 생성

* 데이터 베이스 생성
  * 데이터베이스 생성 방식 선택
    * 표준생성
  * 엔진옵션
    * 엔진 유형 - MySQL
    * 에디션 - MySQL Community
    * 버전 - MySQL 8.0.20
  * 템플릿
    * 프리티어
  * 설정
    * DB 인스턴스 식별자 - fastcampusdb-1
    * 자격증명설정
      * 마스터 사용자 이름 - admin
      * 마스터 암호 -  (개인설정)
  * DB 인스턴스 클래스- 기본값
    * 버스터블 클래스(t 클래스 포함) - db.t2.micro
  * 스토리지 - 기본값
    * 스토리지 유형 - 범용
    * 할당된 스토리지 - 20
    * 스토리지 자동 조정 - 스토리지 자동 조정 활성화
    * 최대 스토리지 임계값 - 1000
* 연결
  * Virtual Private Cloud(VPC) - Default VPC
  * 서브넷 그룹 - defult-pvc
  * 퍼블릭 액세스 - 예
  * vpc 보안 그룹 - 기존 항목 선택
  * 기존 VPC 보안 그룹 - default
  * 가용 영역 - 기본 설정 없음
  * 추가 구성
    * 데이터베이스 포트 - 3306
* 데이터베이스 인증
  * 데이터베이스 인증 옵션 - 암호인증
* 추가 구성
  * 데이터베이스 옵션
    * 초기 데이터베이스 이름 - proejct1
    * DB 파라미터 그룹 - default.mysql8.0
    * 옵션 그룹 - default:mysql-8-0
  * 백업 - 기본값





##### Django 설정

````python
./project_folder/settings.py


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'project1',
        'USER': 'amdin',
        'PASSWORD': '*******',
        'HOST': '생성된 AWS RDS 엔드포인트 주소',
        'PORT': '3306',
        'OPTIONS': {
            'init_commnad': "SET sql_mode='STRICT_TRANS_TABLES"
        }
    }
}

# rds 생성시 설정한 정보
# db 이름 : proejct1
# 비밀번호: ******
````

* migration 실행

  ```bash
  $ python manage.py migrate
  ```

  * local 과는 다른 db 를 사용하기 때문에 필수

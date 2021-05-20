# 생활코딩 php 강좌

### 14. PHP와 데이터베이스

##### 14.1 데이터베이스란

* 데이터베이스 시스템
  * 데이터를 저장하는데 최적화 되어 있는 소프트웨어
  * 데이터 베이스 시스템은 자체적으로 인증 기능을 가지고 있어 보안 및 기밀성을 유지하는데 유리
  * 데이터 규모를 관리하는 여러 기능을 지원
  * 정보 처리 기술을 간단한 조작 방법으로 사용 가능
  * php 는 정보를 저장하는 기능이 없기 때문에 데이터베이스 시스템을 사용
* SQL
  * Structured : 구조화
    * 구조화된 정보를 통해 정보를 쉽게 파악 할 수 있음
  * Query
  * Language
  * 표준화가 되어 있는 관계형 데이터베이스
    * MySQL
    * ORACLE
    * MariaDB
      * MySQL 과 거의 호환됨
    * MSSQL





##### 14.2 데이터베이스 접속 방법

* SQL Code 를 통해 Database 를 제어 할 수 있음



* MySQL 데이터베이스 시스템 동작
  1. Client 의 MySQL Client 에서 SQL 문을 작성
  2. Server에 요청
  3. Server 의 MySQL Server 에서 요청들을 처리
  4. 처리 결과를 MySQL Client 로 전송
  5. Client 를 통해서 결과를 확인





##### 14.3 Windows 에서 DB(mysql) 접속 방법



##### 14.4 Mac 에서 DB(mysql) 접속 방법

* MySQL 설치후 terminal 에서
  * mysql -uroot -p -hlocalhost
  * -u : user
    * -uroot : root user
  * -p :password
  * -h : host
    * -hlocalhost : MySQL Client 와 같은 컴퓨터의 주소



##### 14.5 리눅스에서 DB(mysql) 접속 방법





##### 14.6 Database, Table

* Databse
  * Table 을 Grouping 하여 관리하는 단위

* Table (표)
  * Data 가 저장되는 단위
* Table 의 row (행)
  * Data 의 Set
  * 행을 추가한다 -> Data 를 추가한다
* Table 의 Column (열)
  * Data 의 형식
  * 열을 추가한다 -> Data 의 형식을 추가한다







```mysql
CREATE DATABASE opentutorials CHARACTER SET utf8 COLLATE utf8_general_ci;
# Query OK, 1 row affected, 2 warnings (0.00 sec)
```

* CREATE DATABASE opentutorials 
  * "opentutorials" Database 생성
* CHARACTER SET utf8 COLLATE utf8_general_ci;
  * 문자코드 사용 설정



```mysql
use opentutorials;
# Databse changed
```

* use opentutorials
  * opentutorials Database 사용 명령어



```mysql
CREATE TABLE topic (
 id int(11) NOT NULL AUTO_INCREMENT,
 title varchar(255) NOT NULL ,
 description text NULL ,
 created datetime NOT NULL ,
 PRIMARY KEY (id)
);
# Query OK, 0 rows affected, 1 warning (0.01 sec)
```

* CREATE TABLE topic
  * 데이터베이스 opentutorials 내에 테이블 topic을 생성
* topic Table 의 요소
  * id 
    * int(11) : integer 정수, 출력 될 때 11자리 까지 출력
    * NOT NULL : NULL(값이 없음) 이면 안됨
    * AUTO_INCREMENT: 행이 추가 될 때 마다 자동으로 값이 증가
  * title
    * varchar(255) : variable character 변할 수 있는 문자 / 최대 225 자
    * NOT NULL: NULL(값이 없음) 이면 안됨
  * description
    * text : 길이 제한이 없음
    * NULL : 내용이 없어도 됨
  * created
    * datetime : 시간 값의 형식을 가짐
    * NOT NULL : NULL(값이 없음) 이면 안됨
  * PRIMARY KEY (id)
    * 식별자로 id 값을 사용할 것이기 때문에, id를 고유값으로 설정



```mysql
show tables;
# +-------------------------+
# | Tables_in_opentutorials |
# +-------------------------+
# | topic                   |
# +-------------------------+
```

* show tables
  * Table 목록 출력



```mysql
desc topic;
# +-------------+--------------+------+-----+---------+----------------+
# | Field       | Type         | Null | Key | Default | Extra          |
# +-------------+--------------+------+-----+---------+----------------+
# | id          | int          | NO   | PRI | NULL    | auto_increment |
# | title       | varchar(255) | NO   |     | NULL    |                |
# | description | text         | YES  |     | NULL    |                |
# | created     | datetime     | NO   |     | NULL    |                |
# +-------------+--------------+------+-----+---------+----------------+
```

* desc topic
  * topic Table 의 구조 출력





##### 14.7 SQL 문을 이용한 테이블 제어 방법 (추가, 변경, 조회, 수정)

* 기본 제어 명령어
  * insert: 추가
  * update: 수정
  * delete: 삭제
  * select: 조회



```mysql
INSERT INTO topic (title, description, created) VALUES('html', 'html 이란 무엇인가?', now());
```

* topic Table 에 Data 입력
  * topic() 에 요소를 작성
  * VALUS() 에 입력할 값을 작성



```mysql
select * from topic;
# +----+-------+---------------------------+---------------------+
# | id | title | description               | created             |
# +----+-------+---------------------------+---------------------+
# |  1 | html  | html 이란 무엇인가?          | 2021-05-20 14:39:02 |
# +----+-------+---------------------------+---------------------+
```

* select * from topic;
  * topic Table 의 모든 Data 조회





```mysql
# +----+-------+------------------------------+---------------------+
# | id | title | description                  | created             |
# +----+-------+------------------------------+---------------------+
# |  1 | html  | html 이란 무엇인가?             | 2021-05-20 14:39:02 |
# |  2 | css   | html 을 꾸며주는 언어            | 2021-05-20 14:43:06 |
# +----+-------+------------------------------+---------------------+

select * from topic where id=2;
# +----+-------+------------------------------+---------------------+
# | id | title | description                  | created             |
# +----+-------+------------------------------+---------------------+
# |  2 | css   | html 을 꾸며주는 언어            | 2021-05-20 14:43:06 |
# +----+-------+------------------------------+---------------------+


select * from topic where id=2 and id=1;
# Empty set (0.00 sec)

select * from topic where id=2 or id=1;
# +----+-------+------------------------------+---------------------+
# | id | title | description                  | created             |
# +----+-------+------------------------------+---------------------+
# |  1 | html  | html 이란 무엇인가?             | 2021-05-20 14:39:02 |
# |  2 | css   | html 을 꾸며주는 언어           | 2021-05-20 14:43:06 |
# +----+-------+------------------------------+---------------------+
```

* select * from topic where id=2;
  * topic table 에서 id 가 2인 Data 조회
* select * from topic where id=2 and id=1;
  * topic table 에서 id 조건이 ( 1 and 2 ) 인 Data 조회
  * id 값이 1이면서 2인 Data 는 존재하지 않음 -> Empty set
* select * from topic where id=2 or id=1;
  * topic table 에서 id 조건이 ( 1 or 2 ) 인 Data 조회





```mysql
select * from topic order by id desc;
# +----+-------+------------------------------+---------------------+
# | id | title | description                  | created             |
# +----+-------+------------------------------+---------------------+
# |  2 | css   | html 을 꾸며주는 언어            | 2021-05-20 14:43:06 |
# |  1 | html  | html 이란 무엇인가?             | 2021-05-20 14:39:02 |
# +----+-------+------------------------------+---------------------+
```

* select * from topic order by id desc;
  * topic table 의 모든 데이터를 id 를 기준으로 내림차순으로 정렬
    * desc : 내림차순
    * asc : 오름차순





```mysql
update topic set title='cascading style sheet', description='아름다운 언어' where id=2;
# Query OK, 1 row affected (0.01 sec)
# Rows matched: 1  Changed: 1  Warnings: 0

select * from topic where id=2;
#+----+-----------------------+---------------------+---------------------+
#| id | title                 | description         | created             |
#+----+-----------------------+---------------------+---------------------+
#|  2 | cascading style sheet | 아름다운 언어          | 2021-05-20 14:43:06 |
#+----+-----------------------+---------------------+---------------------+
```

* update topic set title='cascading style sheet', description='아름다운 언 어' where id=2;
  * topic Table 의 id 가 2인 Data 의 내용을 변경
    *  title='cascading style sheet'
    * description='아름다운 언어'





```mysql
delete from topic where id = 2;
# Query OK, 1 row affected (0.00 sec)

select * from topic;
# +----+-------+---------------------------+---------------------+
# | id | title | description               | created             |
# +----+-------+---------------------------+---------------------+
# |  1 | html  | html 이란 무엇인가?          | 2021-05-20 14:39:02 |
# +----+-------+---------------------------+---------------------+
```

* delete from topic where id = 2;
  * topic Table 의 id 가 2인 Data 삭제
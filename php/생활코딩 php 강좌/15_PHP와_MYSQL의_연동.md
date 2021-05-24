# 생활코딩 php 강좌

### 15. PHP와 MYSQL의 연동

##### 15.0 강의 미리보기

* PHP 를 통해 Database 에 접속하는 방법
  * Web 브라우저를 통해 사용자가 Web Server 인 Apach 에게 요청
  * Apache 는 php 문서를 php Engine 에게 위임
  * php Engine 이 php 문서를 읽는 도중, mysql_connet() 함수를 만나면 Database server 에 접속
  * php Engine 은 php 문서상의 Database 관련 코드를 통해, Database Server 에 Data 를 요청하여 html 문서를 구성
  * 구성된 html 문서를 Apache 를 통해 Web Browser 에게 전달
* php 가 Database system 에 접속이나 Query 를 보내는 명령 방법
  * MySQL 확장
    * 최신버전 PHP 지원 중단
    * 하지만, 기존의 레거시 php application 을 이해하기 위하여 필요
  * PDO
  * MySQLi





##### 15.1 사용자의 정보 서버로 전송하기

* 웹을 통하여 Data 의 추가
  * form 에 입력한 정보를 Database 에 추가



```php+HTML
// input.php
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <form action="./insert.php" method="POST">
            <p>제목 :<input type="text" name="title"></p>
            <p>본문 :<textarea name="description" id="" cols="30" rows="10"></textarea></p>
            <p>제목 :<input type="submit"></p>
        </form>
    </body>
</html>
```

* 정보를 전송하기 위한 html 입력 form





##### 15.2 데이터 추가하기

* MySQL Client 의 DB 제어
  1. 접속
     * mysql -uroot -p -h
  2. DB 선택
     * select * from table명
  3. SQL 테이블 제어
     * insert query
     * update query
     * delete query
     * select query
* php 의 DB 제어
  1. 접속
     * mysql_connect()
  2. DB 선택
     * mysql_select_db( Table )
  3. SQL 테이블 제어
     * mysql_query( query 명령 )





```php
// insert.php
<?php
$mysql = mysqli_connect(hostname, username, password);

mysqli_select_db( $mysql, 'opentutorials');

$query = "INSERT INTO topic(title, description, created) VALUES ('".mysqli_real_escape_string($mysql, $_POST['title'])."', '".mysqli_real_escape_string($mysql, $_POST['description'])."', now())"

mysqli_query($mysql, $query);

header("Location: list.php");
?>
```

* $mysql = mysqli_connect(hostname, username, password);
  * mysqli_connect(hostname, username, password)
    * MySQL 에 접속, 접속 한 정보를 return
  * 접속한 결과를 $mysql 에 저장
* $query 에 sql 명령어를 작성
  * .mysqli_real_escape_string().
    * query 전달의 보안을 위한 함수
    * query 에 함수의 return 값을 사용하는 것으로 sql 삽입 공격을 방지
    * 자세한 내용은 다른 강의 참조
  * $_POST() 로 form 을 통해 전달 받은 사용자 입력 값을 처리
* mysqli_query() 함수를 통해 MySQL 명령어 쿼리를를 전송
  * 연결된 MySQL Database 에 query 자 전달되고, 수행됨
  * INSERT 명령 수행

* header("Location: list.php")
  * web browser 가 응답 받은 뒤, header 설정한 location Page 로 이동
  * "list.php" Page 로 자동으로 이동됨
    * Redirection





##### 15.3 데이터를 HTML에 표현하기 -1

* Database 에 저장되어 있는 정보는 Array 에 담겨서 제공 됨



```php+HTML
<?php
$mysql = mysqli_connect(hostname, username, password);
mysqli_select_db($mysql, 'opentutorials');
$list_result = mysqli_query($mysql, 'SELECT * FROM topic');

if(!empty($_GET['id'])) {
    $topic_result = mysqli_query($mysql, 'SELECT * FROM topic WHERE id = '.mysqli_real_escape_string($mysql, $_GET['id']));
    $topic = mysqli_fetch_array($topic_result);
}?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
      ...
    </style>
  </head>
  
  <body id="body">
    <div>
      <nav>
        <ul>
          <?php
          while($row = mysqli_fetch_array($list_result)) {
            echo "<li><a href=\"?id={$row['id']}\">".htmlspecialchars($row['title'])."</a></li>";
          }
          ?>
        </ul>
        <ul>
          <li><a href="input.php">추가</a></li>
        </ul>
      </nav>
      <article>
        <?php
        if(!empty($topic)){
        ?>
        <h2><?=htmlspecialchars($topic['title'])?></h2>
        <div class="description">
          <?=htmlspecialchars($topic['description'])?>
        </div>
        <div>
          <a href="modify.php?id=<?=$topic['id']?>">수정</a>
          <form method="POST" action="process.php?mode=delete">
            <input type="hidden" name="id" value="<?=$topic['id']?>" />
            <input type="submit" value="삭제" />
          </form>
        </div>
        <?php
        }
        ?>
      </article>
    </div>
  </body>
</html>
```





```php
<?php
$mysql = mysqli_connect(hostname, username, password);
mysqli_select_db($mysql, 'opentutorials');
$list_result = mysqli_query($mysql, 'SELECT * FROM topic');

if(!empty($_GET['id'])) {
    $topic_result = mysqli_query($mysql, 'SELECT * FROM topic WHERE id = '.mysqli_real_escape_string($mysql, $_GET['id']));
    $topic = mysqli_fetch_array($topic_result);
}?>
```



```php
$list_result = mysqli_query($mysql, 'SELECT * FROM topic');
```

* $list_result = mysqli_query($mysql, 'SELECT * FROM topic')
  * Database 에 저장된 정보를 받아 옴
  * SELECT * FROM topic
    * topic Table에 저장된 모든 Data





```php+HTML
<body>
  ...
  <nav>
    <?php
    while($row = mysqli_fetch_array($list_result)) {
      echo "<li><a href=\"?id={$row['id']}\">".htmlspecialchars($row['title'])."</a></li>";
    }
    ?>
  ...
  </nav>
</body>
```

* while($row = mysqli_fetch_array($list_result)){}
  * Data 가 존재 하지 않을 때 까지, Data 를 Array type 으로 반환하고 $list_result 에서 제거
  * $list_result 에 Data 가 존재 하지 않으면, false return
* 받아온 Data 들을 Array 로 가공하여, title <a> tag 로 나열 해줌
* <a href= \ "?id={$row['id']}\">
  * 이동할 url 을 data 의 id 값을 받아와서 만듬
  * 상대경로 : 현재 url + "\ ?id=id"













##### 15.4 데이터를 HTML 에 표현하기 2

```php
<?php
echo '<a href="#">test</a>';

echo htmlspecialchars('<a href="#">test</a>');
echo '<br/>';
?>

// test (link)
// <a href="#">test</a>
```

* echo 로 html tag 를 출력하면 tag 가 동작하여 출력
* htmlspecialchars() 를 사용하면 입력된 html tag 를 작성된 문자열 그대로 출력
  * 사용자가 html tag 입력을 이용한 공격을 방지
  * 의도 되지 않은 script 동작을 방지
  * 입력에 의한 공격을 방어 : Filtering
  * 출력에 의한 공격을 방어 : Escaping





##### 15.5 데이터를 HTML 에 표현하기 3

* Link 에 해당하는 특정 정보를 본문에 출력 하기
  * Data 에 대한 식별자인 id 값을 전달
  * Link 에 해당하는 id 값이 url 에 추가되어, 사용자가 열람하고자 하는 Data 를 화면에 출력
    * url : ~/list.php?id=idNum







```php+HTML
<?php
$mysql = mysqli_connect(hostname, username, password);
mysqli_select_db($mysql, 'opentutorials');
$list_result = mysqli_query($mysql, 'SELECT * FROM topic');

if(!empty($_GET['id'])) {
    $topic_result = mysqli_query($mysql, 'SELECT * FROM topic WHERE id = '.mysqli_real_escape_string($mysql, $_GET['id']));
    $topic = mysqli_fetch_array($topic_result);
}?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
      ...
    </style>
  </head>
  
  <body id="body">
    <div>
      <nav>
        <ul>
          <?php
          while($row = mysqli_fetch_array($list_result)) {
            echo "<li><a href=\"?id={$row['id']}\">".htmlspecialchars($row['title'])."</a></li>";
          }
          ?>
        </ul>
        <ul>
          <li><a href="input.php">추가</a></li>
        </ul>
      </nav>
      <article>
        <?php
        if(!empty($topic)){
        ?>
        <h2><?=htmlspecialchars($topic['title'])?></h2>
        <div class="description">
          <?=htmlspecialchars($topic['description'])?>
        </div>
        <div>
          <a href="modify.php?id=<?=$topic['id']?>">수정</a>
          <form method="POST" action="process.php?mode=delete">
            <input type="hidden" name="id" value="<?=$topic['id']?>" />
            <input type="submit" value="삭제" />
          </form>
        </div>
        <?php
        }
        ?>
      </article>
    </div>
  </body>
</html>
```



```php
if(!empty($_GET['id'])) {
  $topic_result = mysqli_query($mysql, 'SELECT * FROM topic WHERE id = '.mysqli_real_escape_string($mysql, $_GET['id']));
  $topic = mysqli_fetch_array($topic_result);
```

* 전달된 인자에 'id' 값이 존재하면 (empty() == false), $topic 에 해당하는 Data를 저장
  * url 을 통해 id 값을 받아옴
* 전체 Data 중 특정 Data 를 조회 할때, id 값을 이용하여 page 상에 보여주기 위함
* mysqli_fetch_array($topic_result)
  * mysqli_fetch_array() 는 한번 실행 될 때, 하나의 Data를 Array type으로 return 하고 제거
  * data 가 없다면, False 를 return



```php+HTML
...
<body>
  ...
  <article>
    <?php
    if(!empty($topic)){
    ?>
    <h2><?=htmlspecialchars($topic['title'])?></h2>
    <div class="description">
      <?=htmlspecialchars($topic['description'])?>
    </div>
    <div>
      <a href="modify.php?id=<?=$topic['id']?>">수정</a>
      <form method="POST" action="process.php?mode=delete">
        <input type="hidden" name="id" value="<?=$topic['id']?>" />
        <input type="submit" value="삭제" />
      </form>
    </div>
    <?php
    }
    ?>
  </article>
  ...
</body>
```

* $topic 에 Data 가 존재한다면 (empty($topic) == false), 해당 정보를 표기
  * $topic = mysqli_fetch_array($topic_result)
    * mysqli_fetch_array() 는 값이 없을 경우, false 를 return 하는 것을 이용
  * empty(false) == true / empty(true) == false
* 특정 Data 를 선택 하였을 때, 'id' 값을 GET 으로 전달받아 $topic 에 저장한 후 page 상에 출력





##### 15.6 데이터 수정하기

```php+HTML
// list.php
...
<body>
  ...
  <article>
    <?php
    if(!empty($topic)){
    ?>
    <h2><?=htmlspecialchars($topic['title'])?></h2>
    <div class="description">
      <?=htmlspecialchars($topic['description'])?>
    </div>
    <div>
      <a href="modifyPage.php?id=<?=$topic['id']?>">수정</a>
      <form method="POST" action="process.php?mode=delete">
        <input type="hidden" name="id" value="<?=$topic['id']?>" />
        <input type="submit" value="삭제" />
      </form>
    </div>
    <?php
    }
    ?>
  </article>
  ...
</body>
```

* 수정은 modifyPage 에서, 기능적인 동작을 하기 때문에 <a> tag 를 사용하여 Link 로 표기
  * Link : GET 방식



```php+HTML
// modifyPage.php
<?php
mysql_connect(hostname, username, password);
mysql_select_db('opentutorials');
$result = mysql_query('SELECT * FROM topic WHERE id = '.mysql_real_escape_string($_GET['id']));
$topic = mysql_fetch_array($result);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
  </head>
  <body>
    <form action="./modify.php?mode=modify" method="POST">
      <input type="hidden" name="id" value="<?=$topic['id']?>" />
      <p>제목 : <input type="text" name="title" value="<?=htmlspecialchars($topic['title'])?>"></p>
      <p>본문 : <textarea name="description" id="" cols="30" rows="10"><?=htmlspecialchars($topic['description'])?></textarea></p>
      <p><input type="submit" /></p>
    </form>
  </body>
</html>
```



```html
<input type="hidden" name="id" value="<?=$topic['id']?>" />
```

* id 값을 topic의 id 값으로 넘겨줌
* type="hidden"
  * 화면에 출려되지 않고 정보를 전송하기 위함



```php
// modify.php
<?php
$mysql = mysqli_connect(hostname, username, password);

mysqli_select_db( $mysql, 'opentutorials');

mysqli_query($mysql, 'UPDATE topic SET title = "'.mysqli_real_escape_string($mysql, $_POST['title']).'", description = "'.mysqli_real_escape_string($mysql, $_POST['description']).'" WHERE id = '.mysqli_real_escape_string($mysql, $_POST['id']));

header("Location: list.php?={$_POST['id']}");
?>
```

* insert 기능과 같으나, 수정하기 위한 Data 의 id 값과 함께 update query 를 전송







##### 15.7 토픽 삭제

```php+HTML
// list.php
...
<body>
  ...
  <article>
    <?php
    if(!empty($topic)){
    ?>
    <h2><?=htmlspecialchars($topic['title'])?></h2>
    <div class="description">
      <?=htmlspecialchars($topic['description'])?>
    </div>
    <div>
      <a href="modifyPage.php?id=<?=$topic['id']?>">수정</a>
      <form method="POST" action="process.php?mode=delete">
        <input type="hidden" name="id" value="<?=$topic['id']?>" />
        <input type="submit" value="삭제" />
      </form>
    </div>
    <?php
    }
    ?>
  </article>
  ...
</body>
```

* 삭제 기능은 버튼을 누름과 동시에 delete.php 의 기능이 호출되기 때문에, <form> tag 를 이용하여 id 값을 전달
  * Operation : POST 방식



```php
// delete.php
<?php
$mysql = mysqli_connect(hostname, username, password);
mysqli_select_db( $mysql, 'opentutorials');

mysqli_query($mysql, 'DELETE FROM topic WHERE id = '.mysqli_real_escape_string($mysql, $_POST['id']));

header("Location: list.php");  
?>
```

* 삭제 기능 후, list.php 로 redirect







##### 15.8 디버깅

```php
<?php
$mysql = mysqli_connect('localhost', 'root', password);
mysqli_select_db($mysql, 'opentutorials');
mysqli_query($mysql, 'SELECT * FRO topic');

echo mysqli_error($mysql);
?>
  
// You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'FRO topic' at line 1
```

*  mysqli_error()
  * mysql 발생한 마지막 Error 를 return



```php
<?php
$mysql = mysqli_connect('localhost', 'root', password);
mysqli_select_db($mysql, 'opentutorials');
mysqli_query($mysql, 'SELECT * FRO topic');

echo mysqli_errno($mysql);
?>
  
// 1064
```

* mysqli_errno()
  * mysql 발생한 마지막 Error 의 번호를 return
  * 정상 동작이면 '0' 이 출력



* 각각 sql 함수의 return 값을 var_dump() 로 출력하여 Error 를 확인 할 수 있음
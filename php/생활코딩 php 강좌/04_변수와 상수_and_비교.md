# 생활코딩 php 강좌

### 4. 변수와 상수, 비교

##### 4.1 변수

* 변수: 대응하는 값이 변할 수 있음
  * x = 1
    * `=`: 대입 연산자
    * x = 2 : x 에 해당하는 값이 2로 변경 됨
  * 프로그래밍 언어가 제공하는 모든형태의 data 형식들이 변수가 될 수 있음
    * x = 2
    * x = "php"



```php
<html>
<body>
<?php
$a = 1;
echo $a+1; #2
echo "<br />";
$a=2;
echo $a+1; #3
?>
</body>
</html>
  
// 2
// 3
```

* ```php
  $a = 1;
  ```

  * 변수 `a`정의
  * php 에서 변수를 정의할 때에는 `$` 를 사용

* ```php
  echo "<br />";
  ```

  * 줄바꿈 html tag 출력

* ```php
  print $a+1; #3
  ```

  * print 는 echo 와 같은 명령어

* `#`: 한줄 주석
* `/* */`: 여러줄 주석



```php
<html>
<body>
<?php
$first = "coding";
echo $first." everybody";
?>
</body>
</html>

// coding everybody
```

* 문자열 변수 사용




```php
<html>
<body>
<?php
echo (100+10).'<br />';
echo ((100+10)/10).'<br />';
echo (((100+10)/10)-10).'<br />';
echo ((((100+10)/10)-10)*10).'<br />';
?>
</body>
</html>
  
// 110
// 11
// 1
// 10
```

```php
<html>
<body>
<?php
$a = 100;
$a = $a + 10;
print $a."<br />";
$a = $a / 10;
print $a."<br />";
$a = $a - 10;
print $a."<br />";
$a = $a * 10;
print $a."<br />";
?>
</body>
</html>

// 110
// 11
// 1
// 10
```

* 변수를 사용하여 효율적으로 코드를 작성



##### 4.2 상수

* 상수: 대응하는 값이 변하지 않음
  * 시스템 설정 또는 시스템에서 고정적으로 사용되는 값에 대해 정의하여 사용
  * 관습적으로 상수명을 대문자로 선언



```php
<html>
<body>
<?php
define('TITLE', 'PHP Tutorial');
echo TITLE
?>
</body>
</html>
  
// PHP Tutorial
```

* 상수 선언 함수: `define('상수 명', 값)`



```php
<html>
<body>
<?php
define('TITLE', 'PHP Tutorial');
echo TITLE
define('TITLE', 'Java Tutorial');
?>
</body>
</html>

// PHP Tutorial
// Notice. Constant TITLE already define
```

* 선언된 상수에 값을 변경 하려고 하여서 Error 발생



##### 4.3 고급주제

* 변수에 담긴 데이터 형을 검사하고 변경하기

```php
<html>
<body>
<?php
$a = 100;
echo gettype($a);
settype($a, 'double');
echo '<br/>';
echo gettype($a);
?>
</body>
</html>

// integer
// double
```

* `gettype()`: 데이터 형식을 string type 으로 받아오는 함수
* `settype()`: 데이터 형식을 변경하는 함수



* 가변 변수

```php
<html>
<body>
<?php
$title = 'subject';
$$title = 'PHP tutorial';
echo $subject;
?>
</body>
</html>
  
// PHP tutorial
```

* `$$title` == `$subejct` 
  * PHP tutorial
  * php 가 갖고있는 특징 중 하나



##### 4.4 비교

* 연산자: 컴퓨터에게 작업을 지시하기 위해 사용하는 기호
* 비교 연산자: 주어진 값들이 같은지, 다른지, 큰지, 작은지를 구분하기 위한 기호



```php
<html>
<body>
<?php
echo "1==2 : ";
var_dump(1==2);						# false
echo "<br/>";
echo "1==1 : ";
var_dump(1==1);						# true
echo "<br/>";
echo '"one"=="two" : ';
var_dump("one"=="two");		# false
echo "<br/>";
echo '"one"=="one" : ';
var_dump("one"=="one");		# true
echo "<br/>";
?>
</body>
</html>
  
// 1==2 : bool(false)
// 1==1 : bool(true)
// "one"=="two" : bool(false)
// "one"=="one" : bool(true)
```

* `==`: 같으면 true, 다르면 false



```php
<html>
<body>
<?php
echo "1!=2 : ";
var_dump(1!=2);
echo "<br/>";
echo "1!=1 : ";
var_dump(1!=1);
echo "<br/>";
echo '"one"!="two" : ';
var_dump("one"!="two");
echo "<br/>";
echo '"one"!="one" : ';
var_dump("one"!="one");
echo "<br/>";
?>
</body>
</html>
  
// 1!=2 : bool(true)
// 1!=1 : bool(false)
// "one"!="two" : bool(true)
// "one"!="one" : bool(false)
```

* `!= ` : 같으면 false, 다르면 true



```php
<html>
<body>
<?php
echo "10>20 : ";
var_dump(10>20);        #false
echo '<br />';
echo "10>1 : ";
var_dump(10>1);         #true
echo '<br />';
echo '10>10 : ';
var_dump(10>10);        #false
?>
</body>
</html>
  
  
// 10>20 : bool(false)
// 10>1 : bool(true)
// 10>10 : bool(false)
```

* `>=`: 크거나 같으면 true, 작으면 false
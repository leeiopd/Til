# 생활코딩 php 강좌

### 10. include 와 namesapce

* include : php file 안에 다른 php 파일을 포함 시키는데 사용
* namespace : include 된 각각의 php 파일이 같은 이름이 함수나 class, 상수를 갖고 있을때 충돌하는 문제를 해결하기 위해 사용

##### 10.1 include 와 require

* include 를 통해 code 의 재사용성을 높일 수 있다.



```php
// greeting.php
<?php
function welcome(){
    return 'Hello, world';
}
?>
```



```php
// 2.php
<?php
include 'greeting.php';
echo welcome();
?>
  
// Hello, world
```

* 외부 파일로 분리한 welcome() 함수를, include 를 file을 포함시켜 호출



* php 는 외부의 php 파일을 로드하는 방법으로 4가지 형식을 제공한다
  * include
  * include_once : 중복 된 file 로드를 한번만 로드
  * require : include 와 같이 파일을 로드
  * require_once : 중복 된 file 로드를 한번만 로드
* 파일 로드에 실패 했을시 include 와 require 의 차이점
  * include : warning
  * require : fatal error, 엄격한 로드 방법





##### 10.2 namespace

* name : 함수, 상수, 클래스의 이름
* namespace : 같은 이름의 사용으로 발생하는 충돌을 방지





```php
// gretting_en.php
<?php
function welcome(){
    return 'Hello world';
}
?>
```



```php
// gretting_ko.php
<?php
function welcome(){
    return '안녕 세계';
}
?>
```



```php
<?php

require_once 'greeting_ko.php';
require_once 'greeting_en.php';

echo welcome();
echo welcome();

?>
```

* Fatal Error 발생







```php
// // gretting_en_ns.php
<?php
namespace language\en;
function welcome(){
    return 'Hello world';
}
?>
```



```php
// gretting_ko_ns.php
<?php
namespace language\ko;
function welcome(){
    return '안녕 세계';
}
?>
```



```php
<?php

require_once 'greeting_ko.php';
require_once 'greeting_en.php';

echo language\ko\welcome();
echo language\en\welcome();

?>
  
// 안녕 세계Hello world
```

* namesapce 를 이용하여, 같은 함수명을 가진 함수를 따로 사용 가능





```php
<?php
namespace language\en;
function welcome(){
    return 'Hello world';
}

namespace language\ko;
function welcome(){
    return '안녕 세계';
}
?>
```

* namespace 는 하나의 파일 안에서, 복수의 namespace 가 존재 할 수 있다.
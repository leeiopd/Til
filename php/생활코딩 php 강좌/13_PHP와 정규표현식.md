# 생활코딩 php 강좌

### 13. PHP와 정규표현식

##### 13.1 정규표현식 소개

* 정규 표현식
  * Regular Expression
  * 문자열을 처리하는 방법중의 하나
  * 특정한 조건의 문자를 '검색' 하거나 '치환' 하는 과정을 매우 간편하게 처리 할수 있도록 하는 수단
  * 프로그래밍 언어나 IDE 등의 Application 에 내장되어 있음
* 정규표현식은 직관적이지 않으나, 적은 코드로 효율적인 표현이 가능
* [정규표현식 Table Link](http://ult-tex.net/info/perl/)





```php
<?php
// i 는 패턴 매칭을 할 때 대소문자를 구분하지 않도록 한다.
if (preg_match("/php/i", "PHP is the web scripting language of choice.")){
    echo "A match was found.";
} else{
    echo "A match was not found";
}
?>
  
// A match was found.
```

* preg_match(조건, 대상)
  * 조건에 해당하는 문자열을 대상에 검색
* "/php/i"
  * "php" 의 대소문자를 구분하지 않는다는 정규표현식
  * "/"~"/" : 구분자, 특수기호를 사용하여 정규표현식과 정규표현식이 아닌 부분을 구분
    * "/foo_bar/"
    * "#foo_bar"
    * "+foo_bar+"
    * "%foo_bar%"
  * i : pattern modifier, i 는 대소 구분 X
    * 패턴이 동작하는 방법을 수정하는 부분
    * [Pattern Modifiers](https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php)





##### 13.2 검색 1

```php
<?php
if (preg_match("/\bweb\b/i", "PHP is the web scripting leanguage of choice.")){
    echo "A match was found.";
}else {
    echo "A match was not found.";
}

if (preg_match("/\bweb\b/i", "PHP is the website scripting leanguage of choice.")){
    echo "A match was found.";
}else {
    echo "A match was not found.";
}
```

* "\b" 는 단어의 경계를 의미
  * "\b" 로 감싸진 "web" 은 "web" 이라는 독립된 단어를 의미
  * "website" 는 "web"과 "site"가 결합된 단어이기 때문에 이 조건에 해당X







```php
<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('/coding/', $subject, $match);
print_r($match);
?>

// Array ( [0] => coding )
```

* preg_match(검색어, 대상, 결과 저장 array)
  * 검색 문자열 "coding" 에 해당하는 문자열을 대상 문자열에서 찾은 뒤, $match 에 Array 형태로 저장함



```php
<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('#http://\w+\.\w+#', $subject, $match);
print_r($match);
?>
  
// Array ( [0] => http://opentutorials.org )
```

* "#http://\w+\.\w+#"
  * "http://----.----" 문자열 정규 표현
  * "\w" : 문자를 의미
  * "+" : 하나 이상
  * "\w+": 하나 이상의 문자열
  * "\ ."' : "." 문자열





```php
<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('#(http://\w+\.\w+)\s\w+@\w+\.\w+#', $subject, $match);
var_dump($match);
?>
  
// array(2) {
// 	[0]=> string(38) "http://opentutorials.org egoing@egoing"
// 	[1]=> string(24) "http://opentutorials.org"
// }
```

* "#(http://\w+\.\w+)\s\w+@\w+\.\w+#"
  * "http://----.---- ----@----" 문자열 정규 표현
  * "\w" : 문자를 의미
  * "+" : 하나 이상
  * "\w+": 하나 이상의 문자열
  * "\ ." : "." 문자열
  * "\s" : 공백



```php
<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('#(http://\w+\.\w+)\s(\w+@.\w+)#', $subject, $match);
var_dump($match);
?>
  
// array(3) {
// 	[0]=> string(38) "http://opentutorials.org egoing@egoing"
// 	[1]=> string(24) "http://opentutorials.org"
//	[2]=> string(13) "egoing@egoing"
// }
```

* "()" 괄호에 의해, 각각의 검색 결과가 Array 에 따로 담기게 됨
  * Capturing 또는 역참조
  * array[0] : 전체 패턴
  * array[1] : 첫번째 괄호
  * array[2] : 두번째 괄호



```php
<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('#(http://\w+\.\w+)\s(\w+@.\w+)#', $subject, $match);
var_dump($match);
echo "<br/>";
echo "homepage: ".$match[1];
echo "<br/>";
echo "email: ".$match[2];
?>
  
// array(3) {
// 	[0]=> string(38) "http://opentutorials.org egoing@egoing"
// 	[1]=> string(24) "http://opentutorials.org"
//	[2]=> string(13) "egoing@egoing"
// }
// homepage: http://opentutorials.org
// email: egoing@egoing
```

* 정규 표현식과 괄호를 이용하여 검색 결과를 편하게 사용 가능





##### 13.3 검색 2

```php
<?php
// get host name from URL
preg_match('@^(?:http://)?([^/]+)@i', "http://www.php.net/index.html", $matches);
print_r($matches);
$host = $matches[1];

// Array ( [0] => http://www.php.net [1] => www.php.net )


// get last two segments of host name
preg_match('/[^.]+\.[^.]+$/', $host, $matches);
echo "<br/>domain name is : {$matches[0]}\n";
?>
// domain name is : php.net
```

* "@^(?:http://)?([ ^/ ]+)@i"
  * "^" : 행의 시작점
  * "?:" : Capturing 시 해당하는 내용은 포함시키지 않음
  * "?" : 수량자, 0~1 인 경우
  * "@^(?:http://)@" : "http://" 가 없거나 있지만 하나만 존재하는 것으로 시작하면서 "http://" 부분은 포함되지 않는 행의 표현식
  * " [ ^/ ]" : 대괄호 안의 "^"(캐럿)은 not 을 의미
    * "/" 가 아닌 다른 문자
  * " [ ^/ ]+" : "/" 문자를 만나기 전까지의 문자열
  * 결과 : Array ( [0] => http://www.php.net [1] => www.php.net )

* "/[ ^. ]+ \ .[ ^. ]+$/" 
  * "[ ^. ]+ " : "." 이 아닌 문자가 1개 이상
  * "\ ." : "." 을 문자로 처리
    * "." 은 AnyCharacter 이기 때문에 "\ ." 로 "." 을 문자로 처리
  * "$" : 문자열의 끝, 검색의 기준이 문자열의 끝으로 생각해야함
  * 결과 : php.net





##### 13.4 검색 3

```php
<?php
$str = 'foobar: 2008';

preg_match('/(?P<name>\w+): (?P<digit>\d+)/', $str, $matches);

print_r($matches);
?>
  
// Array (
// 	[0] => foobar: 2008
// 	[name] => foobar
// 	[1] => foobar
// 	[digit] => 2008
// 	[2] => 2008
// 	)
```

* "/(?P<name>\w+): (?P<digit>\d+)/"
  * "\w+" : 문자열
  * "?P<name>\w+" : <name> 이라는 key 값으로 문자열을 저장
  * ":" : ":" 문자
  * "\d+" : digit 문자열
  * "?P<digit>\d+" : <digit> 이라는 key 값으로 digit 문자열을 저장
  * 결과 : Array ( [0] => foobar: 2008 [name] => foobar [1] => foobar [digit] => 2008 [2] => 2008 )
* sub pattern 을 index 뿐만 아니라, 연관배열의 key 값으로 sub pattern 의 이름을 지정하여 저장 가능







##### 13.5 치환 1

* preg_replace(pattern, replacement, 변경 대상)
  * patterun 을 검색한 다음 replacement 로 치환을 수행
  * 변경된 값을 return
  * [참고](https://www.php.net/manual/en/function.preg-replace.php)



```php
<?php
$string = 'April 15, 2003';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '${1}1,$3';
echo preg_replace($pattern, $replacement, $string);
?>
  
// April1,2003
```



* "April 15, 2003" -> "April1,2003"
* "/(\w+) (\d+), (\d+)/i"
  * "(\w+)" : 문자열, 1번 index 에 저장
  * " " : 공백 문자
  * "(\d+)" : digit 문자열, 2번 index 에 저장
  * "," : "," 문자
  * " " : 공백 문자
  * "(\d+)" : digit 문자열, 3번 index 에 저장
* "${1}1,$3"
  * "${1}" : 1번 index 하위 표현식 == April
  * "," : "," 문자
  * "$3" : 3번 index 하위 표현식 == 2003







##### 13.6 치환 2

```php
<?php
$string = 'The quick brown fox jumped over the lazy dog.';
$patterns = array();
$patterns[0] = '/quick/';
$patterns[1] = '/brown/';
$patterns[2] = '/fox/';
$replacements = array();
$replacements[2] = 'bear';
$replacements[1] = 'black';
$replacements[0] = 'slow';

echo preg_replace($patterns, $replacements, $string);
?>
  
// The bear bloack slow jumped over the lazy dog.
```

* "quick" -> "slow"
* "brown" -> "black"
* "fox" -> "bear"





```php
<?php
$patterns = array(
    '/(19|20)(\d{2})-(\d{1,2})-(\d{1,2})/',
    '/^\s*{(\w+)}\s*=/');
$replace = array('\3/\4/\1\2', '$\1 =');

echo preg_replace($patterns, $replace, '{startDate} = 1999-5-27');
?>

// $startDate = 5/27/1999
```

* $patterns
  * "/(19|20)(\d{2})-(\d{1,2})-(\d{1,2})/"
    * "(19|20)" : 19 or 20 이 첫번째 sub pattern
    * "(\d{2})" : digit 문자열 두자리를 두번째 sub pattern
    * "-" : "-" 문자
    * "(\d{1,2})" : digit 문자열이 한자리 이상, 두자리 이하
  * "/^\s*{(\w+)}\s*=/"
    * "^" : 행의 제일 처음, 앞에서부터 고려
    * "/s*" : space (공백) 이 있을수도 없을수도 있음
      * "/s" : space (공백)
    * "{(\w+)}" : 첫번째 sub pattern 문자열
      * "{startDate}" 의 괄호 안에 들어가게됨
  * 결과
    * subPatterns0[1] = 19
    * subPatterns0[2] = 99
    * subPatterns0[3] = 5
    * subPatterns0[4] = 27
    * subPatterns1[1] = startDate
* $replace
  * "\3/\4/\1\2" = 5/27/1999
    * "\3": subPattern0[3]
    * "/" : "/"
    * "\4": subPatterns0[4]
    * "/" : "/"
    * "\1" :subPatterns0[1]
    * "\2": subPatterns0[2]
  * "$\1 =" =  "$startDate ="
    * "$": "$"
    * "\1": subPattern1[1] 


# Python 기초

## 식별자

파이썬에서 식별자는 변수, 함수, 모듈, 클래스 등을 식별하는데 사용되는 이름이다. 

* 식별자의 이름은 영문알파벳, \_, 숫자로 구성된다.

* 첫 글자에 숫자가 올 수 없다. 

* 대소문자를 구별한다.

* 아래의 예약어는 사용할 수 없다. 

  ```
  False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield
  ```

```python
# 식별자들을 직접 확인해봅시다.
import keyword
print(keyword.kwlist)
```

```
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```



*  내장함수나 모듈 등의 이름으로도 만들면 안된다.

```python
# 5를 string으로 바꿔봅시다.
print(type(5))
str(5)
print(type(str(5)))
```

```
<class 'int'>
<class 'str'>
'5'
```



```python
# 예시로 str에 값을 할당해보고, 오류를 확인해봅시다.
str = 'hello, world'
str(5) # str은 더이상 string 함수가 아니가 되었음.
```

```
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-7-952683d2c6fd> in <module>
      1 # 예시로 str에 값을 할당해보고, 오류를 확인해봅시다.
      2 str = 'hello, world'
----> 3 str(5)

TypeError: 'str' object is not callable

```

```python
# 뒤에 코드에 영향이 가니까 변수를 메모리에서 지워줍시다!!!!
del str
```



## 기초 문법

### 인코딩 선언

인코딩은 선언하지 않더라도 `UTF-8`로 기본 설정이 되어 있다. 

만약, 인코딩을 설정하려면 코드 상단에 아래와 같이 선언한다. 
주석으로 보이지만, Python `parser`에 의해 읽혀진다.

```python
# -*- coding: <encoding-name> -*- 
```

### 주석(Comment)

* 주석은 `#`으로 표현한다. 

* `docstring`은 `"""`으로 표현한다. 

   : 여러 줄의 주석을 작성할 수 있으며, 보통 함수/클래스 선언 다음에 해당하는 설명을 위해 활용한다.

```python
# 주석을 연습해봅시다. 
# 이건 주석이라 실행이 되지 않습니다.
def mysum(a,b):
    """
    이 함수는 더하기 입니다.
    a와 b를 더해서 결과를 출력합니다.
    docstring이라고 부릅니다.
    """
    print(a+b)
```

```python
# docstring은 다음과 같이 확인할 수 있습니다.
mysum.__doc__
```

```
'\n    이 함수는 더하기 입니다.\n    a와 b를 더해서 결과를 출력합니다.\n    docstring이라고 부릅니다.\n    '
```

### 코드 라인
* 기본적으로 파이썬에서는 `;` 을 작성하지 않는다.

* 한 줄로 표기할 떄는 `;`를 작성하여 표기할 수 있다. 

```python
# print문을 두번 써봅시다.
print('hello')
print('lee')
```

```python
# print문을 한줄로 이어서 써봅시다. 오류 메시지를 확인해주세요.
print('hello')print('lee')
```

```
  File "<ipython-input-12-cdc804eabc3b>", line 2
    print('hello')print('lee')
                      ^
SyntaxError: invalid syntax

```



```python
# ;을 통해 오류를 해결해봅시다.
print('hello');print('lee')
```

```
hello
lee
```



* 줄을 여러줄 작성할 때는 역슬래시`\`를 사용하여 아래와 같이 할 수 있다. 

```python
# print문을 통해 안되는 코드 예시 작성해봅시다.
print('
      안녕')
```

```
  File "<ipython-input-14-9d2345151501>", line 2
    print('h
            ^
SyntaxError: EOL while scanning string literal
```



```python
# print문을 통해 되는 코드 예시 작성해봅시다.
print('\
안녕')
```

```
안녕
```



* []` `{}` `()`는 `\` 없이도 가능하다.

```python
# list를 두 줄에 걸쳐서 만들어봅시다.
lunch = ['짜장면','짬뽕',
         '라면','초밥']
print(lunch)
```

```
['짜장면', '짬뽕', '라면', '초밥']
```



## 변수(variable) 및 자료형

* 변수는 `=`을 통해 할당(assignment) 된다. 
* 해당 자료형을 확인하기 위해서는 `type()`을 활용한다.
* 해당 변수의 메모리 주소를 확인하기 위해서는 `id()`를 활용한다.

```python
# 변수 x에 숫자를 저장하고 메모리 위치를 확인해봅시다.
x = 3
print(id(x))

# 그리고 자료형을 확인해봅시다.
print(type(x))
```

```
1881697088
<class 'int'>
```



* 같은 값을 동시에 할당할 수 있다.

```python
# 같은 값을 동시에 할당해봅시다.
x = y = 1004
print(x)
print(y)
```

  ```
1004
1004
  ```



* 다른 값을 동시에 할당 가능하다.

```python
# 동시에 두개의 변수에 값 두개를 할당해봅시다.
x, y = 1, 2
print(x)
print(y)
```

```
1
2
```



```python
# 변수의 갯수가 더 많을 때 오류를 알아봅시다.
x, y = 1
```

```
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-26-e79f419d1f6a> in <module>
      1 # 변수의 갯수가 더 많을 때 오류를 알아봅시다.
----> 2 x, y = 1

TypeError: 'int' object is not iterable
```



```python
# 변수의 갯수가 더 적을 때 오류를 알아봅시다.
x, y = 1, 2, 3
```

```
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-33-1acfd9ca7965> in <module>
      1 # 변수의 갯수가 더 적을 때 오류를 알아봅시다.
----> 2 x, y = 1, 2, 3

ValueError: too many values to unpack (expected 2)
```



* 이를 활용하면 서로 값을 바꾸고 싶은 경우 아래와 같이 활용 가능하다.

```python
# 변수 x와 y의 값을 바꿔봅시다.
print(x, y)
x, y = y, x
print(x, y)
```

```
1 2
2 1
```



## 수치형(Numbers)

###  `int` (정수)

모든 정수는 `int`로 표현된다.

파이썬 3.x 버전에서는 `long` 타입은 없고 모두 `int` 형으로 표기 된다.

10진수가 아닌 8진수 : `0o`/2진수 : `0b` /16진수: `0x`로도 표현 가능하다. 



```python
# 변수에 정수를 넣고 해당 변수의 type을 알아봅시다.
a = 5
type(a)
```

```
int
```



```python
# python 3.x에서 long은 없어졌습니다.
a = 3**1000
print(a)
print(type(a))
```

```
1322070819480806636890455259752144365965422032752148167664920368226828597346704899540778313850608061963909777696872582355950954582100618911865342725257953674027620225198320803878014774228964841274390400117588618041128947815623094438061566173054086674490506178125480344405547054397038895817465368254916136220830268563778582290228416398307887896918556404084898937609373242171846359938695516765018940588109060426089671438864102814350385648747165832010614366132173102768902855220001
<class 'int'>
```



```python
# 파이썬에서 가장 큰 숫자를 활용하기 위해 sys 모듈을 불러옵니다.
import sys
print(sys.maxsize)
print(type(sys.maxsize))
```

```
9223372036854775807
<class 'int'>
```



* 파이썬에서 정수는 overflow(오버플로우)가 발생하지 않는다.
* aribitary-precision artithmetic으로 정수를 처리하기 때문이다.

```python
# n진수를 만들어보고, 출력 해봅시다.
binary_num = 0b10
octal_num = 0o10
decimal_num = 10
hexadecimal_num = 0x10
print(binary_num, octal_num, decimal_num, hexadecimal_num)
#표기와 관계없이 10진수로 출력된다.
```

```
2 8 10 16
```



### `float`(부동소수점, 실수)

실수는 `float`로 표현된다. 

다만, 실수를 컴퓨터가 표현하는 과정에서 부동소수점을 사용하며, 항상 같은 값으로 일치되지 않는다. (floating point rounding error)

이는 컴퓨터가 2진수(비트)를 통해 숫자를 표현하는 과정에서 생기는 오류이며, 대부분의 경우는 중요하지 않으나 값을 같은지 비교하는 과정에서 문제가 발생할 수 있다.



```python
# 변수에 실수를 넣고 해당 변수의 type을 알아봅시다.
a = 3.5
print(a)
print(type(a))
```

```
3.5
<class 'float'>
```



```python
a = 314e-2
print(a)
```

```
3.14
```



* 실수의 경우 실제로 값을 처리하기 위해서는 조심할 필요가 있다.

```python
# 실수의 덧셈을 해봅시다.
2.5 + 3.7
->6.2

# 실수의 뺄셈을 해봅시다.
3.5 - 3.12 #컴퓨터 사이언스적인 오차 발생.
->0.3799999999999999

# 우리가 원하는대로 반올림을 해봅시다.
round(3.5 - 3.12, 2)
->0.38

# 두 개의 값이 같은지 확인해봅시다.
a = 3.5 - 3.12
b = 0.38
a == b
->False
```



* 따라서 다음과 같은 방법으로 처리 할 수 있다. 이외에 다양한 방법이 있음

```python
# 기본적인 처리방법을 알아봅시다.
abs(a - b) <= 1e-10 #허용 가능한 수 (정말 작은수) 보다 작은가로 처리함.
->True

# sys 모듈을 통해 처리하는 방법을 알아봅시다.
import sys
abs(a - b) <= sys.float_info.epsilon
# system상에서 허용가능한 오차보다 작은가 확인.
->True

print(sys.float_info.epsilon)
2.220446049250313e-16

# python 3.5부터 활용 가능한 math 모듈을 통해 처리하는 법을 알아봅시다.
import math
math.isclose(a, b)
->True
```



### `complex` (복소수)

복소수는 허수부를 `j`로 표현한다. 

```python
# 변수에 복소수를 넣고 해당 변수의 type을 알아봅시다.
a = 3 + 4j
type(a)
->complex

# 복소수와 관련된 메소드들을 확인해봅시다.
print(a.imag)
print(a.real)
print(a.conjugate()) #켤레 복소수
->4.0
3.0
(3-4j)
```



### Bool

파이썬에는 `True`와 `False`로 이뤄진 `bool` 타입이 있다.

비교/논리 연산을 수행 등에서 활용된다.

다음은 `False`로 변환됩니다.

```python
0, 0.0, (), [], {}, '', None
```



```python
# True와 False의 타입들을 알아봅시다.
print(type(True))
print(type(False))
```

```
<class 'bool'>
<class 'bool'>
```



* 형변환(Type Conversion)에서 추가적으로 다루는 내용입니다.

```python
# 다양한 True, False 상황들을 확인해봅시다.
bool(0)
->False

bool('')
->False

bool([])
->False

bool('a')
->True

bool(100)
->True

bool([1,2,3,4])
->True
```



### None

파이썬에서는 값이 없음을 표현하기 위해 `None`타입이 존재합니다.

```python
# None의 타입을 알아봅시다.
type(None)
->NoneType

# 변수에 저장해서 확인해봅시다.
a = None
print(a)
print(type(a))
->None
<class 'NoneType'>
```



### 문자형(String)

#### 기본 활용법

문자열은 Single quotes(`'`)나 Double quotes(`"`)을 활용하여 표현 가능하다. 

단, 문자열을 묶을 때 동일한 문장부호를 활용해야하며, `PEP-8`에서는 **하나의 문장부호를 선택**하여 유지하도록 하고 있습니다. 
(Pick a rule and Stick to it)



```python
# 변수에 문자열을 넣고 출력해봅시다.
name = 'takhee'
print(name)
->takhee
```



* 다만 문자열 안에 문장부호(`'`, `"`)가 활용될 경우 이스케이프 문자(`\`)를 사용하는 것 대신 활용 가능 합니다. 

```python
# 문자열 안에 문장부호를 활용해서 오류를 확인해봅시다.
print('나는 생각했다, '배고프다'')
```

```
  File "<ipython-input-86-1fd79eb2462c>", line 2
    print('나는 생각했다, '배고프다'')
                        ^
SyntaxError: invalid syntax
```



```python
# 오류를 이스케이프 문자와 서로 다른 문장부호를 통해 해결해봅시다.
print('나는 생각했다, \'배고프다\'')
print("나는 생각했ㄷ, '배고프다'")
```

```
나는 생각했다, '배고프다'
나는 생각했다 '배고프다'
```



* 여러줄에 걸쳐있는 문장은 다음과 같이 표현 가능합니다.

`PEP-8`에 따르면 이 경우에는 반드시 `"""`를 사용하도록 되어 있습니다.

```python
# 여러줄을 출력해봅시다.
print("""
안녕,
여러줄 출력
""")
```

```

안녕,
여러줄 출력
```



```python
# 물론 string interpolation도 가능합니다.
name = 'takhee'
print(f"""
안녕,
{name}
""")
```

```

안녕,
takhee
```



### 이스케이프 문자열

문자열을 활용하는 경우 특수문자 혹은 조작을 하기 위하여 사용되는 것으로 `\`를 활용하여 이를 구분한다. 

| <center>예약문자</center> |   내용(의미)    |
| :-----------------------: | :-------------: |
|            \n             |     줄바꿈      |
|            \t             |       탭        |
|            \r             |   캐리지리턴    |
|            \0             |    널(Null)     |
|           `\\`            |       `\`       |
|            \\'            | 단일인용부호(') |
|            \\"            | 이중인용부호(") |

```python
# 이스케이프 문자열을 조합하여 프린트해봅시다.
print('안녕\t안녕\n슬래시출력\\')
```

```
안녕	안녕
슬래시출력\
```



* 이를 출력할 때 활용할 수가 있다.

```python
# print를 하는 과정에서도 이스케이프 문자열을 활용 가능합니다.
print('안녕', end = '\t')
print('안녕', end = '\t')
```

```
안녕	안녕	
```



```python
# 물론, end 옵션은 이스케이프 문자열이 아닌 다른 것도 가능합니다.
print('안녕', end = '!!')
print('안녕', end = '!!')
print('안녕', end = '!!')
```

```
안녕!!안녕!!안녕!!
```



#### 깜짝 퀴즈

다음의 문장을 출력해보세요.

- `"""` 사용 금지
- `print` 여러번 사용 금지

```
"파일은 C:\Windows\Users\내문서\Python에 저장이 되어있습니다."
나는 생각했다. 'cd를 써서 git bash로 들어가봐야지'
```



```python
# 여기에 코드를 작성해주세요.
print('\"파일은 C:\\Windows\\User\\내문서\\Python에 저정이 되어있습니다.\"\n나는 생각했다.\'cd를 써서 git bash로 들어가봐야지\'')
```



### String interpolation 

1) `%-formatting` 

2) [`str.format()` ](https://pyformat.info/)

3) [`f-strings`](https://www.python.org/dev/peps/pep-0498/) : 파이썬 3.6 버전 이후에 지원 되는 사항입니다.

본 슬라이드에서는 `f-strings`의 기본적인 활용법만 알려드리고 나머지 `.format()`는 해당 [링크](https://pyformat.info/)에서 확인바랍니다.

```python
# name 변수에 이름을 입력해봅시다.
name = 'kim'

# %-formatting을 활용해봅시다.
print('hello, %s' %name)

->hello, kim

# str.format()을 활용해봅시다.
print('hello,{}'.format(name))
->hello,kim

# f-string을 활용해봅시다.
print(f'hello,{name}')
->hello,kim
```



* f-strings에서는 형식을 지정할 수 있으며,

```python
# 다양한 형식을 활용하기 위해 datetime 모듈로 오늘을 표현해봅시다.
import datetime
today = datetime.datetime.now()
print(today)
->2019-01-02 11:36:24.270347
        
# 예쁘게 출력해봅시다.
print(f'{today:%y}년 {today:%m}월 {today:%d}일 {today:%A}입니다.')
->19년 01월 02일 Wednesday입니다.
```



* 연산과 출력형식 지정도 가능합니다.

```python
# string interpolation에서 연산과 숫자 출력형식을 지정해봅시다.
pi = 3.141592
print(f'{pi:.3}, 반지름이 2일때 원의 넓이는 {pi*2*2}')
```

```
3.14, 반지름이 2일때 원의 넓이는 12.566368
```



# 연산자

## 산술 연산자
Python에서는 기본적인 사칙연산이 가능합니다. 

| 연산자 | 내용           |
| ------ | -------------- |
| +      | 덧셈           |
| -      | 뺄셈           |
| \*     | 곱셈           |
| /      | 나눗셈         |
| //     | 몫             |
| %      | 나머지(modulo) |
| \*\*   | 거듭제곱       |

```python
# 2의 1000승을 확인해봅시다.
2**1000
-> 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376

# 나눗셈과 관련된 산술연산자를 활용해봅시다.
print(3 / 2)
print(3 // 2)
print(3 % 2)
->1.5
1
1

# divmod는 나눗셈과 관련된 함수입니다.
print(divmod(5, 2)) #결과 (몫, 나머지)
quotient, remainder = divmod(5, 2)
print(f'몫은 {quotient}, 나머지는 {remainder}')
->(2, 1)
몫은 2, 나머지는 1
```



* 양수/음수도 표현 가능합니다.

```python
# 음수 양수 표현도 해봅시다.
print(-4)
print(+4)
->-4
4
```



## 비교 연산자

우리가 수학에서 배운 연산자와 동일하게 값을 비교할 수 있습니다.

| 연산자 | 내용     |
| ------ | -------- |
| a > b  | 초과     |
| a < b  | 미만     |
| a >= b | 이상     |
| a <= b | 이하     |
| a == b | 같음     |
| a != b | 같지않음 |

```python
# 숫자의 대소관계를 비교해봅시다.
a = 3
b = 5
a > b
->False

# 같은 숫자인지 확인해봅시다.
3 == 5
->False

# 다른 숫자인지 확인해봅시다.
3 != 5
->True

# 문자열도 같은지 확인해봅시다.
'a' == 'b'
->False
```



## 논리 연산자

| 연산자  | 내용                         |
| ------- | ---------------------------- |
| a and b | a와 b 모두 True시만 True     |
| a or b  | a 와 b 모두 False시만 False  |
| not a   | True -> False, False -> True |

우리가 보통 알고 있는 `&` `|`은 파이썬에서 비트 연산자이다.



```python
# and과 관련해서 모든 case를 출력해봅시다.
print(True and True)
print(False and False)
print(True and False)
print(False and True)
->True
False
False
False

# or과 관련해서 모든 case를 출력해봅시다.
print(True or True)
print(False or True)
print(True or False)
print(False or False)
->True
True
True
False

# not을 활용해봅시다.
print(not True)
print(not False)
->False
True

# and의 단축평가(short-circuit evaluation)에 대해서 알아봅시다.
print(5 and 3)
print(5 and 0)
print(0 and 5)
print(0 and 0)
->3
0
0
0

# or의 단축평가(short-circuit evaluation)에 대해서 알아봅시다.
print(5 or 3)
print(5 or 0)
print(0 or 5)
print(0 or 0)
->5
5
5
0
```

* 파이썬에서 and는 a가 거짓이면 a를 리턴하고, 참이면 b를 리턴한다.
* 파이썬에서 or은 a가 참이면 a를 리턴하고, 거짓이면 b를 리턴한다.



## 복합 연산자

복합 연산자는 연산과 대입이 함께 이뤄진다. 

가장 많이 활용되는 경우는 반복문을 통해서 갯수를 카운트하거나 할 때 활용된다.

| 연산자    | 내용       |
| --------- | ---------- |
| a += b    | a = a + b  |
| a -= b    | a = a - b  |
| a \*= b   | a = a \* b |
| a /= b    | a = a / b  |
| a //= b   | a = a // b |
| a %= b    | a = a % b  |
| a \*\*= b | a = a ** b |

```python
# 복합연산자는 이럴 때 사용됩니다.
i = 0
while i < 3:
    print(i)
    i += 1
->0
1
2
```



## 기타 연산자

### Concatenation

숫자가 아닌 자료형은 `+` 연산자를 통해 합칠 수 있다.

### Containment Test

`in` 연산자를 통해 속해있는지 여부를 확인할 수 있다.

### Identity

`is` 연산자를 통해 동일한 object인지 확인할 수 있다. 


(나중에 Class를 배우고 다시 학습)

### Indexing/Slicing
`[]`를 통한 값 접근 및 `[:]`을 통한 슬라이싱 

(다음 챕터를 배우면서 추가 학습)



```python
# 문자열끼리 더해봅시다.(합쳐봅시다.)
'hi,'+'ssafy'
->'hi,ssafy'

# list끼리 더해봅시다.(합쳐봅시다.)
[1, 2, 3] + [4, 5, 6]
->[1, 2, 3, 4, 5, 6]

# 문자열안에 특정한 문자가 있는지 확인해봅시다.
'a' in 'apple'
->True

# list안에 특정한 원소가 있는지 확인해봅시다.
3 in [1, 2, 3]
->True

# range안에 특정한 원소가 있는지 확인해봅시다.
3 in range(4)
->True

# is는 숫자를 통해 맛만 봅시다.
# 3 is 3 은 3 == 3  과는 다르다.
a = 3
b = 3
a is b
print(id(a))
print(id(b)) # address가 같은지 비교하는것이 is
->False
2729176901392
2729176901424
True
1881705184
1881705184
```



```python
# 문자열을 인덱싱을 통해 값에 접근해봅시다.
print('hi'[0])
'hi'[0] = 'a' # list와는 다르게 연산자 할당 불가
```

```
h
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-63-3180f648067d> in <module>
      1 # 문자열을 인덱싱을 통해 값에 접근해봅시다.
      2 print('hi'[0])
----> 3 'hi'[0] = 'a'

TypeError: 'str' object does not support item assignment
```



## 연산자 우선순위

0. `()`을 통한 grouping
1. Slicing
2. Indexing
3. 제곱연산자
    \*\*
4. 단항연산자 
    +, - (음수/양수 부호)
5. 산술연산자
    \*, /, %
6. 산술연산자
    +, -
7. 비교연산자, `in`, `is`
8. `not`
9. `and` 
10. `or`

```python
# 우선순위를 확인해봅시다.
print(-3**2)
print((-3)**2)
->-9
9
```



# 기초 형변환(Type conversion, Typecasting)


파이썬에서 데이터타입은 서로 변환할 수 있다.

## 암시적 형변환(Implicit Type Conversion)
사용자가 의도하지 않았지만, 파이썬 내부적으로 자동으로 형변환 하는 경우이다.
아래의 상황에서만 가능하다.
* bool
* Numbers (int, float, complex)

```python
# boolean과 integer는 더할 수 있을까요?
print(False + 4)
print(True + 4)
->4
5

# int, float, complex를 각각 변수에 대입해봅시다.
int_num = 3
float_num = 5.4
complex_num = 3+4j

# int와 float를 더해봅시다. 그 결과의 type은 무엇일까요?
print(int_num+float_num)
print(type(int_num+float_num))
->8.4
<class 'float'>

# int와 complex를 더해봅시다. 그 결과의 type은 무엇일까요?
print(int_num + complex_num)
print(type(int_num + complex_num))
->(6+4j)
<class 'complex'>
```



## 명시적 형변환(Explicit Type Conversion)

위의 상황을 제외하고는 모두 명시적으로 형 변환을 해주어야한다.

* string -> intger  : 형식에 맞는 숫자만 가능
* integer -> string : 모두 가능

암시적 형변환이 되는 모든 경우도 명시적으로 형변환이 가능하다.

* `int()` : string, float를 int로 변환
* `float()` : string, int를 float로 변환
* `str()` : int, float, list, tuple, dictionary를 문자열로 변환

`list(), tuple()` 등은 다음 챕터에서 배울 예정이다.

```python
# integer와 string 사이의 관계는 명시적으로 형변환을 해줘야만 합니다.
1 + '3'
```

```
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-78-e904ba837cb8> in <module>
      1 # integer와 string 사이의 관계는 명시적으로 형변환을 해줘야만 합니다.
----> 2 1 + '3'

TypeError: unsupported operand type(s) for +: 'int' and 'str'
```



```python
# string 3을 integer로 변환해봅시다.
1 + int('3')
->4

str(1) + '3'
->13

# string 3.5를 float로 변환해봅시다.
float('3.5')
->3.5
```



```python
# string은 글씨가 숫자일때만 형변환이 가능합니다.
int('a')
```

```
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-82-2f3a0a38b2ed> in <module>
      1 # string은 글씨가 숫자일때만 형변환이 가능합니다.
----> 2 int('a')

ValueError: invalid literal for int() with base 10: 'a'
```



```python
# string 3.5를 int로 변환할 수는 없습니다.
int('3.5')
```

```
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-83-daee20086ade> in <module>
      1 # string 3.5를 int로 변환할 수는 없습니다.
----> 2 int('3.5')

ValueError: invalid literal for int() with base 10: '3.5'
```



```python
# float 3.5는 int로 변환이 가능합니다.
print(type(3.5))
print(int(3.5))
```

```
<class 'float'>
3
```



# 시퀀스(sequence) 자료형

`시퀀스`는 데이터의 순서대로 나열된 형식을 나타낸다. 

**주의! 순서대로 나열된 것이 정렬되었다라는 뜻은 아니다.**

파이썬에서 기본적인 시퀀스 타입은 다음과 같다.

1. 리스트(list)
2. 튜플(tuple)
3. 레인지(range)
4. 문자열(string)
5. 바이너리(binary) : 따로 다루지는 않습니다.

## 1. `list`

**활용법**

```python
[value1, value2, value3]
```

리스트는 대괄호`[]` 를 통해 만들 수 있습니다.

값에 대한 접근은 `list[i]`를 통해 합니다.



```python
# 빈 리스트를 만들어봅시다.
linch = []

# 원소를 포함한 리스트를 만들어봅시다.
lunch = ['짜장면', '짬뽕']
print(lunch)
->['짜장면', '짬뽕']

# 첫번째 값에 접근해봅시다.
lunch[0]
->'짜장면'
```



## 2. `tuple`

**활용법**
```python
(value1, value2)
```

튜플은 리스트와 유사하지만, `()`로 묶어서 표현합니다.

그리고 tuple은 수정 불가능(immutable)하고, 읽을 수 밖에 없습니다.

직접 사용하는 것보다는 파이썬 내부에서 사용하고 있습니다.



```python
# tuple을 만들어봅시다.
my_tuple = (1, 3)
print(type(my_tuple))
-><class 'tuple'>

# 아래와 같이 만들 수 있습니다.
my_tuple2 = 1, 3
print(type(my_tuple2))
-><class 'tuple'>

# 파이썬 내부에서는 다음과 같이 활용됩니다.
# 앞선 2. 변수 및 자료형 예제에서 사용된 코드입니다.
x, y = 1, 2
print(x) # tuple 1로 생성
print(y) # tuple 2로 생성
->1
2
# 실제로는 tuple로 처리됩니다.

# 변수의 값을 swap하는 코드 역시 tuple을 활용하고 있습니다.
x, y = y, x
print(x)
print(y)
->2
1

a = (1)
print(type(1))
-><class 'int'>

a = (1,)
print(type(a))
len(a)
-><class 'tuple'>
1

```



##  `range()`

레인지는 숫자의 시퀀스를 나타내기 위해 사용됩니다.

기본형 : `range(n)`, 0부터 n-1까지 값을 가짐


범위 지정 : `range(n, m)`, n부터 m-1까지 값을 가짐

범위 및 스텝 지정 : `range(n, m, s)`, n부터 m-1까지 +s만큼 증가한다



```python
# range를 만들어봅시다.
range(10)

# range에 담긴 값을 list로 바꿔서 확인해봅시다.
a = range(2)
print(a)
b = list(a)
print(b)
->range(0, 2)
[0, 1]

# 4 ~ 8까지의 숫자를 담은 range를 만들어봅시다.
a = range(4,9)
print(list(a))
->[4, 5, 6, 7, 8]

# 0부터 -9까지 담긴 range를 만들어봅시다.
a = range(0,-10, -1)
print(list(a))
->[0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
```



## 시퀀스에서 활용할 수 있는 연산자/함수 

| operation  | 설명             |
| ---------- | ---------------- |
| x in s     | containment test |
| x not in s | containment test |
| s1 + s2    | concatenation    |
|s * n		     |n번만큼 반복하여 더하기|
|s[i]|indexing|
|s[i:j]|slicing|
|s[i:j:k]|k간격으로 slicing|
|len(s)|길이|
|min(s)|최솟값|
|max(s)|최댓값|
|s.count(x)|x의 갯수|

```python
# contain test를 확인해봅시다.
1 in [1,2,3]
->True

# concatenation를 해봅시다.
[1, 2, 3] + [4, 5]
->[1, 2, 3, 4, 5]

# 숫자 0이 6개 있는 list를 만들어봅시다.
[0]*6
->[0, 0, 0, 0, 0, 0]

# indexing과 slicing을 하기 위해 list하나를 만들어주세요.
my_list = list(range(1,11))
print(my_list)
->[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 두번쨰, 세번쨰 값만 가져와봅시다.
my_list[1:3]
->[2, 3]

# 0부터 30까지의 숫자를 3씩 증가시킨 상태로 만들어봅시다.
my_list2 = list(range(0,31))
print(my_list2)
my_list2[0:len(my_list2):3]
->[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

# 위에서 만든 list의 길이를 확인해봅시다.
len(my_list2)
->31

# 위에서 만든 list의 최솟값을 확인해봅시다.
min(my_list2)
->0

# 위에서 만든 list의 최댓값을 확인해봅시다.
max(my_list2)
->30

# list에 담긴 특정한 것의 갯수를 확인할 수도 있습니다.
a = [1, 1, 1, 3, 2, 5, 7]
a.count(1)
->3
```



## `set`

세트는 수학에서의 집합과 동일하게 처리됩니다. 

세트는 중괄호`{}`를 통해 만들며, 순서가 없고 중복된 값이 없습니다.

**활용법**
```python
{value1, value2, value3}
```

| 연산자/함수       | 설명   |
| ----------------- | ------ |
| a - b             | 차집합 |
| a \| b            | 합집합 |
| a & b             | 교집합 |
| a.difference(b)   | 차집합 |
| a.union(b)        | 합집합 |
| a.intersection(b) | 교집합 |

```python
# set 두개를 만들어서 연산자들을 활용해봅시다.
a_set = {1, 2, 5}
b_set = {1, 3, 7}
print(a_set - b_set)
print(a_set | b_set)
print(a_set & b_set)
print(a_set.difference(b))
print(a_set.union(b_set))
print(a_set.intersection(b_set))
```

```
{2, 5}
{1, 2, 3, 5, 7}
{1}
{2, 5}
{1, 2, 3, 5, 7}
{1}
```



```python
# set은 중복된 값이 있을 수 없습니다.
a = {1, 1, 1}
print(a) # 순서가 없이 저장 되어서 사용자가 원하는 것을 index가 불가능하다. 그래서 같은값도 다르게 인식 못함.
->{1}
```



* `set`을 활용하면 `list`의 중복된 값을 손쉽게 제거할 수 있습니다.

```python
# set으로 중복된 값을 제거해봅시다.
a_list = [1, 1, 2, 3]
print(a_list)
a_list = set(a_list)
print(a_list)
```

```
[1, 1, 2, 3]
{1, 2, 3}
```



```python
# 다시 list로 바꿔서 확인해봅시다.
a_list = list(a_list)
print(a_list)
```

```
[1, 2, 3]
```



```python
#교집합 구하기
a = [1, 2, 3]
b = [1, 2, 5]

a = set(a)
b = set(b)

print(list(set(a & b)))
```

```
[1, 2]
```



## `dictionary`

**활용법**

```python
{Key1:Value1, Key2:Value2, Key3:Value3, ...}
```

* 딕셔너리는 `key`와 `value`가 쌍으로 이뤄져있으며, 궁극의 자료구조입니다. 
* `{}`를 통해 만들며, `dict()`로 만들 수도 있습니다.
* `key`는 immutable한 모든 것이 가능하다. (불변값 : string, integer, float, boolean, tuple, range)
* `value`는 `list`, `dictionary`를 포함한 모든 것이 가능하다.



```python
# 비어있는 dictionary를 두가지 방법으로 만들어봅시다.
dict_1 = dict()
print(type(dict_1))
dict_2 = {}
print(type(dict_2))
-><class 'dict'>
<class 'dict'>

# 지역번호(서울-02 경기-031 인천-032)가 담긴 전화번호부를 만들어봅시다.
phonebook = {'서울':'02', '경기':'031', '인천':'032'}
print(phonebook)
->{'서울': '02', '경기': '031', '인천': '032'}

# dictionary는 중복된 key는 존재할 수가 없습니다.
a = {1:2, 1:3}
print(a)
->{1: 3}

# 딕셔너리의 메소드를 활용하여 key를 확인 해볼 수 있습니다.
a.keys()
->dict_keys([1])

# 딕셔너리의 메소드를 활용하여 value를 확인 해볼 수 있습니다.
a.values()
->dict_values([3])

# 실습! 친구 전화번호부 딕셔너리를 작성해주세요.
phone = {'승만':'모름', '예지':'모름', '재찬':'모름', '지원':'모름', '모름':'모름'}
print(phone)
->{'승만': '모름', '예지': '모름', '재찬': '모름', '지원': '모름', '모름': '모름'}
```
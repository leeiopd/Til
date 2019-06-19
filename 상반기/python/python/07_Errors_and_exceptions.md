# 07_Errors_and_exceptions

# Errors and Exceptions

* 발생할 수 있는 오류와 예외처리를 확인해봅시다.

## 문법 에러(Syntax Error)

* 가장 많이 만날 수 있는 에러로 발생한 `파일 이름`과 `줄`, `^`을 통해 파이썬이 읽어 들일 때(parser)의 문제 발생 위치를 표현한다.



```python
# if문을 통해 발생시켜봅시다!
if True:
    print('참')
else
    print('거짓')
```

```python
  File "<ipython-input-1-ad301a5287d3>", line 4
    else
        ^
SyntaxError: invalid syntax
```



```python
# print문을 통해 다른 오류를 발생시켜봅시다!
# EOL 오류를 봅시다.
print('hi)
```

```python
  File "<ipython-input-2-c86c48ac0632>", line 3
    print('hi)
              ^
SyntaxError: EOL while scanning string literal

```



```python
# EOF 에러도 보게 됩니다.
print('hi'
```

```python
  File "<ipython-input-3-bbe254e9d0ff>", line 2
    print('hi'
              ^
SyntaxError: unexpected EOF while parsing
```



* 정확한 위치를 지정하지 않을 수도 있으므로 앞뒤로 모두 확인을 해봐야합니다.

```python
if True print('참')
```

```python
  File "<ipython-input-4-ae56d80f3d7b>", line 1
    if True print('참')
                ^
SyntaxError: invalid syntax
```



## 예외 (Exceptions)

* 문법이나 표현식이 바르게 되어있지만, 실행시 발생하는 에러입니다.

* 아래 제시된 모든 에러는 Exception을 상속받아 이뤄집니다.

```python
# ZeroDivisionError를 확인해봅시다.
5/0
```

```python
---------------------------------------------------------------------------
ZeroDivisionError                         Traceback (most recent call last)
<ipython-input-5-9b2f86f4b3b3> in <module>
      1 # ZeroDivisionError를 확인해봅시다.
----> 2 5/0

ZeroDivisionError: division by zero
```



```python
# NameError를 확인해봅시다. 
a
```

```python
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-6-b41025b36d7b> in <module>
      1 # NameError를 확인해봅시다.
----> 2 a

NameError: name 'a' is not defined
```



```python
# TypeError를 확인해봅시다.
1 + '1'
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-11-a8978fdced50> in <module>
      1 # TypeError를 확인해봅시다.
----> 2 1 + '1'

TypeError: unsupported operand type(s) for +: 'int' and 'str'
```



```python
# 함수 호출과정에서 TypeError도 발생하게 됩니다. 확인해봅시다.
round('2.5')
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-12-6b670135eabe> in <module>
      1 # 함수 호출과정에서 TypeError도 발생하게 됩니다. 확인해봅시다.
----> 2 round('2.5')

TypeError: type str doesn't define __round__ method
```



```python
# 함수호출 과정에서 다양한 오류를 확인할 수 있습니다. : 필수 argument 누락 
import random
random.sample([1, 2])
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-35-ffa63ee9bdc0> in <module>
      1 # 함수호출 과정에서 다양한 오류를 확인할 수 있습니다. : 필수 argument 누락
      2 import random
----> 3 random.sample([1, 2])

TypeError: sample() missing 1 required positional argument: 'k'
```



```python
# 함수호출 과정에서 다양한 오류를 확인할 수 있습니다. : argument 많은 경우
random.choice([1, 2], 1)
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-36-f207298f5559> in <module>
      1 # 함수호출 과정에서 다양한 오류를 확인할 수 있습니다. : argument 많은 경우
----> 2 random.choice([1, 2], 1)

TypeError: choice() takes 2 positional arguments but 3 were given
```



```python
# ValueError를 확인해봅시다.
int('3.5')
# type은 맞지만 값이 다르게 된 경우!! // str이므로 int형 변환이 가능하지만 3.5는 float이므로 ValueError
```

```python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-37-1b2cb90bb197> in <module>
      1 # ValueError를 확인해봅시다.
----> 2 int('3.5')

ValueError: invalid literal for int() with base 10: '3.5'
```



```python
# ValueError를 확인해봅시다.
a = [1, 2, 3]
a.index(100)
# 값이 적절하지 않는 경우!!
```

```python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-38-eaf459ec9a4f> in <module>
      1 # ValueError를 확인해봅시다.
      2 a = [1, 2, 3]
----> 3 a.index(100)

ValueError: 100 is not in list
```



```python
# IndexError를 확인해봅시다.
a = [1, 2]
a[6]
```

```python
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
<ipython-input-39-c6b017da5f48> in <module>
      1 # IndexError를 확인해봅시다.
      2 a = [1, 2]
----> 3 a[6]

IndexError: list index out of range
```



```python
# KeyError를 확인해봅시다. 
song_list = {'sia':'candy cane lane'}
song_list['queen']
```

```python
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-44-1cf312fd058b> in <module>
      1 # KeyError를 확인해봅시다.
      2 song_list = {'sia':'candy cane lane'}
----> 3 song_list['queen']

KeyError: 'queen'
```



```python
# ModuleNotFoundError를 확인해봅시다.
import randomeeee
```

```python
---------------------------------------------------------------------------
ModuleNotFoundError                       Traceback (most recent call last)
<ipython-input-43-5fe84659619a> in <module>
      1 # ModuleNotFoundError를 확인해봅시다.
----> 2 import randomeeee

ModuleNotFoundError: No module named 'randomeeee'
```



```python
# ImoprtError를 확인해봅시다.
from bs4 import bs
```

```python
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
<ipython-input-45-3be0f43b884f> in <module>
      1 # ImoprtError를 확인해봅시다.
----> 2 from bs4 import bs

ImportError: cannot import name 'bs'
```



```python
# KeyboardInterrupt를 확인해봅시다. 
while True:
    pass
# 사용자가 키보드를 통해서 중지를 하였을때 발생하는 Error
```

```python
---------------------------------------------------------------------------
KeyboardInterrupt                         Traceback (most recent call last)
<ipython-input-46-a8d0705db4bb> in <module>
      1 # KeyboardInterrupt를 확인해봅시다.
      2 while True:
----> 3     pass

KeyboardInterrupt: 
```



## 예외 처리 

### 기본  - `try` `except`
`try` 구문을 이용하여 예외 처리를 할 수 있습니다.

기본은 다음과 같은 구조를 가지고 있습니다.

```python
try:
    codeblock1
except 예외:
    codeblock2
```

* `try`절이 실행됩니다. 

* 예외가 발생되지 않으면, `except`없이 실행이 종료가 됩니다.

* 예외가 중간에 발생하면, 남은 부분을 수행하지 않고, `except`가 실행됩니다.

```python
# 사용자로부터 값을 받아 정수로 변환하여 출력해봅시다.
num = input('값을 입력하세요: ')
print(int(num))
```

```python
값을 입력하세요: asdf
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-48-5a642ee2783b> in <module>
      1 # 사용자로부터 값을 받아 정수로 변환하여 출력해봅시다.
      2 num = input('값을 입력하세요: ')
----> 3 print(int(num))

ValueError: invalid literal for int() with base 10: 'asdf'
```



```python
# 사용자가 문자열을 넣어 해당 오류(ValueError)가 발생하면, 숫자를 입력하라고 출력해봅시다.
try:
    num = input('값을 입력하세요: ')
    print(int(num))
    print(num)
    
except ValueError:
    print('정수를 입력하세요.')
```

```
값을 입력하세요: dsf
정수를 입력하세요.
```



### 복수의 예외 처리

* 두 가지 예외를 모두 처리할 수 있습니다. 

```python
try:
    codeblock1
except (예외1, 예외2):
    codeblock2
```

```python
# 100을 사용자가 입력한 값으로 나눈 후 출력하는 코드를 작성해봅시다.
num = input('입력 : ')
print(100/int(num))
```

```python
입력 : fdsf
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-4-84c8d3b735f9> in <module>
      1 # 100을 사용자가 입력한 값으로 나눈 후 출력하는 코드를 작성해봅시다.
      2 num = input('입력 : ')
----> 3 print(100/int(num))

ValueError: invalid literal for int() with base 10: 'fdsf'
```



```python
# 문자열일때와 0일때 모두 처리를 해봅시다.
try:
    num = input('입력 : ')
    print(100/int(num))
except (ValueError, ZeroDivisionError):
    print('다시 입력하세요')
```

```
입력 : 0
다시 입력하세요
```



```python
# 각각 다른 오류를 출력할 수 있습니다.
try:
    num = input('입력 : ')
    print(100/int(num))
except ValueError:
    print('다시 입력하세요')
except ZeroDivisionError:
    print('0으로 나눌수 없어')
```

```
입력 : 0
0으로 나눌수 없어
```



* 여기서 중요한 내용은 에러가 순차적으로 수행됨으로, 가장 작은 범주부터 시작해야합니다.

```python
try:
    num = input('입력 : ')
    print(100/int(num))
except Exception:
    print('오류다!!')
except ZeroDivisionError:
    print('0으로 나눌수 없어')
```

```
입력 : ㅇㄹㄴ
오류다!!
```



### 에러 문구 처리

* 에러 문구를 함께 넘겨줄 수 있습니다.

```python
try:
    codeblock1
except 예외 as e:
    codeblock2
```



```python
# 에러 메세지를 넘겨줄 수도 있습니다.
try:
    num = input('입력 : ')
    print(100/int(num))
except ValueError as e:
    print(f'다시 입력하세요 {e}')
except ZeroDivisionError as e:
    print(f'0으로 나눌수 없어 {e}')
```

```
입력 : fdsf
다시 입력하세요 invalid literal for int() with base 10: 'fdsf'
```



### `else`

* 에러가 발생하지 않는 경우 수행되는 문장은 `else`를 이용합니다.

```python
try:
    codeblock1
except 예외:
    codeblock2
else:
    codeblock3
```



```python
try:
    a = [1, 2, 3]
    b = a[10]
except IndexError:
    print('IndexError 발생')
else:
    print(b*1000)
```

```
IndexError 발생
```



## `finally` 

* 반드시 수행해야하는 문장은 `finally`를 활용합니다.

```python
try:
    codeblock1
except 예외:
    codeblock2
finally:
    codeblock3
```



```python
try:
    a = {'python' : 100, 'java' : 100}
    a['html']
    
except KeyError as e:
    print(f'키에러발생 {e}')
finally :
    print(a)
```

```
키에러발생 'html'
{'python': 100, 'java': 100}
```



## 예외 발생시키기

`raise`를 통해 예외를 발생시킬 수 있습니다.




```python
# 오류를 발생시켜 봅시다.
raise ValueError
```

```python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-16-1cbbb0c66c9b> in <module>
      1 # 오류를 발생시켜 봅시다.
----> 2 raise ValueError

ValueError: 
```



```python
# 인자를 넘겨줄 수도 있습니다.
raise ValueError('코드 잘 짜자')
```

```python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-17-bca96e2114f7> in <module>
      1 # 인자를 넘겨줄 수도 있습니다.
----> 2 raise ValueError('코드 잘 짜자')

ValueError: 코드 잘 짜자
```



## 실습 문제

>양의 정수 두개를 받아 몫과 나머지로 출력하는 함수를 만들어보세요.

`def my_div(num1,num2)`

- num2가 0이여서 발생하는 오류인 경우 **에러메시지**를 출력해주세요.

 예) division by zero 오류가 발생하였습니다.


- 인자가 string이여서 발생하는 경우는 **ValueError와 함께 '숫자를 넣어주세요'를 출력**해주세요.
  (실제로 이 경우에 발생하는 것은 TypeError입니다.)
- 정상적인 경우에는 결과를 return합니다.

```python
# 아래에 코드를 작성해주세요.
def my_div(num1, num2):
    try:
        q, r = num1 // num2, num1 % nm2
        
    
    except ZeroDivisionError as e:
        print(f'{e} 오류가 발생했습니다')
        
    except TypeError:
        raise ValueError('숫자를 넣어주세요')
    
    else:
        return q, r
```

```python
my_div(1, 0)
```

```
integer division or modulo by zero 오류가 발생했습니다
```



```python
my_div('1', '5')
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-43-54e7f91a82e3> in my_div(num1, num2)
      3     try:
----> 4         q, r = num1 // num2, num1 % nm2
      5 

TypeError: unsupported operand type(s) for //: 'str' and 'str'

During handling of the above exception, another exception occurred:

ValueError                                Traceback (most recent call last)
<ipython-input-44-38d53e68908a> in <module>
----> 1 my_div('1', '5')

<ipython-input-43-54e7f91a82e3> in my_div(num1, num2)
      9 
     10     except TypeError:
---> 11         raise ValueError('숫자를 넣어주세요')
     12 
     13     else:

ValueError: 숫자를 넣어주세요
```



## `assert`

`assert` 문은 예외를 발생시키는 다른 방법이다. 

보통 상태를 검증하는데 사용되며 무조건 `AssertionError`가 발생한다.

```
assert Boolean expression, error message
```

위의 검증식이 거짓일 경우를 발생한다.

`raise`는 항상 예외를 발생시키고, 지정한 예외가 발생한다는 점에서 다르다.



## 실습 문제

>양의 정수 두개를 받아 몫과 나머지로 출력하는 함수를 만들어보세요.

`def my_div(num1,num2)`

- assert를 활용하여, int가 아닌 경우 AssertionError를 발생시켜봅시다.

```python
# 아래에 코드를 작성해주세요.
def my_div(num1, num2):
    assert type(num1) == int and type(num2) == int, '숫자를 입력하지 않았습니다.'
    # 내가 원하는 상황이 아니면 문구가 출력된다.
    try:
        result =  num1/num2
    except ZeroDivisionError as e:
        print(f'{e}, 0으로 나누지마!')
    
    else:
        return result
```

```python
my_div('1', '2')
```

```python
---------------------------------------------------------------------------
AssertionError                            Traceback (most recent call last)
<ipython-input-101-cd1e2b9ba8ef> in <module>
----> 1 my_div('1', '2')

<ipython-input-64-609211139f04> in my_div(num1, num2)
      1 # 아래에 코드를 작성해주세요.
      2 def my_div(num1, num2):
----> 3     assert type(num1) == int and type(num2) == int, '숫자를 입력하지 않았습니다.'
      4     # 내가 원하는 상황이 아니면 문구가 출력된다.
      5     try:

AssertionError: 숫자를 입력하지 않았습니다.
```


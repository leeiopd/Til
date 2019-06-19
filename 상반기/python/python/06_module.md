# 06_module

# 모듈 활용 기초 

python에는 기본적으로 제공되는 모듈들이 있습니다.

[표준 라이브러리](https://docs.python.org/ko/3/library/index.html)에서 제공되는 모듈을 확인해보세요!

여기 있는 모든 내용을 외울 필요도 없고, 이런 것이 있다만 확인해보세요 :)

우리가 사용했던 `random` 역시도 표준라이브러리에서 제공되고 있는 모듈이며, 난수를 발생시키는 모듈입니다.



```python
# 로또 번호 추천을 해보세요!
import random
lotto = random.sample(range(1,46), 6)
print(lotto)
```

```
[21, 30, 44, 38, 24, 27]
```



## `import`
* 모듈을 활용하기 위해서는 반드시 `import`문을 통해 내장 모듈을 이름 공간으로 가져와야합니다.

```python
# random을 확인해봅시다!
import random
print(dir(random))
```



* `import`는 다양한 방법으로 할 수 있습니다.

## `from` *모듈명* `import` *어트리뷰트*

특정한 함수 혹은 어트리뷰트만 활용하고 싶을 때, 위와 같이 작성합니다.

```python
# 우리가 beautifulsoup을 사용할 때 활용했던 코드를 작성해봅시다.
from bs4 import BeautifulSoup
```

```python
# random 모듈 중에 sample을 바로 활용해봅시다.
# 이름공간에 현재 sample이 없습니다.
sample(range(1,46), 6)
```

```python
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-1-43158fe555f4> in <module>
      1 # 이름공간에 현재 sample이 없습니다.
----> 2 sample(range(1,46), 6)

NameError: name 'sample' is not defined
```



```python
# 다음과 같이 작성하면 활용할 수 있습니다.
from random import sample
sample(range(1,46), 6)
```

```
[7, 28, 40, 3, 27, 43]
```



## `from` *모듈명* `import` `*`

해당하는 모듈 내의 모든 변수, 함수, 클래스를 가져옵니다.

```python
# random을 다가져와서 choice를 바로 활용해봅시다.
choice(['불고기', '날치알밥'])
```

```python
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-1-92a50d3619d4> in <module>
      1 # random을 다가져와서 choice를 바로 활용해봅시다.
----> 2 choice(['불고기', '날치알밥'])

NameError: name 'choice' is not defined
```



```python
from random import * # * 는 모든것이라는 의미
```

```python
choice(['불고기', '날치알밥'])
```

```
'날치알밥'
```



## `from` *모듈명* `import` *어트리뷰트*  `as` 

내가 지정하는 이름을 붙여 가져올 수 있습니다.

```python
# 축약형으로 내가 지정할 수도 있습니다.
from random import choice as c
c([1, 2])
```

```
2
```



# 숫자 관련 함수

이외에도 분수(frctions), 십진(decimal), 통계(statistics)등이 있습니다.

## 수학 관련 함수(math)

다음의 기본 함수는 `import`없이 활용하였습니다. 

`sum`, `max`, `min`, `abs`, `pow`, `round`, `divmod`

```python
# math를 불러옵시다.
import math
```



* 활용할 수 있는 상수는 다음과 같습니다.

```python
# 원주율(pi)
math.pi
```

```
3.141592653589793
```



```python
# 자연 상수(e)
math.e
```

```
2.718281828459045
```



* 활용할 수 있는 연산 관련 함수는 다음과 같습니다.

| 함수                | 비고                            |
| ------------------- | ------------------------------- |
| math.ceil(x)        | 소수점 올림                     |
| math.floor(x)       | 소수점 내림                     |
| math.trunc(x)       | 소수점 버림                     |
| math.copysign(x, y) | y의 부호를 x에 적용한 값        |
| math.fabs(x)        | float 절대값 - 복소수 오류 발생 |
| math.factorial(x)   | 팩토리얼 계산 값                |
| math.fmod(x, y)     | float 나머지 계산               |
| math.fsum(iterable) | float 합                        |
| math.modf(x)        | 소수부 정수부 분리              |



* 로그, 지수 연산은 다음과 같습니다. 

| 함수                | 비고                  |
| ------------------- | --------------------- |
| math.pow(x,y)       | x의 y승 결과          |
| math.sqrt(x)        | x의 제곱근의 결과     |
| math.exp(x)         | e^x 결과              |
| math.log(x[, base]) | 밑을 base로 하는 logx |



* 삼각함수는 다음과 같습니다. 

```
sin, cos, tan
asin, acos, atan, 
sinh, cosh, tanh,
ashinh, acosh, atanh
```



## 난수 발생관련 함수(random)

```python
import random

# sample과 choice를 각각 활용해봅시다.
numbers = range(1,46)
random.sample(numbers, 6)
```

```
[16, 32, 13, 15, 24, 22]
```



```python
random.choice(numbers)
```

```
39
```



```python
# 난수 생성
random.random()
```

```
0.25080424103885524
```



```python
# 임의의 정수 반환
random.randint(1, 5)
```

```
1
```



```python
# 시드 설정 - 시드 설정을 하지 않으면 현재 시간을 기반으로 만든다.
random.seed(2)
```

```python
# 시드 설정 후에 첫번째 값을 확인해보자
random.random()
# 시드설정은 랜덤 변수의 변형 순서를 컨트롤 할수 있다.
```

```
0.9560342718892494
```



```python
# 시퀀스 객체를 섞는다.
a = ['kim', 'kang', 'yu', 'choi', 'hwang']
random.shuffle(a)
print(a)
```

```
['kim', 'kang', 'yu', 'hwang', 'choi']
```



# 날짜 관련 모듈

## datetime

```python
# 1970년 1월 1일부터 1초씩 증가합니다.
# 지금을 출력해봅시다.
import datetime
now = datetime.datetime.now()
datetime.datetime.now()
```

```
datetime.datetime(2019, 1, 8, 16, 27, 55, 839525)
```



```python
# 오늘을 출력하는 다른 방법도 있습니다.
datetime.datetime.today()
```

```
datetime.datetime(2019, 1, 8, 16, 27, 1, 842042)
```



```python
# UTC기준시도 출력가능합니다.
datetime.datetime.utcnow()
```

```
datetime.datetime(2019, 1, 8, 7, 27, 13, 786149)
```



* 시간 형식지정

| 형식 지시자(directive) | 의미                   |
| ---------------------- | ---------------------- |
| %y                     | 연도표기(00~99)        |
| %Y                     | 연도표기(전체)         |
| %b                     | 월 이름(축약)          |
| %B                     | 월 이름(전체)          |
| %m                     | 월 숫자(01~12)         |
| %d                     | 일(01~31)              |
| %H                     | 24시간 기준(00~23)     |
| %I                     | 12시간 기준(01~12)     |
| %M                     | 분(00~59)              |
| %S                     | 초(00~61)              |
| %p                     | 오전/오후              |
| %a                     | 요일(축약)             |
| %A                     | 요일(전체)             |
| %w                     | 요일(숫자 : 일요일(0)) |
| %j                     | 1월 1일부터 누적 날짜  |



| 속성/메소드 | 내용                 |
| ----------- | -------------------- |
| .year       | 년                   |
| .month      | 월                   |
| .day        | 일                   |
| .hour       | 시                   |
| .minute     | 분                   |
| .second     | 초                   |
| .weekday()  | 월요일을 0부터 6까지 |



## timedelta

```python
from datetime import timedelta
```



```python
# import 해봅시다.
from datetime import timedelta
```

```python
# 활용해봅시다.
ago = timedelta(days = -3)
print(ago)
```

```
-3 days, 0:00:00
```



```python
# 비교 및 연산이 가능합니다.
now + ago
```

```
datetime.datetime(2019, 1, 5, 16, 27, 55, 839525)
```



```python
# 오늘부터 1일일때, 100일 뒤는?
ago = timedelta(days = 100)
now + ago
```

```
datetime.datetime(2019, 4, 18, 16, 27, 55, 839525)
```



```python
# 크리스마스부터 지금까지 얼마나 지났을까?
diff = christmas - now
```

```python
# 초로 만들어봅시다.
diff.total_seconds()
```



### time delta 예쁘게 꾸미기

> 아쉽게도 time_delta 값을 출력하는 함수가 없습니다.
>
> 초를 입력받아 다음과 같이 출력해보세요. '10일 1시간 18분 51초 전'

```python
# 여기에 코드를 입력하세요. 
def print_time_delta(seconds):
```

```python
print_time_delta(diff_seconds)
```


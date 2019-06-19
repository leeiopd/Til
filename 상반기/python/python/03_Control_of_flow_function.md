# 03_Control_of_flow_function

# 함수(function) 기초

## 들어가기전에

> 직사각형의 둘레와 면적을 구하는 코드를 작성해주세요.

```python
height = 30
width = 20
```

---
```
예시 출력)
직사각형 둘레: 100, 면적: 600입니다.
```



```python
height = 30
width = 20

# 아래에 코드를 작성하세요.
area = height * width
long = (height + width) * 2

print(f'직사각형 둘레: {long}, 면적: {area}입니다.')
```

```
직사각형 둘레: 100, 면적: 600입니다.
```

* 앞서 작성한 코드에서 매번 사각형의 둘레와 면적을 구하기 위해서는 변수에 값을 바꾸거나 코드를 복사 붙여넣기 해야합니다.
* 코드가 많아질수록 문제가 발생할 확률이 높아지며, 유지 보수하기도 힘들어진다.



## 개요

**활용법**

```
def func(parameter1, parameter2):
    code line1
    code line2
    return value
```

* 함수 선언은 `def`로 시작하여 `:`으로 끝나고, 다음은 `4spaces 들여쓰기`로 코드 블록을 만듭니다.
* 함수는 `매개변수(parameter)`를 넘겨줄 수도 있습니다.
* 함수는 동작후에 `return`을 통해 결과값을 전달 할 수도 있습니다. (`return` 값이 없으면, None을 반환합니다.)
* 함수는 호출을 `func(val1, val2)`와 같이 합니다.

```python
# 위의 사각형 코드를 rectangle() 함수로 만들어보세요.
def rectangle(height, width): # (parameter)
    area = height * width
    long = (height + width) * 2
    print(f'직사각형 둘레: {long}, 면적: {area}입니다.')
```

```python
# 너비 30, 높이 100일때 호출 해보세요
rectangle(100,30) # (argument)
```

```
직사각형 둘레: 260, 면적: 3000입니다.
```



```python
# 우리가 활용하는 print문도 파이썬에 지정된 함수입니다. 
# 아래에서 'hi'는 parameter로 넘어가고 출력을 하게 됩니다.
print('hi')
```

```
hi
```



```python
# 내장함수 목록을 직접 볼 수도 있습니다.
dir(__builtins__)
```



## 함수의 return

앞서 설명한 것과 마찬가지로 함수는 반환되는 값이 있으며, 이는 어떠한 종류의 객체여도 상관없습니다. 

단, 오직 한 개의 객체만 반환됩니다.

함수가 return 되거나 종료되면, 함수를 호출한 곳으로 돌아갑니다.

```python
# sorted()정렬한 list를 리턴한다.
# 그래서 다음과 같이 작성하면, print(a)를 했을 때 정렬 안된 상태를 출력한다.

a = [3, 2, 1]
sorted(a)
print(a)
```

```
[3, 2, 1]
```



```python
# 따라서, 리턴 된 list(정렬된 상태)를 다시 a에 저장해 주어야 한다.
a = [3, 2, 1]
a = sorted(a)
print(a)
```

```
[1, 2, 3]
```



```python
# .sort()는 원본 자체를 바꾸고, 리턴값이 없다. (즉, None이 리턴된다.)
# 따라서, 아래와 같이 작성하면, a에 None이 저장된다.
a = [3, 2, 1]
a.sort() # .sort() - method
print(a)
```

```
[1, 2, 3]
```



### 실습문제

> 아래의 코드와 동일한 `my_max`함수를 만들어주세요.
>
> 정수를 두개 받아서, 큰 값을 반환합니다. 

```python
max(1, 5)
```
```
예상 출력)
5
```



```python
max(1,5)
```

```
5
```



```python
# 여기에 my_max 함수를 만들어주세요.
def my_max(a,b):
    if a > b:
        return a
    else:
        return b
```

```python
# 만든 함수를 호출해보세요.
my_max(1,5)
my_max(10, 10000)
```

```
10000
```



```python
a = my_max(10, 10000)
print(a)
print(type(a))
```

```
10000
<class 'int'>
```



## 실습문제

> 함수는 모든 객체를 리턴할 수 있습니다. 
>
> 리스트 두개를 받아 각각 더한 결과를 비교하여 값이 큰 리스트를 반환합니다.

```python
my_list_max([10, 3], [5, 9])
```
---
```
예상 출력)
[5, 9]
```



```python
# 여기에 my_max 함수를 만들어주세요.
def my_list_max(a, b):
    if sum(a) > sum(b):
        return a
    else:
        return b
```

```python
# 만든 함수를 호출해보세요.
my_list_max([10, 3], [5, 9])
```

```
[5, 9]
```



```python
# 코드2
def my_list_max2(a, b):
    return a if sum(a) > sum(b) else b
```

```python
my_list_max2([10, 3], [5, 9])
```

```
[5, 9]
```



## 함수의 인자/인수

함수는 `인자(parameter)`를 받을 수 있습니다.

### 위치 인수

함수는 기본적으로 인수를 위치로 판단합니다.

```python
# 알고 있는 수학 공식의 함수를 하나만 만들어보세요.
def roots (a,b,c):
    print(f'a,b,c: {a},{b},{c}')
    x1 = (((-b) + (b**2 - 4*a*c)**(0.5)) / (2*a))
    x2 = (((-b) - (b**2 - 4*a*c)**(0.5)) / (2*a))
    return x1, x2 # tuple 형식으로 return 됨.
```

```python
# 그리고 어떤 인자에 값이 바인딩되어있는지 함수 안에 print문을 작성해주세요.
roots(1,4,3)
```

```
a,b,c: 1,4,3
```

```
(-1.0, -3.0)
```



### 기본 값(Default Argument Values)

함수가 호출될 때, 인자를 지정하지 않아도 기본 값을 설정할 수 있습니다. 

**활용법**
```
def func(p1=v1):
    return p1
```



```python
# 이름을 받아서 다음과 같이 인사하는 함수를 만들어보세요. 
# "안녕 길동아"
# 이름이 없으면 "안녕 익명아" 로 출력해주세요.
def greeting (names='익명'):
    return print(f'안녕, {names}아')
greeting()
greeting('길동')
```

```
안녕, 익명아
안녕, 길동아
```



* 기본 인자 값이 설정되어 있더라도 기존의 함수와 동일하게 호출 가능합니다.
* 호출시 인자가 없으면 기본 인자 값이 활용됩니다.
* 단, 기본 매개변수 이후에 기본 값이 없는 매개변수를 사용할 수는 없습니다.



```python
# 오류를 확인해봅시다.
def greetin (name='성민',age):
    print(f'{age}, 성민')
```

```python
  File "<ipython-input-87-3ca2b8e99460>", line 2
    def greetin (name='성민',age):
                ^
SyntaxError: non-default argument follows default argument
```



```python
# 정상적인 코드로 바꿔봅시다.
def greeting (age, name='성민'):
    print(f'{age}, {name}')

greeting(3)
greeting(1,'ssafy')
```

```
3, 성민
1, ssafy
```



### 키워드 인자(Keyword Arguments)

키워드 인자는 직접적으로 변수의 이름으로 특정 인자를 전달할 수 있습니다.

```python
# 키워드 인자 예시
def greeting(age, name='ssafy'):
    print(f'{name}은 {age}살입니다.')

# 다양하게 함수를 호출해봅시다.
greeting(name='승만', age=5)
greeting(24, name='동명')
greeting(age=5, name='민교')
```

```
승만은 5살입니다.
동명은 24살입니다.
민교은 5살입니다.
```



* 단 아래와 같이 활용할 수는 없습니다. 키워드 인자를 활용한 뒤에 위치 인자를 활용할 수는 없습니다.

```python
# 오류를 확인해봅시다.
greeting(age=24,'철수')
# 키워드 인자를 사용후에는 순서 인자가 무시됨. 키워드 인자를 사용 후에는 모두 키워드 인자를 사용해야함
```

```python
  File "<ipython-input-6-4232a52ab061>", line 2
    greeting(age=24,'철수')
                   ^
SyntaxError: positional argument follows keyword argument
```



### 가변 인자 리스트

앞서 설명한 `print()`처럼 정해지지 않은 임의의 숫자의 인자를 받기 위해서는 가변인자를 활용합니다. 

가변인자는 `tuple` 형태로 처리가 되며, `*`로 표현합니다. 

**활용법**

```
def func(*args):
```



```python
# 가변 인자 예시 (print문은 *obejcts를 통해 임의의 숫자의 인자를 모두 처리합니다.)
print('hi', '안녕', '할로', '구텐탁', sep='-')
```

```
hi-안녕-할로-구텐탁
```



```python
# args는 tuple임을 확인해봅시다.
def test_func(*a):
    print(type(a)) # 활용시에는 *빼고 사용.
test_func(1, 2, 3)
```

```
<class 'tuple'>
```



### 실습문제

> 정수를 여러 개 받아서 가장 큰 값을 반환(return)하는 `my_max()`을 만들어주세요.

```python
my_max(10, 20, 30, 50)
```
---
```
예시출력)
50
```



```python
max(1, 2, 3, 4)
```

```
4
```



```python
# 아래에 코드를 작성해주세요.
def my_max(a,b,c,d):
    k =[a, b, c, d]
    k = sorted(k)
    return print(k[len(k)-1])

def my_max2(a,b,c,d):
    k =[a, b, c, d]
    max_num = a
    for num in k:
        if num > max_num:
            max_num = num
        else:
            continue
    return print(max_num)

def my_max3(*numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
        else:
            continue
    return print(max_num)
```

```python
# 만든 함수를 호출해보세요.
my_max(-1, -2, -3, -4)
my_max2(-1, -2, -3, -4)
my_max3(-1, -2, -3, -4)
```

```
-1
-1
-1
```



```python
#타키쌤
def my_max_tk(*numbers):
    #max_value numbers[0]
    for idx, num in enumerate(numbers):
        if idx == 0:
            max_value = num
        else:
            if max_value < num:
                max_value = num
        return max_value
```

```python
my_max_tk(-1, -2, -3, -4)
```

```
-1
```



### 정의되지 않은 인자들 처리하기

정의되지 않은 인자들은 `dict` 형태로 처리가 되며, `**`로 표현합니다. 

주로 `kwagrs`라는 이름을 사용하며, `**kwargs`를 통해 인자를 받아 처리할 수 있습니다.

**활용법**

```
def func(**kwargs):
```



```python
# 딕셔너리 생성 함수 예시
pb = dict(서울='02', 경기='031')
print(pb)
```

```
{'서울': '02', '경기': '031'}
```



### 실습문제 

> `my_dict()` 함수를 만들어 실제로 dictionary 모습으로 출력 함수를 만들어보세요.
>
>

```
예시 출력)
한국어: 안녕, 영어: hi
```



```python
# 아래에 코드를 작성해주세요.
def my_fake_dict(**kwarg):
    for key, value in kwarg.items():
        print(key, value, sep=': ', end=', ')
```

```python
# 만든 함수를 호출해보세요.
my_fake_dict(한국어='안녕', 영어='hi', 독일어='Guten Tag')
#한국어,영어,독일어는 키워드임.
```

```
한국어: 안녕, 영어: hi, 독일어: Guten Tag, 
```



```python
# 사실은 dict()는 출력이 아니라 딕셔너리를 리턴합니다. 
# 리턴하는 my_fake_dict를 만들어주세요.      
def my_fake_dict(**kwarg):
    return kwarg
```

```python
# 만든 함수를 호출해보세요.
my_fake_dict(한국어='안녕', 영어='hi', 독일어='Guten Tag')
```

```
{'한국어': '안녕', '영어': 'hi', '독일어': 'Guten Tag'}
```



### dictionary를 인자로 넘기기(unpacking arguments list)

`**dict`를 통해 함수에 인자를 넘길 수 있습니다.

```python
# user 검증(유사 회원가입)을 작성해보세요.
# username, password, password_confirmation을 받아서 비밀번호 일치 여부를 판단해보세요.
def sign_up(username, password, password_confirmation):
    if password == password_confirmation:
        print(f'{username}님, 회원가입되었습니다.')
    else:
        print('비밀번호가 일치하지 않습니다.')
```

```python
# 사용자 정보를 dictionary로 만들어 넘겨보세요.
sign_up('hong', '1q2w3e4r', '1q2w3e4r')

my_account = {
    'username':'hong',
    'password':'1q2w3e4r',
    'password_confirmation':'1q2w3e4r'
}
sign_up(**my_account)
# 아래와 같은 형태로 입력하게 된 것.
sign_up(username='hong', password='1q2w3e4r', password_confirmation='1q2w3e4r')
```

```
hong님, 회원가입되었습니다.
hong님, 회원가입되었습니다.
hong님, 회원가입되었습니다.
```



### 실습문제  URL 편하게 만들기

> url 패턴을 만들어 문자열을 반환하는 `my_url` 함수를 만들어봅시다.
>
> 영진위에서 제공하는 일별 박스오피스 API 서비스는 다음과 같은 방식으로 요청을 받습니다.

```
기본 요청 URL : http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?
```

* key : 발급받은 키값(abc)
* targetDt : yyyymmdd
* itemPerPage : 1 ~ 10 **기본 10**

```
예시)
호출 1)
my_url(key='abc', targetDt='yyyymmdd')

호출 2)
api = {
    'key': 'abc',
    'tagetDt': 'yyyymmdd'
}
my_url(**api)

예시 출력)
'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?itemPerPage=10&key=abc&tagetDt=yyyymmdd&'
```



```python
# 여기에 코드를 작성해주세요.
def my_url(itemPerPage=10, **args):
    ''' 
    영진위 API요청을 위해서 URL을 생성합니다.
    필수적으로는 발급받은 key와 targetDt를 넘겨줘야 합니다.
        
    key : 발급 받은 key (필수)
    targetDt : yyymmdd 형식 (필수)
    itemPerPage : 1~10까지의 숫자 (선택, 기본값 : 10)
    '''

    base_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    base_url += f'itemPerPage={itemPerPage}&'
    for key, value in args.items():
        base_url += f'{key}={value}&'
    return base_url
```

```python
print(my_url.__doc__)
```

```
    영진위 API요청을 위해서 URL을 생성합니다.
    필수적으로는 발급받은 key와 targetDt를 넘겨줘야 합니다.
        
    key : 발급 받은 key (필수)
    targetDt : yyymmdd 형식 (필수)
    itemPerPage : 1~10까지의 숫자 (선택, 기본값 : 10)
```



```python
api = {
    'key': 'abc',
    'targetDt': 'yyyymmdd'
}
my_url(**api)
```

```
'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?itemPerPage=10&key=abc&targetDt=yyyymmdd&'
```



### URL 검증하기

> 이제 우리는 만들어진 요청 보내기전에 URL을 검증해야합니다. 
>
> 앞선 설명을 참고하여 검증 로직을 구현하고 문자열을 반환하세요.

```
> 아래의 두가지 상황만 만들도록 하겠습니다. <

key, targetDt가 없으면, '필수 요청변수가 누락되었습니다.'

itemPerPage의 범위가 1~10을 넘어가면, '1~10까지의 값을 넣어주세요.'
```



```python
# 여기에 코드를 작성해주세요.
def my_url(itemPerPage=10, **args): ## **args는 tuple로 받아 변형없이 사용하겠다는 뜻.
    base_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    base_url += f'itemPerPage={itemPerPage}&'
    
    cnt = 0
    
    if itemPerPage < 1 or itemPerPage > 10:
        print('itemPerPage 값을 1~10까지의 값을 넣어주세요.')
        cnt += 1
            
    if 'key' not in args or 'targetDt' not in args:
        print('필수 요청변수가 누락되었습니다.')
        cnt += 1
    
    if cnt != 0:
        return
   
    for key, value in args.items():
        base_url += f'{key}={value}&'
        
    return base_url
```

```python
# 함수를 호출해보세요.
my_url(key='230a38cdf17d51372535e0eccf0718a2', targetDt='20190102', itemPerPage=10)
```

```
'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?itemPerPage=10&key=230a38cdf17d51372535e0eccf0718a2&targetDt=20190102&'
```



```python
my_url(20)
my_url(60, key='aa', targetDt='yyyymmdd')
```

```
itemPerPage 값을 1~10까지의 값을 넣어주세요.
필수 요청변수가 누락되었습니다.
itemPerPage 값을 1~10까지의 값을 넣어주세요.
```



```python
# 타키쌤
def my_url(itemPerPage=10, **args):
    base_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    base_url += f'itemPerPage={itemPerPage}&'
    
    if 'key' not in args or 'targetDt' not in args: # 단축평가 때문에 ( ~~ or -- ) 을 쓰면 앞에 ~~의 T/F 여부만 판단.
        return '필수 요청변수가 누락 되었습니다.'
    
    if itemPerPage not in range(1,11):
        return '1~10 까지의 값을 입력하세요.'
    
    for key, value in args.items():
        base_url += f'{key}={value}&'
    
    return base_url
```

```python
my_url(60, key='aa', targetDt='yyyymmdd')
```

```
'1~10 까지의 값을 입력하세요.'
```



## 이름공간 및 스코프(Scope)

파이썬에서 사용되는 이름들은 이름공간(namespce)에 저장되어 있습니다.
그리고, LEGB Rule을 가지고 있습니다. 

변수에서 값을 찾을 때 아래와 같은 순서대로 이름을 찾아나갑니다.
* `L`ocal scope: 정의된 함수
* `E`nclosed scope: 상위 함수 
* `G`lobal scope: 함수 밖의 변수 혹은 import된 모듈
* `B`uilt-in scope: 파이썬안에 내장되어 있는 함수 또는 속성

```python
# 따라서 첫시간에 내장함수의 식별자를 사용할 수 없었던 예제에서 오류가 생기는 이유를 확인할 수 있습니다.
```

* `str()` 코드가 실행되면
* str을 Global scope에서 먼저 찾아서 `str = 4`를 가져오고, 
* 이는 함수가 아니라 변수이기 때문에 `not callable`하다라는 오류를 내뱉게 됩니다.
* 우리가 원하는 `str()`은 Built-in scope에 있기 때문입니다.



```python
# 프린트 하는 함수를 만들어서 자세히 확인해봅시다.
a = 5
def localscope(a):
    print(a)
localscope(3)
```

```
5
```



```python
# 전역 변수를 바꿀 수 있을 까요?
gloval_varialbe = 5
def localscope(a):
    global global_variable
    a = 3
    print(f'a가 {a}로 변경되었습니다.')
localscope(2)
print(a)
```

```
a가 3로 변경되었습니다.
5
```
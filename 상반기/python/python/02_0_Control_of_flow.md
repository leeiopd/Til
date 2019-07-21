# 02_0_Control_of_flow

# 조건문

## 조건문 문법

1. `if` 문은 반드시 일정한 참/거짓을 판단할 수 있는 `조건식`과 함께 사용이 되어야한다.
  `if <조건식>:`

2-1. `<조건식>`이 참인 경우 `:` 이후의 문장을 수행한다.

2-2. `<조건식>`이 거짓인 경우 `else:` 이후의 문장을 수행한다.

* 이때 반드시 **들여쓰기를** 유의해야한다. 
  파이썬에서는 코드 블록을 자바나 C언어의 `{}`와 달리 `들여쓰기`로 판단하기 때문이다.
* 앞으로 우리는 `PEP-8`에서 권장하는 `4spaces`를 사용할 것이다.



### 실습문제1 - 조건문 기초 활용


> **조건문을 통해 변수 num의 값과 홀수/짝수 여부를 출력하세요.**

---

```
예시 출력)
3
홀수입니다.
```



```python
# 실습!
import random
num = 3

if num % 2 == 0:
    print(f'{num} 은 짝수 입니다.')
else:
    print(f'{num} 은 홀수 입니다.')
```

```
3 은 홀수 입니다.
```



## 복수 조건문

2개 이상의 조건문을 활용할 경우 `elif <조건식>:`을 활용한다.

### 실습문제2 - 조건식 2개 이상 활용하기

> 조건문을 통해 변수 score에 따른 평점을 출력하세요.

| 점수      | 등급 |
| --------- | ---- |
| 90점 이상 | A    |
| 80점 이상 | B    |
| 70점 이상 | C    |
| 60점 이상 | D    |
| 60점 미만 | F    |

---

```
예시 출력)
B
```



```python
# 실습!
score = int(input("점수를 입력하세요 : "))

# 아래에 코드를 작성하세요.
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

```
점수를 입력하세요 : 65
D
```



### 실습문제3 - 중첩 조건문 활용

> **위의 실습문제 2코드를 활용하여 
> 95점 이상이면, "참잘했어요"를 함께 출력해주세요**

---

```
예시 출력)
A
참잘했어요
```



```python
# 실습!
score = 96

if score >= 90:
    print("A")
    if score >= 95:
        print("참 잘했어요")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

```
A
참 잘했어요
```



## 조건 표현식(Conditional Expression)

**활용법**

```
true_value if <조건식> else false_value
```

와 같이 표현식을 작성할 수 있다. 이는 보통 다른 언어에서 활용되는 삼항연산자와 동일하다.



```python
a = int(input("숫자를 입력하세요 : "))
print('3맞음') if a == 3 else print('3아님')
```



* 표현식은 보통 조건에 따라 값을 정할 때 많이 활용된다.

```python
# 아래의 코드는 무엇을 위한 코드일까요?
num = int(input("숫자를 입력하세요 : "))
value = num if num >= 0 else 0
print(value)
```

```
숫자를 입력하세요 : -6
0
```



### 실습문제 4 - 조건표현식과 동일한 `if`문 작성하기

> 다음의 코드와 동일한 `if`문을 작성해보세요.

```python
num = -5
value = num if num >= 0 else 0
print(value)
```
---

```
예시 출력)
0
```



```python
# 여기에 코드를 작성하세요.
num = -5
if num >= 0:
    print(num)
else:
    print('0')
```

```
0
```



### 실습문제 5 - 조건표현식 만들어보기

> 다음의 코드와 동일한 조건 표현식을 작성해보세요.

```python
num = 2
if num % 2 == 1:
    result = '홀수입니다.'
else:
    result = '짝수입니다.'
print(result)
```
---
```
예시 출력)
짝수입니다.
```



```python
# 여기에 코드를 작성하세요.
result = '홀수입니다.' if num % 2 == 1 else '짝수입니다.'
print(result)
```

```
짝수입니다.
```



# 반복문

## `while` 문

`while`문은 조건식이 참(True)인 경우 반복적으로 코드를 실행합니다. 

**while 문은 종료조건을 반드시 설정해주어야 합니다.**



```python
# flowchart를 while문을 통해 코드로 작성해보세요.
a = 0
while a < 5:
    print(a)
    a += 1
print('끝')
```

```
0
1
2
3
4
끝
```

`while`문 역시 `<조건식>`이후에 `:`이 반드시 필요하며, 

이후 오는 코드 블록은 `4spaces`로 **들여쓰기**를 해주셔야 합니다.



## `for` 문

`for`문은 정해진 범위 내(시퀀스)에서 순차적으로 코드를 실행합니다.

```python
# flowchart를 for문을 통해 코드로 작성하면 다음과 같습니다.
for i in range(5):
    print(i)
print('끝')
```



```
for variable in sequence:
    code line1
    code line2
```

`for`문은 `sequence`를 순차적으로 **variable**에 값을 바인딩하며, 코드 블록을 시행합니다.



###  실습문제

> 반복문과 조건문만 활용하여 1~30까지 숫자 중에 홀수만 담긴 리스트를 만드세요.

list에서 값 추가는 `.append(value)`로 합니다.

---
```
예시 출력)
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
```



```python
# 여기에 코드를 작성하세요.
my_list = list(range(1,31))
odd_list = []
for i in my_list:
    if i % 2 == 1:
        odd_list.append(i)
        
print(odd_list)

# 타키쌤
"""
result = []

for i in range(0,31):
    if i % 2 == 1:
        result.append(i)

print(result)

"""
```

```
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
```



### index와 함께 `for`문 활용하기

`enumerate()`를 활용하면, 추가적인 변수를 활용할 수 있습니다.

```python
# enumerate()를 활용해서 출력해봅시다.
lunch = ['초밥', '치킨']
cnt = 1
for menu in lunch:
    print(cnt, menu)
    cnt +=1
```

```
1 초밥
2 치킨
```



```python
for idx, menu in enumerate(lunch, start = 1):
    print(idx,menu)
```

```
1 초밥
2 치킨
```



* `enumerate()`는 [파이썬 표준 라이브러리의 내장함수](https://docs.python.org/ko/3.6/library/functions.html) 중 하나이며, 다음과 같이 구성되어 있다.



```python
# enumerate() 함수를 사용하였을 때 어떻게 표현이 되는지 확인해봅시다.
enum_lunch = enumerate(lunch)
print(list(enum_lunch))
print(type(enum_lunch))
```

```
[(0, '초밥'), (1, '치킨')]
<class 'enumerate'>
```



```python
# 숫자를 1부터 카운트 할 수도 있습니다.
enum_lunch = enumerate(lunch, start = 1)
print(list(enum_lunch))
print(type(enum_lunch))
```

```
[(1, '초밥'), (2, '치킨')]
<class 'enumerate'>
```



### dictionary 반복문 활용하기

기본적으로 dictionary를 `for`문을 시행시키면 다음과 같이 시행됩니다.

```python
# 옆자리 친구의 이름을 활용하여 dictionary를 만들어봅시다.
lunch  = {'초밥':'맛남', '치킨':'오늘먹어야지'}
for key in lunch.keys():
    print(key)

print('---')

for value in lunch.values():
    print(value)

print('---')

for Key_and_Value in lunch.items():
    print(Key_and_Value)
```

```
초밥
치킨
---
맛남
오늘먹어야지
---
('초밥', '맛남')
('치킨', '오늘먹어야지')
```



dictionary의 `key`를 출력함으로써 `value`에도 접근할 수 있기 때문입니다.

따라서 dictionary의 value를 출력하기 위해서는 아래와 같이 작성합니다.

```python
# value를 출력해봅시다.
for value in lunch.values():
    print(value)
```

```
맛남
오늘먹어야지
```



* dictionary에서 `for` 활용하는 4가지 방법

```python
# 0. dictionary (key 반복)
for key in dict:
    print(key)

# 1. key 반복
for key in dict.keys():
    print(key)
    
# 2. value 반복    
for val in dict.values():
    print(val)

# 3. key와 value 반복
for key, val in dict.items():
    print(key, val)
```



### 실습문제 

> 한번 직접 4가지 반복문을 활용해보고 출력되는 결과를 확인해보세요.

```
classroom = {"teacher": "Kim", "student1": "Hong", "student2": "Kang"}
```



```python
# 여기에 코드를 작성하세요.
classroom = {"teacher": "Kim", "student1": "Hong", "student2": "Kang"}

for key in classroom.keys():
    print(key)

print('---')

for value in classroom.values():
    print(value)

print('---')

for Key_and_Value in classroom.items():
    print(Key_and_Value)
```

```
teacher
student1
student2
---
Kim
Hong
Kang
---
('teacher', 'Kim')
('student1', 'Hong')
('student2', 'Kang')
```



## `break`, `continue`, `else`

### `break`

`break`문은 반복문을 종료하는 표현입니다. 

```python
# break 문을 활용해봅시다.
cnt = 0
while True:
    print(cnt)
    if cnt == 2:
        break
    cnt += 1
```

```
0
1
2
```



#### 실습문제

> 조건문과 반복문, break, continue 를 통해서 아래의 코드와 동일한 코드를 작성하세요.
>
> (3이 있을 경우 True를 print하고, 아닐 경우 False를 print 합니다.)


```python
numbers = [1, 5, 10]
print(3 in numbers)
```

---
```
예시 출력)
False
```



```python
numbers = [1, 5, 10]
# 여기에 코드를 작성하세요.

for i in numbers:
    if i == 3:
        print("True")
        break
else:
    print("False")
```

```
False
```



### `continue` 

`continue`문은 continue 이후의 코드를 수행하지 않고 다음 요소를 선택해 반복을 계속 수행합니다.

```python
# continue를 통해 
for i in range(10):
    if i % 2 :
        continue
    print(i)
```

```
0
2
4
6
8
```



### `else`

`else`문은 끝까지 반복문을 시행한 이후에 실행됩니다.

(`break`를 통해 중간에 종료되지 않은 경우만 실행)

```python
# break가 안되는 상황을 만들어봅시다.

for i in range(10):
    if i == 10:
        print('break됨')
        break
else:
    print('break 안됨')
```

```
break 안됨
```



```python
# break가 되는 상황을 만들어봅시다.

for i in range(10):
    if i == 0:
        print('break 됨')
        break
else:
    print('break 안됨')
```

```
break 됨
```
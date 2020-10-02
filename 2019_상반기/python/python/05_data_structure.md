# 1 문자열 메소드 활용하기

## 1.1 변형 

```
 문자열은 메소드 사용 이외에는 변형불가_변형된 값은 리턴으로 받아야함
```



### 1.1.1 `.capitalize()`, `title()`, `.upper()`

`.capitalize()` : 앞글자를 대문자로 만들어 반환합니다.

`.title()` : 어포스트로피나 공백을 이후를 대문자로 만들어 반환합니다.

`.upper()` : 모두 대문자로 만들어 반환합니다.

```python
a = "hi! Everyone, i'm kim"
a.capitalize() -> "Hi! everyone, i'm kim"
a.title() -> "Hi! Everyone, I'M Kim"
a.upper() -> "HI! EVERYONE, I'M KIM"
```



### 1.1.2 `lower()`, `swapcase()`

`lower()` : 모두 소문자로 만들어 반환합니다.

`swapcase()` : 대<->소문자로 변경하여 반환합니다.

```python
a.lower() -> "hi! everyone, i'm kim"
a.swapcase() -> "HI! eVERYONE, I'M KIM"
```



### 1.1.3`.join(iterable)`

특정한 문자열로 만들어 반환합니다.

```python
'!'.join(a) #index로 접근할수 있는 것들의 사이사이마다 !표로 구분지어줌
->"h!i!!! !E!v!e!r!y!o!n!e!,! !i!'!m! !k!i!m"

' '.join(['hi', 'everyone'])
->'hi everyone'

a = [1, 2, 3,]
''.join(map(str, a)) # map은 함수(str)이 각각 적용이되어 (list a 원소에 각각적용) ''안에 저장
->'123'
```



### 1.1.4`.replace(old, new[, count])`

바꿀 대상 글자를 새로운 글자로 바꿔서 반환합니다. 

count를 지정하면 해당 갯수만큼만 시행합니다.

```python
'wow!'.replace('o','_')
->'w_w!'

'wooooooooooow!'.replace('o','_')
-> 'w___________w!'

'wooooooooooow!'.replace('o','_', 2)
#갯수만큼 변환 ([]안의 내용 : 써도되고 안써도 되는 값임)
->'w__ooooooooow!'
```



### 1.1.5 글씨 제거 (`strip([chars])`)

특정한 문자들을 지정하면,  양쪽을 제거하거나 왼쪽을 제거하거나(lstrip) 오른쪽을 제거합니다(rstrip)

지정하지 않으면 공백을 제거합니다.

```python
'                        wow!'.strip()
->'wow!'

'             wow!            '.strip()
->'wow!'

'             wow!            '.lstrip()
->'wow!            '

'             wow!            '.rstrip()
->'             wow!'

'wow!\n'.strip() #개행문자도 잘라냄
->'wow!'

'hihihihihihihi'.strip('hi')
->''

'a_a_a_a'.strip('a') #양끝을 잘라냄
->'_a_a_'


```



## 탐색 및 검증

### 1.2.1 `.find(x)` : x의 첫 번째 위치를 반환합니다. 없으면, -1을 반환합니다.

```python
'apple'.find('a')
->0

'apple'.find('p') #첫번째 위치만 반환
->1

'apple'.find('f') #찾는것이 없으면 -1 반환
->-1
```



### 1.2.2 `.index(x)` : x의 첫번째 위치를 반환합니다. 없으면, 오류가 뜹니다.

```python
'apple'.index('p')
->1

'apple'.index('f') #index는 없으면 에러 발생
->---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-47-b600230510c3> in <module>
----> 1 'apple'.index('f') #index는 없으면 에러 발생

ValueError: substring not found
    
'apple'.count('p')
->2
```



### 1.2.3 다양한 확인 메소드 : 참/거짓 반환
```
.isaplha(), .isdecimal(), .isdigit(), .isnumeric(), .isspace(), .issuper(), .istitle(), .islower()
```

```python
'adf2fd'.isalpha()
->False

'123'.isdecimal()
->True

a = '12'
if a.isdecimal():
    a = int(a)
    print(type(a))
else:
    print('정수로 변환할 수 없습니다.')
-><class 'int'>
```



## 1.3 `split()`

문자열을 특정한 단위로 나누어 리스트로 반환합니다.

```python
'a_b_c'.split('_')
->['a', 'b', 'c']

inputs = input().split()
print(inputs)
->1 2 5 3 5
['1', '2', '5', '3', '5']

inputs = list(map(int, input().split()))
print(inputs)
->1 1 1 1 1
[1, 1, 1, 1, 1]
```



## 1.4 문자열 뒤집기

```python
123'[::-1]
->'321'

''.join(reversed('123'))
->'321'
```



# 2 리스트 메소드 활용하기 _ list는 메소드 사용시 현재 메소드 자체가 변경됨

## 2.1 값 추가 및 삭제

### 2.1.1 `.append(x)`

리스트에 값을 추가할 수 있습니다.

```python
cafe = ['tomtoms']

cafe.append('다방')
->['tomtoms', '다방']

cafe.append(['a','b'])
->['tomtoms', '다방', ['a', 'b']]
```



### 2.1.2 `.extend(iterable)`

리스트에 iterable(list, range, tuple, string*유의*) 값을 붙일 수가 있습니다.

```python
cafe.extend(['ediya', '빽다방'])
->['tomtoms', '다방', ['a', 'b'], 'ediya', '빽다방']

cafe.extend('ediya')
->['tomtoms', '다방', ['a', 'b'], 'ediya', '빽다방', 'e', 'd', 'i', 'y', 'a']
```



### 2.1.3 `insert(i, x)`

정해진 위치 `i`에 값을 추가합니다.

```python
fruits  = ['apple', 'banana']

fruits.insert(0, 'pineapple')
->['pineapple', 'apple', 'banana']

fruits = ['melon'] + fruits
->['melon', 'pineapple', 'apple', 'banana']
```



### 2.1.4 `remove(x)`

리스트에서 값이 x인 것을 삭제합니다.

```python
fruits  = ['melon', 'pineapple', 'apple', 'banana']

fruits.remove('apple')
->['melon', 'pineapple', 'banana']
```



### 2.1.5 `.pop(i)`

정해진 위치 `i`에 있는 값을 삭제하며, 그 항목을 반환합니다.

`i`가 지정되지 않으면 마지막 항목을 삭제하고 되돌려줍니다.

```python
print(fruits)
fruits.pop() #remove는 삭제, pop은 삭제된 값이 반환됨 (지운 값을 보여줌)
->['melon', 'pineapple', 'banana']

fruits.append('melon')
fruits.append('banana')
print(fruits)
->['melon', 'pineapple', 'banana', 'melon', 'banana']

fruits.pop(2)
->'melon'

fruits.pop(0)
->'melon'
```



## 2.2 탐색 및 정렬

### 2.2.1 `.index(x)`

원하는 값을 찾아 index 값을 반환합니다.

```python
a = [1, 2, 5, 3, 4, 5]
a.index(5) # 첫번째로 만나는 값의 위치를 반환
->2
```

### 2.2.2 `.count(x)`

원하는 값의 갯수를 확인할 수 있습니다.

```python
a = [1, 2, 3, 4, 5, 6, 1]
a.count(1)
->2
```



### 2.2.3 `.sort()`

정렬을 합니다. 

sorted()와는 다르게 원본 list를 변형시키고, None을 리턴합니다.

```python
print(a)
a.sort()
print(a)
->[1, 2, 3, 4, 5, 6, 1]
[1, 1, 2, 3, 4, 5, 6]
```

```python
a.sort(reverse=True)
print(a)
->[6, 5, 4, 3, 2, 1, 1]
```



### 2.2.4 `reverse()`

반대로 뒤집습니다. (정렬 아님)

```python
a = [2, 1, 5]
list(reversed(a)) #뒤집기만 함
->[5, 1, 2]
```



## 2.3 복사

```python
# 리스트 복사를 해봅시다.
a = [1, 2, 3]
b = a

# b의 값을 바꾸고 a를 출력해봅시다.
b[0] = 5
print(a)
->[5, 2, 3]

# 실제로 같은지 확인해봅시다.
print(b)
print(id(a))
print(id(b)) #같은 메모리가 할당되어 있다.
->[5, 2, 3]
2006468485192
2006468485192

# 숫자를 확인해봅시다.
a = 10005
b = a
b = 1003
print(a)
->10005

a = 10005
print(id(a))
a = 1238123154654
print(id(a)) #python에서 인수 저장에서는 새로운 메모리 공간을 할당해서 저장함.
->2006468534640
2006468534448
```

* 파이썬에서 모든 변수는 객체의 주소를 가지고 있을 뿐입니다. 

```
num = [1, 2, 3]
```

* 위와 같이 변수를 생성하면 hong이라는 객체를 생성하고, 변수에는 객체의 주소가 저장됩니다.


* 변경가능한(mutable) 자료형과 변경불가능한(immutable) 자료형은 서로 다르게 동작합니다.

따라서, 복사를 하고 싶을 때에는 다음과 같이 해야한다.



```python
[1, 2, 3][:]
->[1, 2, 3]

# 복사 예시
a = [1, 2, 3]
b = a[:]
b[0] = 5
print(a)
->[1, 2, 3]

# 복사 예시2
a = [1, 2, 3]
b = list(a)
b[0] = 5
print(a)
->[1, 2, 3]

# 얕은 복사 예시, 얕은복사는 원본이 바뀌지 않음.
import copy
a = [1, 2, 3]
b = copy.copy(a)
b[0] = 5
print(a)
->[1, 2, 3]

a = [[1, 2], 2, 3]
b = a
b[0][0] = 5
print(a)
print(id(a))
print(id(b)) # 얕은복사이기 때문에 a와 b의 주소가 같음
->[[5, 2], 2, 3]
2006466477192
2006466477192


```



* 만일 중첩된 상황에서 복사를 하고 싶다면, 깊은 복사(deep copy)를 해야합니다. 
* 즉, 내부에 있는 모든 객체까지 새롭게 값이 변경됩니다.

```python
# 깊은 복사 예시
import copy
a = [[1,2], 2, 3]
b = copy.deepcopy(a)
b[0][0] = 5
print(a)
print(id(a[0]))
print(id(b[0])) # deepcopy는 a와 b의 주소가 다름. 따로 b가 deepcopy로 인해 따로 저장되었음
->[[1, 2], 2, 3]
2006468564680
2006468527944
```



## 2.4 삭제 `clear()`

리스트의 모든 항목을 삭제합니다.

```python
a = [1, 2, 3]
a.clear()
print(a)
->[]

a = [1, 2, 3]
del a[1]
print(a)
->[1, 3]
```



# List Comprehension

List를 만들 수 있는 간단한 방법이 있습니다.

## 3.1 사전 준비

> 다음의 리스트를 만들어보세요. 

1. 1~10까지의 숫자 중 짝수만 담긴 리스트 `even_list`
2. 1~10까지의 숫자로 만든 세제곱 담긴 리스트 `cubic_list`

```python
even_list = []
cubic_list = []
for i in range(1, 11):
    if i % 2 == 0:
        even_list.append(i)
    #축약형 even_list = [x*2 for x in range(1,6)], range의 숫자에 2를 곱함 -> 반복 -> 리스트를 만듬
    
    cubic_list.append(i**3)
    #cubic_list = [x**3 for x in range(1,11)]
```

```python
even_list2 = [x for x in range(1,11) if x % 2 == 0] # if문 축약형
```

```python
print(even_list)
print(cubic_list)
print(even_list2)
```

```
#결과
[2, 4, 6, 8, 10]
[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
[2, 4, 6, 8, 10]
```



## 3.2 활용법

여러개의 `for` 혹은 `if`문을 중첩적으로 사용 가능합니다.

## 연습 문제

### 짝짓기 - 곱집합

> 주어진 두 list의 가능한 모든 조합을 담은 `pair` 리스트를 만들어주세요.

1. 반복문 활용
2. list comprehension 활용

---

## 연습 문제

### 짝짓기 - 곱집합

> 주어진 두 list의 가능한 모든 조합을 담은 `pair` 리스트를 만들어주세요.

1. 반복문 활용
2. list comprehension 활용

---

## 연습 문제

### 짝짓기 - 곱집합

> 주어진 두 list의 가능한 모든 조합을 담은 `pair` 리스트를 만들어주세요.

1. 반복문 활용
2. list comprehension 활용

---

## 연습 문제

### 짝짓기 - 곱집합

> 주어진 두 list의 가능한 모든 조합을 담은 `pair` 리스트를 만들어주세요.

1. 반복문 활용
2. list comprehension 활용

---

## 연습 문제

### 짝짓기 - 곱집합

> 주어진 두 list의 가능한 모든 조합을 담은 `pair` 리스트를 만들어주세요.

1. 반복문 활용
2. list comprehension 활용

```python
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']

예시 출력)
    
[('justin', 'jane'), ('justin', 'iu'), ('justin', 'mary'), ('david', 'jane'), ('david', 'iu'), ('david', 'mary'), ('kim', 'jane'), ('kim', 'iu'), ('kim', 'mary')]
```

```python
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']
```

```python
pair = []
for girl in girls:
    for boy in boys:
        pair.append((boy, girl))
print(pair)
```

```
#결과
[('justin', 'jane'), ('david', 'jane'), ('kim', 'jane'), ('justin', 'iu'), ('david', 'iu'), ('kim', 'iu'), ('justin', 'mary'), ('david', 'mary'), ('kim', 'mary')]
```

```python
pair2 = [(x, y) for x in boys for y in girls]
print(pair2)
```

```
#결과
[('justin', 'jane'), ('justin', 'iu'), ('justin', 'mary'), ('david', 'jane'), ('david', 'iu'), ('david', 'mary'), ('kim', 'jane'), ('kim', 'iu'), ('kim', 'mary')]
```



### 3.3.2 피타고라스 정리

> 주어진 조건(x < y < z < 50) 내에서 피타고라스 방정식의 해를 찾아보세요.

1. 반복문 활용

2. list comprehension 활용

```
예시 출력)
[(3, 4, 5), (5, 12, 13), (6, 8, 10), (7, 24, 25), (8, 15, 17), (9, 12, 15), (9, 40, 41), (10, 24, 26), (12, 16, 20), (12, 35, 37), (15, 20, 25), (15, 36, 39), (16, 30, 34), (18, 24, 30), (20, 21, 29), (21, 28, 35), (24, 32, 40), (27, 36, 45)]
```

```python
lists = [ (x,y,z) for x in range(1,50) for y in range(x+1,50) for z in range(y+1,50) if x**2 + y**2 == z**2  ]
print(lists)
```

```
#결과
[(3, 4, 5), (5, 12, 13), (6, 8, 10), (7, 24, 25), (8, 15, 17), (9, 12, 15), (9, 40, 41), (10, 24, 26), (12, 16, 20), (12, 35, 37), (15, 20, 25), (15, 36, 39), (16, 30, 34), (18, 24, 30), (20, 21, 29), (21, 28, 35), (24, 32, 40), (27, 36, 45)]
```

```python
lists2 = [ (x,y,z) for x in range(1,50) for y in range(1,50) for z in range(1,50) if x**2 + y**2 == z**2 and x<y<z  ]
print(lists2)
```

```
#결과
[(3, 4, 5), (5, 12, 13), (6, 8, 10), (7, 24, 25), (8, 15, 17), (9, 12, 15), (9, 40, 41), (10, 24, 26), (12, 16, 20), (12, 35, 37), (15, 20, 25), (15, 36, 39), (16, 30, 34), (18, 24, 30), (20, 21, 29), (21, 28, 35), (24, 32, 40), (27, 36, 45)]
```



### 3.3.3 모음 제거하기

> 다음의 문장에서 모음(a, e, i, o, u)를 모두 제거하시오.

1. list comprehension만 사용해보세요.

``` 
    words = 'Life is too short, you need python!'

    예시출력)
    Lf s t shrt, y nd pythn!
```

```python
words = 'Life is too short, you need python!'
words = [x for x in words if not x in ('a', 'e', 'i','o','u')]
print(''.join(words)) # 리스트에 특정 구분자를 추가하여 문자열로 반환함
->Lf s t shrt, y nd pythn!
```
# 05_02_dictionary_data_structure

# 딕셔너리 메소드 활용



## 추가 및 삭제

### `.pop(key[, default])`

key가 딕셔너리에 있으면 제거하고 그 값을 돌려줍니다. 그렇지 않으면 default를 반환합니다.

default가 없는 상태에서 딕셔너리에 없으면 KeyError가 발생합니다.

```python
my_dict = {'apple':'사과', 'banana':'바나나'}
my_dict.pop('apple')
```

```
'사과'
```



```python
my_dict.pop('melone')
```

```python
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-21-4b495226cfd8> in <module>
----> 1 my_dict.pop('melone')

KeyError: 'melone'
```



```python
my_dict.pop('melon', 0) #Error발생 예외처리
```

```
0
```



### `.update()`

값을 제공하는 key, value로 덮어씁니다. 

```python
my_dict.update(melone = '멜론')
print(my_dict)
```

```
{'banana': '바나나', 'melone': '멜론'}
```



```python
my_dict.update({'pineapple':'파인애플'})
print(my_dict)
```

```
{'banana': '바나나', 'melone': '멜론', 'pineapple': '파인애플'}
```



### `.get(key[, default])`

key를 통해 value를 가져옵니다. 

절대로 KeyError가 발생하지 않습니다. default는 기본적으로 None입니다.

```python
my_dict.get('pineapple')
```

```
'파인애플'
```



```python
my_dict['pineapple']
```

```
'파인애플'
```



```python
#get은 값이 없어도, 에러가 발생되지 않는다. 기본적으로 None이 리턴된다.
my_dict.get('grape')
```



```python
#KeyError 발생
my_dict['grape']
```

```python
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-31-67309e466cd3> in <module>
      1 #KeyError 발생
----> 2 my_dict['grape']

KeyError: 'grape'
```



```python
my_dict.get('grape','')
```

```
''
```



## dictionary comprehension

dictionary도 comprehension을 활용하여 만들 수 있습니다. 

```python
# 숫자와 세제곱의 결과로 이뤄진 딕셔너리를 만들어봅시다.
cubic = {x: x**3 for x in range(1, 10)} #{ 키 : 벨류 조건}
print(cubic)
```

```
{1: 1, 2: 8, 3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729}
```



```python
# 다음의 딕셔너리에서 미세먼지 농도가 80 초과 지역만 뽑아 봅시다.
# 예) {'경기': 82, '부산': 90}
dusts = {'서울': 72, '경기': 82, '대전': 29, '중국': 200}
dust = { x: dusts[x] for x in dusts if dusts[x] > 80}
dust_tk = { key : value for key, value in dusts.items()}
print(dust)
print(dust_tk)
```

```
{'경기': 82, '중국': 200}
{'서울': 72, '경기': 82, '대전': 29, '중국': 200}
```



```python
# 다음의 딕셔너리에서 미세먼지 농도가 80초과는 나쁨 80이하는 보통으로 하는 value를 가지도록 바꿔봅시다.
# 예) {'서울': '나쁨', '경기': '보통', '대전': '나쁨', '부산': '보통'}
dusts = {'서울': 72, '경기': 82, '대전': 29, '중국': 200}
dust_s = { x : '나쁨' if dusts[x] > 80 else '보통' for x in dusts  }
dust_s_tk = {key : '나쁨' if value > 80 else '보통' for key, value in dusts.items()}
print(dust_s)
print(dust_s_tk)
```

```
{'서울': '보통', '경기': '나쁨', '대전': '보통', '중국': '나쁨'}
{'서울': '보통', '경기': '나쁨', '대전': '보통', '중국': '나쁨'}
```



## 정리! `map()`, `zip()`, `filter()`

### `map(function, iterable)`

* Iterable의 모든 원소에 function을 적용한 후 그 결과를 돌려줍니다. 
* 대표적으로 iterable한 타입 - list, dict, set, str, bytes, tuple, range
* return은 map_object 형태로 됩니다.

```python
a = [1, 2, 3]
# map을 활용하여 위의 코드를 문자열 '123'으로 만들어봅시다.
''.join(map(str,a))
```

```
'123'
```



```python
# map이 아닌 list comprehension을 사용할 수도 있습니다.
result = [str(x) for x in a]
''.join(result)
```

```
'123'
```



```python
a = ['1', '2', '3']
# map을 활용하여 위의 코드를 [1, 2, 3]으로 만들어봅시다.
a = list(map(int,a))
print(a)
```

```python
[1, 2, 3]
```



```python
# map이 아닌 list comprehension을 사용할 수도 있습니다.
result = [int(n) for n in a]
print(result)
```

```
[1, 2, 3]
```



* function은 사용자 정의 함수도 가능합니다!

```python
# 세제곱의 결과를 나타내는 함수를 만들어봅시다.
def cube(n):
    return n**3
```



```python
# map을 활용해봅시다.
a = [1, 2, 3]
list(map(cube, a))
```

```
[1, 8, 27]
```



```python
[cube(x) for x in a]
```

```
[1, 8, 27]
```



```python
[x**3 for x in a]
```

```
[1, 8, 27]
```



### `zip(*iterables)` 

* 복수 iterable한 것들을 모아준다.
* 결과는 튜플의 모음으로 구성된 zip object를 반환한다.

```python
# 예시를 봅시다.
girls = ['jane', 'iu', 'mary']
boys = ['justin', 'david', 'kim']
list(zip(girls, boys))
```

```
[('jane', 'justin'), ('iu', 'david'), ('mary', 'kim')]
```



```python
# for문으로 한 명씩 순서대로 매칭시켜봅시다.
# 예) {'jane': 'justin', 'iu': 'david', 'mary': 'kim'}
result = {}
for x, y in zip(girls, boys):
    result[x] = y
print(result)
```

```
{'jane': 'justin', 'iu': 'david', 'mary': 'kim'}
```



```python
result = { key : value for key, value in zip(girls, boys)}
print(result)
```

```
{'jane': 'justin', 'iu': 'david', 'mary': 'kim'}
```



* 그리고 아래와 같이 반복문에서도 사용가능하다.

```python
a = '123'
b = '567'
for num1, num2 in zip(a,b):
    print(num1, num2)
```

```
1 5
2 6
3 7
```



* zip은 반드시 길이가 같을 때 사용해야한다. 가장 짧은 것을 기준으로 구성한다.

```python
a = [1, 2, 3]
b = ['1', '2']
list(zip(a, b))
```

```
[(1, '1'), (2, '2')]
```



* 물론 길이가 긴 것을 맞춰서 할 수도 있지만, 기억 저 멀리 넣어놓자.

```python
from itertools import zip_longest
list(zip_longest(a,b, fillvalue = 0))
```

```
[(1, '1'), (2, '2'), (3, 0)]
```



### `filter(function, iterable)`

* iterable에서 function의 반환된 결과가 참인 것들만 구성하여 반환한다.

```python
# 짝수인지 판단하는 함수를 작성해봅시다.
def even(n):
    if n % 2 == 0:
        return True
    else:
        return False
```



```python
# filter를 활용해봅시다.
a = [1, 2, 3]
list(filter(even, a))
```

```
[2]
```



```python
# 다음의 list comprehension과 동일하다.
[x for x in a if x % 2 == 0 ]
```

```
[2]
```



```python
# 다음의 list comprehension과 동일하다.
[x for x in a if even(x) ]
```

```
[2]
```



## 세트 메소드 활용

## 추가 및 삭제



### `.add(elem)`
elem을 세트에 추가합니다. 

```python
a = {1, 2, 3, 4, 4}
a.add(5)
a.add(1)
print(a)
```

```
{1, 2, 3, 4, 5}
```



### `update(*others)`

여러가지의 값을 순차적으로 추가합니다.

여기서 반드시 iterable한 값을 넣어야합니다.

```python
a = {1, 2, 3}
a.update({5, 6, 1})
print(a)
```

```
{1, 2, 3, 5, 6}
```



### `.remove(elem)`

elem을 세트에서 삭제하고, 없으면 KeyError가 발생합니다. 

```python
# 에러를 확인해봅시다.
a.remove(10)
```

```python
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-133-ac1f7360a809> in <module>
      1 # 에러를 확인해봅시다.
----> 2 a.remove(10)

KeyError: 10
```



```python
a.remove(1)
print(a)
```

```
{2, 3, 5, 6}
```



### `discard(elem)`
x를 세트에서 삭제하고 없어도 에러가 발생하지 않습니다.

```python
a.remove(1)
```

```python
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-135-23b4d84ce1c4> in <module>
----> 1 a.remove(1)

KeyError: 1
```



```python
a.discard(1)
print(a)
```

```
{2, 3, 5, 6}
```



### `pop()`

임의의 원소를 제거해 반환합니다.

```python
a.pop()
print(a)
```

```
{3, 5, 6}
```


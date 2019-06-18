# P03_01_function

## `abs(x)`

> 절대값은 숫자(int, float)가 들어오면 절대값을 반환하고, 복소수(complex)가 들어오면 그 크기를 반환합니다.
>
> `my_abs(x)`를 만들어보세요.

**복소수 크기 구하는법**

```python
# 아래에 코드를 작성해주세요.
def my_abs(a):
    int_list = []
    if type(a) == float:
        a = str(a)
        if '-' in a:
            a = a.replace('-','')
            a = float(a)
            return a
        
        else:
            a = float(a)
            return a
    
    if type(a) == int:
        a = str(a)
        if '-' in a:
            a = a.replace('-','')
            a = int(a)
            return a
        else:
            a = int(a)
            return a
            
    if type(a) == complex:
        a = str(a)
        for i in a:
            if i.isdecimal():
                int_list.append(i)
                    
        if '+' in a:
            real, comple = map(int, int_list)
        elif '-' in a:
            real, comple = map(int, int_list)
        return (real**2 + comple**2)**0.5
```

```python
# 해당 코드를 통해 5.0 0.0 5가 나오는지 확인하세요.
print(my_abs(3+4j), my_abs(-0.0), my_abs(-5))
```

```
57.8013840664737
```



```python
# 2번째 코드
def my_abs2(a): #25
    a = str(a)
    lists = []
    cnt = 0
    memory = ''
    result = {}
    check = str(list(range(1,10)))
    
    f_result = 0
    
    for word in a:
        lists.extend(word)
    
    for i in lists:
        
        if i in check:
            memory += i
            
        else:
            result[cnt] = memory
            cnt += 1
            memory = ''
    
    for k in result.values():
        if k:
            k = int(k)
            f_result += k**2
        else:
            continue

    return (f_result)**0.5
```

```python
print(my_abs2(-35-46j)) # real 에 음수 처리 안됨.
```

```
57.8013840664737
```



## `all(x)`

> all은 인자로 받는 iterable(range, list)의 모든 요소가 참이거나 비어있으면 True를 반환합니다.
>
> 이와 같은 my_all(x)을 작성해보세요

```python
# 예제 입력 및 출력
print(all([1, 2, 5, '6']))
print(all([[], 2, 5, '6']))
print(all([]))
```

```
True
False
True
```



```python
# 아래에 코드를 작성해주세요.
def my_all(x):
    if bool(x) == False:
        return False
    else:
        for mem in x:
            if bool(mem) == False:
                return False
        else:
            return True
```

```python
# 해당 코드를 통해 True False가 나오는지 확인하세요.
print(my_all([1, 2, 5, '6']))
print(my_all([[], 2, 5, '6']))
print(my_all([]))
```

```
True
False
False
```



```python
#타키쌤
def tk_all(x):
    for element in x:
        if bool(element) == True:
            return True
    return False
```



## `any(x)`

> any는 인자로 받는 iterable(range, list)의 요소 중 하나라도 참이면 True를 반환하고, 비어있으면 False를 반환합니다.
>
> 이와 같은 my_any(x)를 작성해보세요.

```python
# 예제 입력 및 출력
print(any([1, 2, 5, '6']))
print(any([[], 2, 5, '6']))
print(any([0]))
```

```
True
True
False
```



```python
# 아래에 코드를 작성해주세요.
def my_any(x):
    cnt = 0
    for mem in x:
        if bool(mem) == True:
            cnt =+ 1
    if cnt == 0:
        return False
    else:
        return True
```

```python
# 해당 코드를 통해 True True False가 나오는지 확인하세요.
print(my_any([1, 2, 5, '6']))
print(my_any([[], 2, 5, '6']))
print(my_any([0]))
```

```
True
True
False
```



```python
# 코드2
def my_any2(x):
    for mem in x:
        if bool(mem):
            return True
    else:
        return False
```

```python
print(my_any2([1, 2, 5, '6']))
print(my_any2([[], 2, 5, '6']))
print(my_any2([0]))
```

```
True
True
False
```



```python
#타키쌤
def tk_any(x):
    for element in x:
        if bool(element) == True:
            return False
    return True
```

```python
print(tk_any([1, 2, 5, '6']))
print(tk_any([[], 2, 5, '6']))
print(tk_any([0]))
```

```
False
False
True
```



## `bin(x)` - 난이도 높음

> `양의 정수`를 받아서 앞에 '0b'를 붙어 있는 2진수로 표현됩니다.
>
> 이와 같은 `my_bin(x)`를 작성해보세요.

* 음수는 고려하지 않아도 됩니다.

```python
# bin 예제 입력 및 출력
print(bin(4096), bin(5))
```

```
0b1000000000000 0b101
```



```python
# 아래에 코드를 작성해주세요.
def my_bin(x):
    bbin = {}
    cnt = 0
    binary = []
    result = ''
    
    while True:
        cnt += 1
       
        if x % 2 == 0:
            bbin[cnt] = 0
            x = x/2

            if x == 1:
                cnt += 1
                bbin[cnt] = 1
                break
        
        elif x % 2 != 0:
            bbin[cnt] = 1
            x = x//2

            if x == 0:
                cnt += 1
                bbin[cnt] = 1
                break
    
    for b_bin in bbin.values():
        binary.append(b_bin)
    
    long = len(binary)+1
    long = -long
    
    for i in range(-1,long,-1):
        
        result += str(binary[i])
        
    result = '0b' + result
    
    return result
```

```python
# my_bin 예제 입력 및 출력
print(my_bin(4096) == bin(4096))
print(my_bin(5) == bin(5))
```

```
True
True
```



```python
# 타키쌤
def tk_bin(x):
    result = ''
    if x == 0:
        return '0b0'
    while x >= 1:
        q, r = divmod(x, 2)
        result = str(r) + result
        x //= 2
    return '0b' + result
```

```python
print(tk_bin(4096) == bin(4096))
print(tk_bin(5) == bin(5))
print(tk_bin(0) == bin(0))
```

```
True
True
True
```


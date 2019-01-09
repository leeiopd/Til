# P05_data_structure

## 메소드 없는 세상 <1>

> 알파벳으로 이뤄진 word를 입력받아 알파벳 대소문자를 서로 교환한 결과를 반환하는 `my_swapcase(word)`를 작성해주세요.

**`.upper()`, `.lower()`, `swapcase()`는 사용하지 말아주세요.**

**Tip! 문자와 숫자에는 특별한 관계가 있습니다. Google에서 아스키 코드를 참고하세요**



```python
# 아래에 코드를 작성해주세요.
# 65~90 대문자, 97~122까지 소문자, 대->소 +32, 소->대 -32
def my_swapcase(string):
    mem = ''
    for i in range(len(string)):
        if string[i] in mem:
            continue
            
        else:
            if string[i].isalpha():
                if ord(string[i]) <= 90 and ord(string[i]) >= 65 :
                    string = string.replace(string[i], chr(ord(string[i]) + 32))
                    mem += string[i]
                
                
                elif ord(string[i]) >= 97 and ord(string[i]) <= 122:
                    string = string.replace(string[i], chr(ord(string[i]) - 32))
                    mem += string[i]
                
    return string
```

```python
print(my_swapcase('hello, World!')) # HELLO, wORLD!
print(my_swapcase('@_@')) # @_@
print(my_swapcase('2^3은 8이다!')) #2^3은 8이다!
```

```
HELLO, wORLD!
@_@
2^3은 8이다!
```



```python
def my_swapcase2(string):
    result = ''
    for i in string:
        b = i
        if ord(i) <= 90 and ord(i) >= 65 :
            b = chr(ord(i) + 32)
        
        elif ord(i) >= 97 and ord(i) <= 122 :
            b = chr(ord(i) - 32)
            
        result += b
    return result
```



## 메소드 없는 세상 <2>

> 우리는 문자열을 만들어 나갈 때, `.join(iterable)` 함수를 사용합니다. 
>
> `.join(iterable)`이 생각나지 않을 때를 위해 직접 만들어보면서 감사함을 느껴봅시다.
>
> `my_join(target, word)`를 만들어 문자열을 반환해주세요.
>
> target은 바꿀 대상(iterable)이며, word는 합쳐지는 단어입니다. 

---

```
예시)
''.join(a) 와 my_join(a, '')은 같은 함수 호출입니다.

print(my_join('배고파', '.'))
print(my_join(['1', '2', '3'], ''))

배.고.파
123
```

```python
# 아래에 코드를 작성해주세요.
def my_join(target, word):
    cnt = 0
    result = ''
    while cnt < len(target):
        result += target[cnt]
        cnt += 1
        
        if cnt == len(target):
            break
        
        result += word
        
    return result
```

```python
print(my_join('배고파', '.'))
print(my_join(['1', '2', '3'], ''))
```

```
배.고.파
123
```



##  가능한 적게 변경하기

> 대문자와 소문자가 혼합되어 있는 문자열어 주어지며
>
> 다음의 기준에 따라서 문자열을 소문자 혹은 대문자로 변환하세요.


*  가능한 적게 변경하세요.
*  만약에 문자열의 대문자 혹은 소문자가 같다면, 문자열을 소문자로 변경하세요.

---

```
예시 입력) 
solve("coDe")
solve("CODe")
solve("coDE")

예시 출력)
"code"
"CODE"
"code"
```

```python
# 아래에 코드를 작성해주세요.
# 65~90 대문자, 97~122까지 소문자, 대->소 +32, 소->대 -32
def solve(string):
    result = ''
    string_list = list(string)
    cap_word = [ x for x in string if ord(x) <= 90]
    word = [ x for x in string if ord(x) >= 97]
    
    if len(cap_word) <= len(word):
        for i in range(len(string)):
            if ord(string[i]) <= 90:
                string_list[i] = string[i].lower()
    else:
        for i in range(len(string)):
            if ord(string[i]) >= 97:
                string_list[i] = string[i].upper()
    
    return print(''.join(map(str, string_list)))
```

```python
solve("coDe")
solve("CODe")
solve("coDE")
```

```
code
CODE
code
```



```python
# Workshop
# 전체 다 대문자 소문자로 변경 ( %%알파벳을 한번에 바꾸는 조건을 떠올리지 못함 )
def solve_ws1(word):
    cnt = 0
    for x in word:
        if x.isupper():
            cnt += 1
    if cnt > (len(word) / 2):
        return word.upper()
    else:
        return word.lower()
        
def solve_ws2(word):
    cnt = sum(1 for x in word if x.isupper())
    if cnt > (len(word) / 2):
        return word.upper()
    else:
        return word.lower() 
```



# 숨바꼭질

> 숫자가 주어지면, 사용되지 않은 숫자를 프린트하세요.

---

```
예시)
unused_digits(12, 34, 56, 78) 
"09"

unused_digits(2015, 8, 26) 
"3479"
```

**결과값은 정렬되어야 합니다.**

```python
# 아래에 코드를 작성해주세요.
def unused_digits(*args):
    num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    args = str(args)
    for n in args:
        if n in num:
            num.remove(n)
        else:
            continue
    return ''.join(map(str, num))
```

```python
print(unused_digits(12, 34, 56, 78))
print(unused_digits(2015, 8, 26))
```

```
09
3479
```



```python
# Workshop
def unused_digits_ws(*numbers):
    numbers = map(str, numbers)
    numberSet = set()
    sampleSet = set('0123456789') # sampleSet = ['0', '2', '3', '4', '5', '6', '7', '8', '9']
    for number in numbers:
        for n in number:
            numberSet.add(n)
    result = list(set(sampleSet) - set(numberSet))
    print(result)
    result = ''.join(sorted(result))
    return result
```



```python
# 타키쌤
# a = [1, 2, 3]
# a += 'hi' -> a = [1, 2, 3, 'h', 'i'] /// a.extend('hi') 와 같은 동작을 보임.
def unused_digits_tk(*numbers):
    result = set('0123456789')
    for x in numbers:
        result -= set(str(x)) # 차집합을 사용.
    return ''.join(sorted(result))
```



## 짝홀짝홀

> n개의 양의 정수 리스트가 주어지면, 홀수와 짝수를 분리하고 각각의 조건에 맞게 홀수와 짝수를 
> 정렬하세요.

> 조건
1. 짝수와 홀수가 번갈아 가면서 나오게 됩니다.
2. 짝수는 오름차순으로 홀수는 내림차순으로 되어야합니다.

> 인자 조건
1. 인자 리스트의 크기는 적어도 4이상입니다.
2. 인자 리스트의 요소값으로 0은 존재하지 않습니다.
3. 인자 리스트의 요소값이 반복될 수 있으나 출력할 때는 중복 값이 없습니다.

```
결과) 

even_and_odd([7, 3 , 14 , 17])
[14, 17, 7, 3]

even_and_odd([1, 3, 5, 7, 9, 11])
[11, 9, 7, 5, 3, 1]

print(even_and_odd([1, 2, 2, 4, 4, 6, 6, 2004, 9, 11]))
[2, 11, 4, 6, 2004]
```



```python
# 여기에 코드를 작성하세요
def even_and_odd(nums):
    result = []
    cnt = 0
    nums = set(nums)
  
    odd = [x for x in nums if x % 2]
    even = [x for x in nums if not x % 2]
    
    even.sort
    odd.sort(reverse = True)
    
    while True:
        
        if (len(even) + len(odd)) == len(result):
            break
    
        if len(even) > cnt :
            result.append(even[cnt])
            
        if len(odd) > cnt :
            result.append(odd[cnt])
        
        cnt += 1
        
    return result
```

```python
print(even_and_odd([7, 3, 14, 17]))
print(even_and_odd([1, 3, 5, 7, 9, 11]))
print(even_and_odd([1, 2, 2, 4, 4, 6, 6, 2004, 9, 11]))
```

```
[14, 17, 7, 3]
[11, 9, 7, 5, 3, 1]
[2, 11, 4, 9, 6, 1, 2004]
```



```python
# Workshop
def even_and_odd_ws(lists) :
    lists = sorted(list(set(lists)))
    even = []
    odd = []
    result = []

    for number in lists :
        if not number % 2 :
            even.append(number)
        else :
            odd.append(number)
    even = even[::-1]
    cnt = 0
    while True :
        if len(even) == 0 and len(odd) ==0 :
            break
        if len(even) :
            result.append(even.pop()) # pop()으로 뽑는 아이디어를 사용.
        if len(odd) :
            result.append(odd.pop())
    return result
```



```python
# 타키쌤
def even_and_odd_tk(numbers) :
    even = [i for i in sorted(set(numbers)) if not i % 2]
    odd = [i for i in sorted(set(numbers)) if i % 2][::-1]
    
    if len(even) > len(odd) :
        tmp = even[len(odd):]  # slicing 으로 길이를 같게 만들어줌
        even = even[:len(odd)] # slicing 나머지
    else:
        tmp = odd[len(even):]
        odd = odd[:len(even)]
    
    result = []
    
    for x, y in zip(eve, odd):
        result.append(x)
        result.append(y)
        
    return result + tmp
```



## 문자열 계산하기

> 아래와 같이 문자열이 주어졌을 때, 바보같은 사용자를 위해 계산을 해주려고 한다.
>
> 이 계산기는 더하기와 빼기밖에 못한다.
>
> `calc(equation)`을 만들어봅시다.

---

```
예시
calc('123+2-124')
1
calc('-12+12-7979+9191')
1212
calc('+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1')
0
```



```python
# 여기에 코드를 작성하세요
def calc(equation):
    num = ''
    pack = []
    
    for i in range(len(equation)):
        
        if i == 0:
            num += equation[i]

        elif equation[i] == '+' or equation[i] == '-':
            if equation[i] not in num:
                pack.append(int(num))
                num = equation[i]
            else:
                num += equation[i]
                pack.append(int(num))
                num = ''
        
        elif equation[i].isdecimal():
            num += equation[i]

    pack.append(int(num))

    return sum(pack)
```

```python
print(calc('123+2-124'))
print(calc('-12+12-7979+9191'))
print(calc('+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1+1-1'))
```

```
1
1212
0
```



```python
# Workshop
def calc_ws(equation):
    a=a.replace('+',' +') # slicing 아이디어가 돋보인다.
    a=a.replace('-',' -') # 숫자와 연산기호라는 규칙을 잘 찾아서 처리함.
    num=list(map(int,a.split()))
    return (sum(num))

print(calc('123+2-124'))
```



```python
# 타키쌤
def calc_tk(equation):
    tmp = ''
    result = 0
    
    for char in equation:
        
        if tmp and not char.isdecimal(): # 엣지케이스 해결을 if문의 조건을 추가함으로 해결.
            result = int(tmp)
            tmp = ''
        
        tmp =+ char
    return result + int(tmp)
```


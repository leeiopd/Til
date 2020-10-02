# 1  종합소득세 계산하기

> A라는 나라에서는 종합소득세는 과세표준 금액 구간에 따라 다른 세율이 적용됩니다.

| 과세표준액    | 세율 |
| ------------- | ---- |
| 1,200이하     | 6%   |
| 1,200 ~ 4,600 | 15%  |
| 4,600 ~       | 35%  |

즉, 1,300원을 벌었을 경우 `1,200\*0.06 + 100\*0.15`를 계산한 결과가 납부해야 하는 세액입니다.

함수 `tax(won)`을 만들고 납부해야하는 세금의 결과를 반환하는 함수를 만들어보세요.

------

```
예시)
tax(1200) #=> 72.0
tax(4600) #=> 582.0
tax(5000) #=> 722.0
```

```python
# 여기에 코드를 작성하세요.
def tax(won):
    if won > 4600:
        return (won-4600) * 0.35 + tax(4600)
    elif won > 1200:
        return (won-1200) * 0.15 + tax(1200)
    else:
        return won*0.06
```

```python
print(tax(1200))
print(tax(4600))
print(tax(5000))
```

```
#결과
72.0
582.0
722.0
```

------

# 2 카쉐어링 요금 계산하기

> 카쉐어링 서비스는 요금을 다음과 같이 계산합니다.
>
> 대여는 10분 단위로 가능합니다.
>
> 1. 대여 요금 : 10분당 1,200원
>
> 2. 보험료 : 30분당 525원 (50분을 빌리면, 1시간으로 계산됩니다.)
>
> 3. 주행 요금 : km당 170원 (주행 요금은 100km가 넘어가면, 넘어간 부분에 대하여 할인이 50% 적용됩니다.)
>
> 예) 160km를 달렸으면, 170\*100 + 85 \*60
>
> 양의 정수인 대여시간(분)과 주행거리를 받아 계산 결과를 반환하는 함수 `fee(minute, distance)`를 만들어보세요.
---
```
예시) 
    fee(600, 50) #=> 91000
    fee(600, 110) #=> 100350
```

```python
# 여기에 코드를 작성하세요.
def fee(minute, distance):
    t_minute = minute//10
    result = t_minute * 1200
    
    if (t_minute-5)//6 == 0:
        result += ((t_minute+1)//3)*525
    else:
        result += ((t_minute)//3)*525
    
    if distance > 100:
        result += 100*170 + (distance-100)/2*170
    else:
        result += distance*170
    
    return int(result)
```

```python
print(fee(600, 50))
print(fee(600, 110))
```

```
#결과
91000
100350
```



# 3 문자열 탐색

> 문자열 요소로만 이루어진 리스트를 넣었을 때, 문자열 길이가 2 이상이고 주어진 문자열의 첫번째와 마지막 문자가 같은 문자열의 수를 세는 함수 `start_end`를 작성하시오.

예시)

```python
start_end(['level', 'asdwe', 's', 'abceda', 'gsdwrtfg']) #=> 3
```

```python
# 여기에 코드를 작성하세요.
def start_end(lists):
    result = 0
    words = []
    
    for l in lists:
        if len(l) >= 2 and l[0] == l[len(l)-1]:
            result += 1
    
    return result
```

```python
# 해당 코드를 통해 3이 나오는지 확인하세요.
print(start_end(['level', 'asdwe', 's', 'abceda', 'gsdwrtfg']))
```

```python
# 타키쌤
def start_end_tk(lists):
    result = 0
    words = []
    
    for l in lists:
        if len(l) >= 2 and l[0] == l[-1]: #마지막꺼는 -1 사용하면 편함
            result += 1
    
    return result
```

```python
# 해당 코드를 통해 3이 나오는지 확인하세요.
print(start_end_tk(['level', 'asdwe', 's', 'abceda', 'gsdwrtfg']))
```

```
#결과
3
```



# 4 이상한 덧셈

> 숫자 구성된 리스트에서 양의 정수의 합을 구하는 함수 `positive_sum`을 작성하세요.

예시)

```python
positive_sum([1,-4,7,12]) #=> 20
positive_sum([-1, -2, -3, -4]) #=> 0
```

```python
# 여기에 코드를 작성하세요.
def positive_sum(lists):
    result = 0
    for num in lists:
        if num >= 0:
            result += num
    
    return result
```

```python
# 해당 코드를 통해 20과 0이 나오는지 확인하세요.
print(positive_sum([1,-4,7,12]))
print(positive_sum([-1, -2, -3, -4]))
```

```
#결과
20
0
```



# 5 Collatz

> 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
>
> 1. 입력된 수가 짝수라면 2로 나눕니다. 
> 2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
> 3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
>
> 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다.
>
> 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, collatz를 완성해 주세요.
>
> 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

예시)

```python
collatz(6) #=> 8
collatz(16) #=> 4
collatz(27) #=> 111
collatz(626331) #=> -1
```

```python
# 여기에 코드를 작성하세요.
def collatz(n, cnt = 0):
    if cnt == 500:
        return -1
   
    elif n == 1:
        return cnt
    
    elif n % 2 == 0:
        cnt += 1
        return collatz(n/2, cnt)
    
    else:
        cnt += 1
        return collatz(n*3 + 1, cnt)
```

```python
# 해당 코드를 통해 8, 4, 111, -1 이 나오는지 확인하세요.
print(collatz(6))
print(collatz(16))
print(collatz(27))
print(collatz(626331))
```

```
#결과
8
4
111
-1
```

```python
def collatz_kt(num):
    for i in range(500):
        if num % 2 == 0:   ## 조건표현식 : num = num.2 if num % 2
            num /= 2
        else:
            num = num * 3 + 1
        
        if num == 1:
            return i + 1
    return -1
```

```python
print(collatz_kt(6))
print(collatz_kt(16))
print(collatz_kt(27))
print(collatz_kt(626331))
```

```
#결과
8
4
111
-1
```



# 솔로 천국 만들기

> 리스트가 주어집니다. 리스트의 각 요소는 숫자 0부터 9까지로 이루어져 있습니다. 
>
> 이때, 리스트에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
>
> 리스트에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 반환하는 lonely 함수를 작성해 주세요.
>
> 단, 제거된 후 남은 수들을 반환할 때는 리스트의 요소들의 순서를 유지해야 합니다.  

예시)

```python
lonely([1, 1, 3, 3, 0, 1, 1]) #=> [1, 3, 0, 1]
lonely([4,4,4,3,3]) #=> [4,3]
```

```python
# 여기에 코드를 작성하세요.
def lonely(num):
    mem = []
    for i in range(len(num)):
       
        if i == 0:
            mem.append(num[i])
            
        elif num[i] != num[i-1]:
            mem.append(num[i])
            
    return mem
```

```python
# 해당 코드를 통해 [1, 3, 0, 1]과 [4, 3]이 나오는지 확인하세요.
print(lonely([1, 1, 3, 3, 0, 1, 1]))
print(lonely([4,4,4,3,3]))
```

```
#결과
[1, 3, 0, 1]
[4, 3]
```

```python
#지원이 코드
def lonely_jw(inputlists):
    i = len(inputlists)-1
    while(i):
        if (inputlists[i] == inputlists[i-1]):
            del inputlists[i]
            i -= 1
        else:
            i -= 1
    return inputlists
```

```python
print(lonely_jw([1, 1, 3, 3, 0, 1, 1]))
print(lonely_jw([4,4,4,3,3]))
```

```
#결과
[1, 3, 0, 1]
[4, 3]
```

```python
#타키쌤 코드
def lonely_tk(numbers):
    result = []
    for n in numbers:
        if not result or result[-1] != n :
            result.append(n)
    return result
```

```python
print(lonely_tk([1, 1, 3, 3, 0, 1, 1]))
print(lonely_tk([4,4,4,3,3]))
```

```
#결과
[1, 3, 0, 1]
[4, 3]
```


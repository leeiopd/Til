# P04_04_data_structure

## 불쌍한 달팽이 - 고전 수학문제

>달팽이는 낮 시간 동안에 기둥을 올라갑니다. 하지만 밤에는 잠을 자면서 어느 정도의 거리만큼미끄러집니다. (낮 시간 동안 올라간 거리보다는 적게 미끄러집니다) 달팽이가 기둥의 꼭대기에 도달하는 날까지 걸리는 시간을 계산하면 됩니다.

> 당신의 함수에 들어가야 하는 3개의 인자는 다음과 같습니다.
- 기둥의 높이(미터)
- 낮 시간 동안 달팽이가 올라가는 거리(미터)
- 달팽이가 야간에 잠을 자는 동안 미끄러지는 거리(미터)

```
snail(100, 5, 2)
33
```



```python
# 여기에 코드를 작성하세요
def snail (high, up, down, day=0):
    if high > 0:
        high = high - up +down
        return snail(high, up, down, day = day + 1)
    else:
        return day-1 # 33일까지 99미터 + 1미터는 에누리
```

```python
print(snail(100, 5, 2))
```

```
33
```



```python
#타키쌤
def snail_tk(height, day, night):
    count = 0
    while True:
        count += 1
        height -= day
        if height <= 0:
            return count
        height += night
    return count
```



## 무엇이 중복일까

> 다음 리스트에서 중복되는 요소만 뽑아서 새로운 리스트에 옮기시오. 

```
입력)
duplicated(['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n', 'b'])

출력)
['b', 'n']
```



```python
# 여기에 코드를 작성하시오.
def duplicated(lists):
    duple = {}
    result = []
    for i in lists:
        duple[i] = 0
        for k in lists:
            if i == k:
                duple[i] += 1
   
    for key, value in duple.items():
        if value > 1:
            result.append(key)
    return result
```

```python
duplicated(['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n', 'b'])
```

```
['b', 'n']
```



```python
# workshop code
def duplicated_wc(lists):
    result = set()
    return [x for x in lists if lists.count(x) > 1 and not (x in result or result.add(x))]
# x가 result에 없으면 result.add(x)를 실행한다.// 단축평가 사용.
```



```python
#타키쌤
def duplicated_tk(alphabets):
    result = []
    for char in alphabets:
        if alphabets.count(char) > 1 and char not in result:
            result.append(char)
    return result
```



## 알파벳만 남기고 뒤집기

>문자열이 주어지면, 해당 문자열 중에서 알파벳이 아닌 문자는 전부 빼고 거꾸로 뒤집어 반환하는 함수를 작성하세요.

```
예시) 
reverse_letter("krishan")
"nahsirk"

reverse_letter("ultr53o?n")
"nortlu"
```



```python
# 여기에 코드를 작성하세요
# A1
def reverse_letter(letter):   
    result = ''
    
    for i in letter:
        if i.isalpha() :
            result = result + i
   
    return ''.join(reversed(result))
            # ''.join(result) 후 , result[::-1]  도 사용 가능.
```

```python
print(reverse_letter("krishan"))
print(reverse_letter("ultr53o?n"))
```

```
nahsirk
nortlu
```



```python
# 타키쌤
def reverse_letter_tk(letter):  
    result = [item for item in letter if item.isalpha()]
    return ''.join(result)[::-1]
```



## 편-안한 단어

>(QWERTY 키보드를 사용하여 타이핑을 한다고 가정할 때) '편안한 단어'는 타이핑 할 때 손을
>번갈아 칠 수 있는 단어를 말합니다.단어를 인자로 받아 그것이 '편안한 단어'인지 여부를 True/False로 반환하는 함수를 만드세요.(모든 단어는 a ~ z까지 오름차순으로 구성된 문자열입니다.)

>문자 목록
- 왼손: q, w, e, r, t, a, s, s, d, f, g, z, x, c, v, b
- 오른손: y, u, i, o, p, h, j, k, l, n, m

```python
# 여기에 코드를 작성하세요.
def comfortable_word(word):
    left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
    right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
    hand = []    
    
    for i in word:
            if i in left:
                hand.append(0)
            elif i in right:
                hand.append(1)
    
    for n in hand:
        if (hand[n]+hand[n+1]) % 2 != 1:
            return False

    return True
```

```python
print(comfortable_word("qywu"))
print(comfortable_word("apple"))
```

```
True
False
```



```python
#타키쌤
def comfortable_word_tk(word):
    left = 'qwertasdfgzxcvb'
    right = 'yuiophjklnm'
    
    #왼쪽이 True, 오른쪽이 False
    if word[0] in left:
        flag = True
        print(word[0], flag)
    else:
        flag = False
        
    for char in word[1:]:
        if char in left and flag:
            print(char, flag)
            return False
            print(char, flag)
        elif char in right and flag:
            print(char, flag)
            return False
            print(char, flag)
        print(char, flag)
        flag = not flag
        print(char, flag)
    return True
```



## 숫자패턴

>원하는 행까지 아래의 패턴을 생성하는 함수를 작성하세요. 만약 인자가 0이나 음의 정수인 경우 "" 즉, 빈 문자열로 반환하세요.짝수가 인수로 전달되면 패턴은 통과된 짝수보다 작은 최대 홀수까지 계속되어야 합니다.

```
예시 
pattern(9):

1
333
55555
7777777
999999999

pattern(6)
1
333
55555

유의
패턴에 공백은 없습니다.
```



```python
# 여기에 코드를 작성하세요
def pattern(num):
    result = ''
    
    if num <= 0:
        return '빈 문자열로 반환하세요.'
    
    if num % 2 != 0:
        num += 1
    
    for i in range(1,num+1):
        if i % 2 != 0:
            result = result + f'{i}'*i + '\n'
    return result
```

```python
# 해당 코드를 통해 올바른 결과가 나오는지 확인하세요.
print(pattern(9))
print(pattern(6))
```

```
1
333
55555
7777777
999999999

1
333
55555
```



```python
# workshop
def pattern_ws(num):
    list = [f'{x}'*x for x in range(1,num+1) if x%2 == 1]
    return '\n'.join(list)
```



```python
#타키쌤
def pattern_tk(x):
    result = []
    for x in range(1, x+1):
        if x % 2 == 1:
            result.append(str(x)*x)
    return '\n'.join(result)
```



## 숫자가 좋아

> 스트링과 함께 섞여있는 문자열들 속에서 정수만 뽑아내 합을 반환하는 함수 `pick_and_sum`를 작성하세요.

예시)
```python
pick_and_sum("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") #=> 3635
```



```python
# 여기에 코드를 작성하세요.
def pick_and_sum(string):
    
    result = 0
    for i in string:
        if i.isalpha():
            string = string.replace(i,' ')
    
    string = string.split()

    
    for num in string:
        if bool(num) :
            num = int(num)
            result += num
#    result = sum(list(map(int, string)))

    return result
```

```python
# 해당 코드를 통해 올바른 결과가 나오는지 확인하세요.
print(pick_and_sum("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
```

```
3635
```



```python
#타키쌤
#정수를 뽑는 문제이기때문에 엣지케이스를 피해가기위해 정수를 뽑아내는것을 우선으로 생각한다.
def pick_and_sum_tk(word):
    for char in word:
        if not char.isdecimal():
            word = word.replace(char, ' ')
    
    result = map(int, word.split())
    
    return sum(result)
```
# P03_03_mysum

## 문자열 덧셈 하기 - 문자열 조작 및 반복/조건문 활용

**문제 풀기 전에 어떻게 풀어야할지 생각부터 해봅시다!**

> 사람은 덧셈을 할때 뒤에서부터 계산하고, 받아올림을 합니다.
>
> 문자열 2개를 받아 덧셈을 하여 숫자를 반환하는 함수 `my_sum(num1, num2)`을 만들어보세요.



**절대로 `return int(num1)+int(num2)` 이렇게 풀지 맙시다!!**

**재귀함수도 사용할 필요 없습니다.**

```python
# 여기에 코드를 작성하시오.
def my_sum(num1, num2):
    
    if not len(num1) == len(num2):

        if len(num1) < len(num2):
            num1, num2 = num2, num1 
       # len(num1) > len(num2) 자리수 기준 정렬, 항상 num1이 더 큰 수로 만들어주기
        
        for n in range(-len(num2)-1, -len(num1)-1, -1):
            num2 = '0' + num2
            # 자리수 '0'으로 맞추기
    
    result = ''
    mem = 0
            
    for n in range(-1, -len(num1)-1, -1):
        add = int(num2[n]) + int(num1[n]) + mem
        
        if add > 9:
            add = str(add)
            result = add[1] + result
            mem = 1
            
            if n == -len(num1) :
                result = '1' + result
           
        else:
            result = str(add) + result
                
    return result
```

```python
print(my_sum('3', '5'))
print(my_sum('123', '77'))
print(my_sum('1', '9999'))
```

```
#결과
8
200
10000
```

------

```
# 강신욱 코드
## 길어서 아이디어만 : 소숫점으로 변환, 0을 삽입하여 자리수를 맞춤.
#                      덧셈 연산 후나오는 정수값을 올림 값으로 지정.
#                      같은 알고리즘으로 실수의 합 연산으로 까지 확장시켰음.
```

```python
# 타키쌤
def my_sum_tk(num1, num2):
    diff = len(num1) - len(num2)
    num2 = diff*'0' + num2
    num1 = -diff*'0' + num1
    
    # ''.join.reverse(~~~) - str 뒤집기
    # '123'[::-1] - list 뒤집기1, str 뒤집기2
    # list(reversed([1,2,3])) - list뒤집기2
    # a = [1,2,3]   a.reverse() -list뒤집기3
    
    num1 = num1[::-1]
    num2 = num2[::-1]
    carry = 0
    result = 0
    
    for i in range(len(num1)):
        carry, r = divmod(int(num1[i]) + int(num2[i]) + carry, 10)
        result += r*10**i
    # Tip 반복문 돌린후의 값은 for문의 마지막 실행 값으로 저장되어있어서 for문 밑에서 활용 가능함
    
    if carry == 1:
        result += carry*10**(i+1)
    
    return result
```
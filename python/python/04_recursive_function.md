# 04_recursive_function

# 재귀 함수(recursive function)

재귀 함수는 함수 내부에서 자기 자신을 호출 하는 함수를 뜻한다.



## 실습 문제 - 팩토리얼 계산

> `팩토리얼(factorial)`을 계산하는 함수 `fact(n)`를 작성해봅시다. 
>
> n은 1보다 큰 정수라고 가정하고, 팩토리얼을 계산한 값을 반환합니다.

$$
\displaystyle n! = \prod_{ k = 1 }^{ n }{ k }
$$

$$
\displaystyle n! = 1*2*3*...*(n-1)*n
$$

---
```
예시 출력)
120
```



```python
# 아래에 코드를 작성해주세요.
def fact(n):
    result = 1
    k = list(range(1,n+1))
    for i in k:
        result *= i
    return print(result)

def fact2(n): 
    result = 1
    while n > 1:
        result *= n
        n -= 1
       
    return print(result)
```

```python
# 아래의 코드를 통해 fact(5) 함수를 호출해주세요.
fact(5)
fact2(5)
```

```
120
120
```



## 예제 문제 - 재귀를 이용한 팩토리얼 계산

```
1! = 1
2! = 1 * 2 = 1! * 2 
3! = 1 * 2 * 3 = 2! * 3
```



```python
# 아래에 재귀함수를 이용한 팩토리얼 계산을 해봅시다.
def factorial(n):
    if n <= 1:
        return n
    else:
        return n * factorial(n-1)
```

```python
# 아래의 코드를 통해 factorial(5) 함수를 호출해주세요.
factorial(5)
```

```
120
```



* 재귀 함수는 기본적으로 같은 문제이지만 점점 범위가 줄어드는 문제를 풀게 된다.

* 재귀함수를 작성시에는 반드시, `base case`가 존재 하여야 한다. 

* `base case`는 점점 범위가 줄어들어 반복되지 않는 최종적으로 도달하는 곳이다. 

재귀를 이용한 팩토리얼 계산에서의 base case는 n이 1일때, 함수가 아닌 정수 반환하는 것이다.



* 자기 자신을 호출하는 재귀함수는 알고리즘 구현시 많이 사용된다.
* 코드가 더 직관적이고 이해하기 쉬운 경우가 있음. (하지만, 만들기는 어려움)
* [Python Tutor](https://goo.gl/k1hQYz)에 보면, 함수가 호출될 때마다 메모리 공간에 쌓이는 것을 볼 수 있다. 
* 이 경우, 메모리 스택이 넘치거나(Stack overflow) 프로그램 실행 속도가 늘어지는 단점이 생긴다.
* 파이썬에서는 이를 방지하기 위해 1,000번이 넘어가게 되면 더이상 함수를 호출하지 않고, 종료된다.



```python
# 여기에서 오류를 확인해보자!
factorial(10000)
```

```python
---------------------------------------------------------------------------
RecursionError                            Traceback (most recent call last)
<ipython-input-8-d07356e1f47a> in <module>
      1 # 여기에서 오류를 확인해보자!
----> 2 factorial(10000)

<ipython-input-5-713778a56004> in factorial(n)
      4         return n
      5     else:
----> 6         return n * factorial(n-1)

... last 1 frames repeated, from the frame below ...

<ipython-input-5-713778a56004> in factorial(n)
      4         return n
      5     else:
----> 6         return n * factorial(n-1)

RecursionError: maximum recursion depth exceeded in comparison
```



## 실습문제 - 피보나치 수열

> 피보나치 수열은 다음과 같은 점화식이 있다. 
>
> 피보나치 값을 리턴하는 두가지 방식의 코드를 모두 작성해보자.

$$
\displaystyle F_0 = F_1 = 1
$$

$$
F_n=F_{n-1}+F_{n-2}\qquad(n\in\{2,3,4,\dots\})
$$

1) `fib(n)` : 재귀함수

2) `fib_loop(n)` : 반복문 활용한 함수

---
```
예시 입력)
fib(10)

예시 호출)
89
```



```python
# 아래에 재귀를 이용한 코드를 작성해주세요.
def fib(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
```

```python
# 아래의 코드를 통해 fib 함수를 호출해주세요.
fib(10)
```

```
89
```



```python
# 아래에 반복문을 이용한 코드를 작성해주세요.
def fib_loop(n):
    result = {0:1,1:1}
    for i in range(2,n+1):
        
        result[i] = result[i-1] + result[i-2]
        
    return print(result[i])


def fib_loop2(n):
    result = [1,1]
    cnt = 2
    
    while n >= cnt:   
        a = result[0]
        b = result[1]
        
        result[0] = b
        result[1] = a+b
        cnt += 1
        
    return print(result[1])
```

```python
# 아래의 코드를 통해 fib_loop(5) 함수를 호출해주세요.
fib_loop(10)
fib_loop2(10)
```

```
89
89
```



```python
#타키쌤
def tk_def(n):
    old, new = 1, 1
    for i in range(1,n):
        old, new = new, old + new
    return new
```



## 반복문과 재귀 함수의 차이

```python
# 큰 숫자를 재귀로 짜여진 fib()함수의 인자로 넘겨보세요.
fib(33)
```

```python
# 100배 되는 숫자를 반복문으로 짜여진 fib_loop()인자로 넘겨보세요.
fib_loop(3300)
```



## 실습문제 - 하노이의 탑

> 다음은 하노이의 탑이다. 
>
> 하노이의 탑을 풀이하는 해법(한쪽 탑의 원판을 다른 탑으로 모두 옮기는 법을 출력하는 함수를 만드세요.

1. 한 번에 한개의 층만을 다른 기둥으로 옮길 수 있다
2. 옮기려는 기둥에는 아무것도 없거나 옮기려는 층보다 큰 층이 있을 경우에만 옮길 수 있다
3. 옮기려는 기둥에 옮기려는 층보다 작은 층이 이미 있을 경우 그 기둥으로 옮길 수 없다.
4. 가능한 적은 회수로 전체 탑을 다른 기둥으로 옮긴다.



```python
# 아래에 코드를 작성해주세요.
def hanoi(num, a, b, c):
    if num == 0:
        return
    elif num >= 1:
        hanoi(num-1, a, c, b)
        print(f'{num}번 원판을 {a}번 기둥에서 {c}로 옮긴다')
        hanoi(num-1, b, a, c)
```

```python
hanoi(2,'a','b','c')
```

```
1번 원판을 a번 기둥에서 b로
2번 원판을 a번 기둥에서 c로
1번 원판을 b번 기둥에서 c로
```
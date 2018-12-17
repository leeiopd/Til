#  Day 1 

## 1. CLI - Command Line Interface

명령어를 통해서 사용하는 인터페이스로,  GUI(Graphic User Interface)와는 다르게 터비널(bush/shell/cmd)을 통해서 명령을 할 수 있다.

사전 준비사항 : [Git bash](https://gitforwindows.org) 설치

### 1. 기본 명령어

```
$ ls
a.txt  b.txt

$ touch a.txt

```

## 2. Python

### 0) Python Style Guide(PEP-8)

 [공식문서 링크](https://www.python.org/dev/peps/pep-0008/)

###   1) 스트링 조작

```python
# 기본 방법
print("안녕하세요")
print("저는 홍길동입니다.")
print("만나서 반갑습니다.")

print(""" 안녕하세요
저는 홍길동입니다.
만나서 반갑습니다.""")

```

```안녕하세요
안녕하세요
저는 홍길동입니다.
만나서 반갑습니다.

안녕하세요
저는 홍길동입니다.
만나서 반갑습니다.
```



### (2) String Interpolation

1. f-string

   ```python
   name = "홍길동"
   print(f"안녕하세요, {name} 입니다.")
   #=> "안녕하세요, 홍길동입니다."
   ```

2. [pyformat](https://pyformat.info/)

   ```python
   name = "홍길동"
   english_name = "hong"
   print("안녕하세요, {}입니다. my name is {}".format(name, english_name))
   #=> "안녕하세요, 홍길동입니다. my name is hong"
   print("안녕하세요, {1}입니다. my name is {0}".format(name, english_name))
   #=> "안녕하세요, hong입니다. my name is 홍길동"
   print("안녕하세요, {1}입니다. my name is {1}".format(name, english_name))
   #=> "안녕하세요, hong입니다. my name is hong"
   ```

3. 모르면 이렇게 하자

   ```python
   name = "홍길동"
   print("안녕하세요," + name + "입니다." )
   ```


### 2) range

range는 숫자의 범위를 가지고 있다.

```python
print(range(5))
#=> range(0,6)

# list 형변환
a = list(range(5))
#=> [0,1,2,3,4]

# 반복문 활용
for i in range(5):
    print(i)
#=> 0
#=> 1
#=> 2
#=> 3
#=> 4
```



### 3) List

list는 배열 또는 array라고도 불린다. 인데스를 통해 값에 접근할 수 있다.

```python
menu = ["중국집", "초밥", "고기", "분식"]
menu[0]
#=> 중국집
```

`list`는 정렬을 할 수 있다.

```python
a = [3, 1, 2]
# 1. sorted
sorted(a)
#=> [1,2,3] 리턴
print(a)
#[3,1,2]
a = sorted(a)
print(a)
#=> [1,2,3]

# 2. .sort()
a.sort()
#=> None 리턴
print(a)
#[1,2,3]
```





### 4)  Dictionary

`Dictionary`는 hash(해시)라고도 불린다. `key`와 `value`가 짝지어져있다.

``` python
phonebook = {
    "중국집" : "123-456",
    "초밥" : "787-4545",
    "고기" : "456-4356",
    "분식" : "456-4564"
}
phonebook["중국집"]
#=>"123-456"
```



## 3. [마크다운(Markdown)](https://www.markdownguide.org/)



###   1. Heading

```
# H1 입니다.
## H2 입니다.
### H3 입니다.
#### H4 입니다.
##### H5 입니다.
```

# H1 입니다.
## H2 입니다.
### H3 입니다.
#### H4 입니다.
##### H5 입니다.



###   2. List

```
 * 순서없는 리스트
 * 순서없는 리스트 2
 
 1. 순서 있는 리스트1
 2. 순서 있는 리스트2
 3. 순서 있는 리스트3
```

* 순서없는 리스트
* 순서없는 리스트 2

  1. 순서 있는 리스트1
  2. 순서 있는 리스트2
  3. 순서 있는 리스트3



###   3. 코드 작성(Code snippet)

```
​```python
print("hello, world")
​```
```

```python
print("hello, world")
```



###   4. 링크 연결

```
[구글로 가는 링크](https://google.com)
```

[구글로 가는 링크](https://google.com)



###   5. 글씨 꾸미기

```
_기울임_
*기울임*
**굵게**
__굵게__
**_굵게기울임_**
```

_기울임_
*기울임*
**굵게**
__굵게__

**_굵게기울임_**



###   6. 기타

```
---
***
> 안녕하세요?
인용문 공간입니다.
```



---
***
> 안녕하세요?
>
> 인용문 공간입니다.





*************

[파이썬 기본을 갈고 닦자](https://wikidocs.net/book/1553)

- 좋은 참고 페이지


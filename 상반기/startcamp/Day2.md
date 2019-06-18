# Day2

## 1. 스크래핑 기초

###   1) 설치

```powershell
$ pip install requests
$ pip install bs4
```

* `requests` : 요청을 대신 보내준다.
* `bs4` : 문서를 파싱하는 것을 도와준다.



###   2) 코스피 지수 가져오기

### requests 외부에 요청하기

```python
import requests
from bs4 import BeautifulSoup
```

`BeautifulSoup` 는 가장 많이 쓰는 포멧



##### 1.원하는 사이트의 요청을 보낸다. 그리고 그 결과를 response 에 저장한다.

```python
import requests
from bs4 import BeautifulSoup

url = "https://finance.naver.com/sise/"

#요청
response = requests.get(url)
```



##### 2. 원하는 정보를 찾는다.

```python
# 컴퓨터가 이해하는 방식으로 변환 (text -> html)
soup = BeautifulSoup(response.text, 'html.parser')
```



#####  3. select는 css의 선택자 (selector)를 통해 찾을 수 있다.

```python
# 원하는 정보를 CSS selector를 활용하여 가져오기
kospi = soup.select_one('#KOSPI_now')

# 출력하기
print(kospi.text)
```

* `#KOSPI_now` : id가 KOSPI_now인 것.
* `.up`: class가 up인 것.

* CSS에서 id는 문서에서 하나, class는 여러개가 있을 수 있다.



#### 전체 코딩

```python
import requests
from bs4 import BeautifulSoup

url = "https://finance.naver.com/sise/"

# 1.원하는 사이트의 요청을 보낸다.
# 그리고 그 결과를 response 에 저장한다.
response = requests.get(url)
#print (response.text)
#print (type(response))

# 2. 원하는 정보를 찾는다.
soup = BeautifulSoup(response.text, 'html.parser')

# 3. select는 css의 선택자 (selector)를 통해 찾을 수 있다.
# #KOSPI_now : id가 KOSPI_now인 것.
# .up: class가 up인 것.
# CSS에서 id는 문서에서 하나, class는 여러개가 있을 수 있다.
kospi = soup.select_one('#KOSPI_now')
print(kospi.text)

```





## 2. HTML/CSS

#### 1)  HTML

HTML은 HyperText Makrup Language의 약자로, 웹 문서에서 활용이 된다.

웹 문서의 구조와 내용을 담당한다.

```html
<!Doctype html>
<html>
    <head>
        <!-- 문서의 정보를 담고있다 -->
        <title>네이버</title>
    </head>
    <body>
        <!-- 문서의 내용을 담고 있다. 실제로 브라우져에서 보이는 내용이 여기에 해당함. -->
    </body>
          
</html>
```



#### 2) CSS

CSS는 Casecading Style Sheets의 약자로, HTML과 같은 마크업 언어를 꾸며주는 역할을 한다.

꾸며주기 위해서는 특정한 태그를 선택해야 하는데 이때 활용되는것이 `CSS 선택자(selector)`라고 부른다.

* `id` : #
* `class` : .
* `tag`

```html
<html>
    <head>
        <style>
            #blue {
                color : blue;
            }
            .red {
                color : red;
            }
            p {
                color : skyblue;
            }
        </style>
    </head>
    <body>
        <p class = "red"> 클래스 적용 </p>
        <p id = "blue"> 아이디 적용 </p>
        <p> 태그 적용 </p>
        <p id = "blue" class = "red"> 파란색 </p>
        <p style = "color:red;"> 인라인 속성 </p>
            
        </p>
        </p>
    </body>
</html>
```







### 전체 코딩

```html
<!Doctype html>
<html>
    <head>
        <!-- 타이틀은 탭 이름 변경 -->
        <title>네이버</title>
        <style>
            /* 클래스가 red */
            .red{
                color:red;
            }

            /* id 가 blue */
            #blue {
                color:blue;
            }

            /* 태그가 p */
            p {
                color : skyblue;
            }
        </style>
    </head>

    <body>

    <!-- !important > 인라인 > id > class > tag -->

    <!-- 인라인 (inline) 속성 -->
        <h1 id ="blue" style = "color:red;"> 안녕? 제목이니?</h1>
        <h2 style = "color:red;">으악 빨간색</h2>
        
        <!-- 중요도 순위순으로 먹여짐 id>class -->
        <p id="blue" class = "red"> 빨간색? 파란색? </p>

        <p id = "blue"> 파란색 </p>
        <p> 하늘색? </p>
    </body>


</html>
```





## 3. 파일 조작

###  1) `OS` 외장 함수

```python
import os
# 1. 내가 원하는 위치로 이동 -cd
os.chdir(r'경로')

# 2. 해당 디렉토레 내에 있는 파일명 가져오기 - ls
files = os.listdir()

# 3. 파일명 바꾸기
for file in files:
    os.rename(file, "지원자"+file)
```

`os` : 파일 조작 모듈



####  2) 파일 이름바꾸기 코딩

```python
import os

print(os.getcwd())

# SSAFY 지원자 폴더 들어가기
os.chdir(r'SSAFY지원자')
print(os.getcwd())
# 내용 모두 출력
files = os.listdir()
print(files)
print(type(files))
print(len(files))

for file in files:
    os.rename(file, "SAMSUNG_지원자_"+file)
    #os.rename(file, file.replace("SSAFY_이력서","SSAFY_이력서_"))
    #이름 TEXT 바꾸기
```



#### 3) file 열어서 조작하기

##### 1_기본 사용법

```python
with open("파일명","w") as file:
    file.wirte("글써짐")
    
with open("파일명", "r") as file:
    line = file.read()
    print(line)
```

파일을 조작하는 모드는 다음과 같다.

* w : write(덮어쓰기)
* r : read(읽기)
* a : append(이어쓰기)



##### 2_ 파일 읽기

```python
# 1. read() : 전체를 하나의 string
line = file.read()

# 2. readline() : 한줄씩 string으로 가져옴.
line = file.readline() # 첫번째 줄
line = file.readline() # 두번째 줄

# 3. readlines() : 전체를 하나의 list, element는 한 줄의 string
line = file.readlines()
for line in lines:
    print(line)
###### 3 만 기억해도 좋음 ######
```






# Flask

* [공식홈페이지](http://flask.pocoo.org)



### 1. 설치하기

```powershell
$ pip install flask
```



### 2. 시작하기

```python
# hello.py
from flask import Flask
app = Flask(__name__)

# "/" 루트 디렉토리를 뜻하며, www.naver.com/의 '/'라고 생각하면됨
@app.route("/")
def hello():
    return "Hello World"
```



* 서버 실행하기

```powershell
$ FLASK_APP=hello.py flask run
```

크롬으로 `http://localhost:5000`, `http://192.0.0.1:5000`을 열어본다!

```python
@app.route("/ssafy")
def ssafy():
    return "hello, saffy"
#https://localhost:5000/saffy
```



### 3. Variable Routing

* url에 있는 정보를 변수로 활용하는 법

```python
@app.route("/greeting/<string:name>")
def greeting(name):
    return f"{name}, 안녕?"
# https://localhost:5000/greeting/sungmin
# 화면출력 => sungmin, 안녕?
```



### 4. render_template

* `render_template`을 활용하기 위해서는 `import` 해줘야 함!!

(render_template는 html 파일을 return으로 받기위해 필요함)

```python
# ello.py
from flask import Flask, render_template

@app.route("/")
def hello():
    return render_template("index.html")
```

```html
<!-- templates/index.html -->
<html>
    <head>
        
    </head>
    <body>
        안녕?!!!!
    </body>
</html>
```

* `render_template`을 사용하면, html 파일에서 변수, 조건, 반복문 등을 활용할 수 있다.
* `jinja2`라고 하는 템플릿 엔진을 활용하고 있기 때문이다.
* 기본적으로 html파일은 `templates/`폴더안에 만들어야 한다.

```python
@app.rout('/dinner')
def dinner():
    menu = "신전떡볶이"
    return render_template("dinner.html", menu = menu)
```

```html
<!-- templates/dinner.html -->
{{menu}} <!-- 출력을 할 경우 {{}} 활용한다. -->


{% if _____ %} <!-- 제어문을 활용할 겅우 {% ____ %}를 활용한다.-->
	<h1>
        True면 보인다
	</h1>
{% else %}
	<h1>
        Flase면 보인다.
	</h1>
{% endif %}



{% for ___ in ___ %}
 	<p> _____ </p>
{% endfor %}
```



### 5. 사용자로부터 정보 받기

사용자로부터 정보를 받기 위해서 HTML의 `form`태그를 활용한다.

실제로, 네이버/구글 등 모든 사이트에서 사용자(클라이언트)가 제출하는 내용들은 모두 `<form>`태그 안에 있다.

#### 1) `<form>`보여주는 페이지(메뉴 등록 페이지)

```python
@app.route("/menu/add")
def menu_add():
    return render_template("menu_add.html")
```

```html
<!-- templates/menu_Add.html -->
<form action = "menu/create">
    메뉴를 입력하세요 : <input type = "text" name ="menu">
 	<input type = "submit">
</form>
```

* form 태그 작성시 반드시 중요한 것들!!!

  * 1. html 입력받을 `input`태그
    2. 변수 `input` 태그의 `name`
    3.  정보를 받아서 처리할 경로 : `form` 태그의 `action`



  #### 2) 정보를 받아서 처리할 라우팅 경로 (txt 파일에 저장)

```python
# "/menu/create"는 form 태그에서 action에 정의한 url
from flask import request

@app.route("/menu/create")
def menu_create():
    # "menu"는 input 태그에서 name에 정의한 내용
    request.args.get("menu")
    with open("menu.txt","a") as file:
        file.write(menu)
    return f"{menu}가 등록되었습니다."
```






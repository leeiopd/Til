# ORM (flask-sqlalchemy)

1. 기본설정

   ```bash
   $ pip install flask_sqlalchemy flask_migrate
   ```

   ```python
   from flask import Flask
   from flask_sqlalchemy import SQLAlchemy
   from flask_migrate import Migrate
   import datetime
   
   app = Flask(__name__)
   app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db_flask.sqlite3'
   db = SQLAlchemy(app)
   
   migrate = Migrate(app, db)
   class User(db.Model): # db 모델을 상속
       id = db.Column(db.Integer, primary_key=True)
       username = db.Column(db.String(80), unique=True, nullable=False) # nullable=False - not null 조건
       email = db.Column(db.String(120), unique=True, nullable=False)
       created_at = db.Column(db.String(80), nullable=False)
       
       def __init__(self, username, email):
           self.username = username
           self.email = email
           self.created_at = datetime.datetime.now().strftime("%D")
           
       
       def __repr__(self):
           return f'{self.id}: {self.username}'
   ```

2. flask db 설정

   * 초기 설정 (`migration` 폴더 생성)

   ```bash
   $ flask db init
   ```

   * migration 파일 생성

   ```bash
   $ flask db migrate
   ```

   * db 반영

   ```bash
   $ flask db upgrade
   ```



3. 활용법

   1. Create

     ```python
     # user 인스턴스 생성
     user = User(username='이재찬', email='lee@gmail.com')
     
     # db.session.add 명령어를 통해 추가
     # INSERT INTO user (username, email)
     # VALUES ('이재찬', 'leeiopd@gmail.com');
     db.session.add(user)
     
     # db에 반영
     db.session.commit()
     ```

   2. READ

     ```python
     # SELECT * FROM user;
     users = User.query.all()
     
     # get 메소드는 primary key로 지정된 값을 통해 가져온다.
     user = User.query.get(1)
     
     # 특정 컬럼의 값을 가진 것을 가져오려면 다음과 같이 쓴다.
     user = User.query.filter_by(username='이재찬').all()
     user = User.query.filter_by(username='이재찬').first()
     ```

   3. UPDATE

      ```python
      user = User.query.get(1)
      user.username = '홍길동'
      db.session.commit()
      ```

   4. DELETE

      ```python
      user = User.query.get(1)
      db.session.delete(user)
      db.session.commit()
      ```



----------------------------------------------



## ORM 실습

```python
from flask import Flask, render_template, request, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import datetime
```



```python
# flask

app = Flask(__name__)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080', debug=True)
```



```python
# alchemy를 이용하여 db를 class로 처리하도록 설정

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db_flask.sqlite3'
db = SQLAlchemy(app)

migrate = Migrate(app, db)
class User(db.Model): # db 모델을 상속
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False) # nullable=False - not null 조건
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.String(80), nullable=False)
    
    def __init__(self, username, email):
        self.username = username
        self.email = email
        self.created_at = datetime.datetime.now().strftime("%D")
        
    
    def __repr__(self):
        return f'{self.id}: {self.username}'
```



```python
# flask db migrate: class 내용을 db에 반영하기 위해 청사진을 그리는것
# flask db upgrade: 실제로 내용을 올리는것
```



```python
# route 페이지

@app.route('/')
def index():
    users = User.query.all()
    # type(users) : list 타입
    # lists element : user 인스턴스
    return render_template('index.html', users = users)
```

```html
<!-- index.html -->

{% extends 'base.html' %}
{% block body %}
<body>
    <h1>회원 명부</h1>
    {% for user in users %}
        <li>{{user.id}} : {{user.username}}</li>
        <li>{{user.email}}</li>
        <a href="/users/read/{{user.id}}">상세보기</a>
        <hr>
    {% endfor %}
</body>
{% endblock %}
```



```python
# 생성할 data 입력 페이지

@app.route('/users/new')
def new_user():
    return render_template('new.html')
```

```html
<!-- new.html -->

{% extends 'base.html' %}

{% block title %}
회원가입  form
{% endblock %}

{% block body %}
<body>
    <form action='/users/create', method='POST'>
        username : <input type='text' name='username'> <br>
        email : <input type='email' name='email'> <br>
        <input type='submit' value='회원가입'>
    </form>
    
</body>
{% endblock %}
```



```python
# 입력된 data를 db_flask.sqlite3에 저장

@app.route('/users/create', methods=["POST"])
def create_user():
    username = request.form.get('username') # 이재찬
    email = request.form.get('email') # lee@lee
    # user = User(username='이재찬', email='lee@lee')
    # user는 인스턴스 클래스 이름
    # User는 클래스 이름
    user = User(username=username, email=email)
    db.session.add(user)
    db.session.commit()
    return render_template('create.html', username = username, email = email)
```

```html
<!-- create.html -->

<h2>{{username}}</h2>
<h2>{{email}}</h2>
```



```python
# 저장된 정보 탐색

@app.route('/users/read/<int:id>')
def read_user(id):
    user = User.query.get(id)
    return render_template('read.html', user=user)
```

```html
<!-- read.html -->

<h1>{{user.id}}: {{user.username}}</h1>
<p>{{user.email}}</p>
<p>{{user.created_at}}</p>
<a href='/users/delete/{{user.id}}'>삭제</a>
<a href='/users/edit/{{user.id}}'>수정</a>
```



```python
# 저장된 정보 삭제

@app.route('/users/delete/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    
    # flash를 이용해 삭제 메세지 화면에 출력
    flash(f'{user.username}이 삭제 되었습니다.', 'warning')
    
    # 삭제 후 기본 주소로 이동
    return redirect('/')
```



```python
# 저장된 정보 수정

@app.route('/users/edit/<int:id>')
def edit_user(id):
    user = User.query.get(id)
    return render_template('edit.html', user=user)
```

```html
<!-- 수정될 값 입력 페이지 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action='/users/update/{{user.id}}', method='POST'>
        username : <input type='text' name='username'> <br>
        email : <input type='email' name='email'> <br>
        <input type='submit' value='수정'>
    </form>
    
</body>
</html>
```



```python
# 수정 된 정보 db_flask.sqlite3 에 업데이트

@app.route('/users/update/<int:id>', methods=["POST"])
def update_user(id):
    user = User.query.get(id)
    user.username = request.form.get('username')
    user.email = request.form.get('email')
    db.session.commit()
    flash(f'수정 되었습니다.', 'success')
    return redirect('/')

```





------------------------

`````
pip install werzeug
​```

​```python
from werkzeug.security import generate_password_hash, check_password_hash

a = 'hihi'

# 암호화
hash = generate_password_hash(a)
print(hash)

# 차이점 확인
check_password_hash(hash, 'hihi') -> True
check_password_hash('hihi', hash) -> False
​```


`````
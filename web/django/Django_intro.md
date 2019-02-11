# Django

## 1. 시작하기

1. 프로젝트 시작하기

   ```bash
   $ django-admin startproject 프로젝트 이름
   ```

   아래와 같이 프로젝트 구조가 만들어 진다.

   ```text
   django-intro/
   	django_intro/
   		__init__.py
   		settings.py
   		urls.py
   		wsgi.py
   	db.sqlite3
   	manage.py
   ```

   지금부터 pwd는 `~/workspace/django_intro`이다.

2. 서버 실행하기

   * `settings.py`

     ```python
     ALLOWED_HOST = ['*']
     # C9에서는 host - 0.0.0.0, port - 8080  만 활용할 수 있기 때문에 위와 같이 설정한다.
     ```

   ```bash
   ~/workspace/django_intro $ python manage.py runserver 0.0.0.0:8080
   ```

   앞으로는 모든 장고 명령어는 프로젝트를 만들 때를 제외하고 `python manage.py`를 활용한다. 따라서, 반드시 `pwd`와 `ls`를 통해 현재 bash(터미널)을 확인하자.



## 2. Hello, Django

> Django 프로젝트는 여러가지 app의 집합이다.
>
> 각각의 app은 MTV 패턴으로 구성되어 있다.
>
> M (Model) : 어플리케이션의 핵심 로직의 동작을 수행한다.
>
> T (Template) : 사용자에게 결과물을 보여준다.
>
> V (View) : 모델과 템플릿의 동작을 제어한다. (모델의 상태를 변경하거나 값을 가져오고, 템플릿에 값을 전달하기 등)
>
> **일반적으로 MVC 팬턴으로 더 많이 사용된다.**



### 1. 기본로직

앞으로 우리는 1. 요청 url 설정(`urls.py`) 2. 처리 할 view 설정 (`views.py`) 3. 결과 보여줄 template 설정 (`templates/`) 으로 작성할 것이다.

--------------------------------------------

1. url 설정

   ```python
   # djnago-intro/urls.py
   from django.contrib import admin
   from django.urls import path
   # home 폴더 내에 있는 view.py를 불러온다.
   from home import views
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       # 요청이 home/로 오면 views의 index 함수를 실행시킨다.
       path('home/', views.index)
   ]
   ```

2. view 설정

   ```python
   # home/views.py
   from django.shortcuts import render, HttpResponse
   
   # Create your views here.
   def index(request):
       return HttpResponse('hello, django!')
   ```

   * 주의할 점은 선언된 함수에서 `request`를 인자로 받아야 한다.
     * request는 사용자(클라이언트)의 요청 정보와 서버에 대한 정보가 담겨 있다.
     * Django 내부에서 해당 함수를 호출하면서 정보를 넘겨주기 때문에 반드시 명시해주어야 한다.



## 3. Template (MTV - T)

> Django에서 활용되는 Template은 DTL(Django Template Language)이다.
>
> jinja2와 문법이 유사하다.



----------------------------

```bash
$ python manage.py startapp <app이름>
```

```
settings.py에 app 추가
```

```python
# urls.py

from <폴더명> import views
```

------------------------------------



1. 요청 url 설정

   ```python
   path('home/dinner/', views.dinner)
   ```

2. view 설정

   ```python
   def dinner(request):
       box = ['치킨', '밥', '라면']
       dinner_pick = random.choice(box)
       return render(request, 'dinner,html', {'dinner':dinner_pick})
   ```

   * Template을 리턴하려면, `render`를 사용하여야 한다.
     * `request` (필수)
     * `template 파일 이름` (필수)
     * `template 변수` (선택) : `dictionary` 타입으로 구성해야 한다.

3.  Template 설정

   ```bash
   $ mkdir home/templates
   $ touch home/templates/dinner.html
   ```

   ```html
   <!-- home/templates/dinner.html -->
   <h1>
       {{dinner}}
   </h1>
   ```




## 4. Variable Routing

1. url 설정

   ```python
   path('home/you/<name>', views.you)
   path('home/cube/<int:num>', views.num)
   ```

2.  view 파일 설정

   ```python
   def you(request, name):
       return render(request, 'you.html', {'name':name})
   
   def cube(request, num):
       result = num**3
       return render(request, 'cube.html', {'num':num, 'result':result})
   ```

3.  template 파일 설정

   ```django
   <!-- name.html -->
   {% extends 'base.html' %}
   {% block title %}이름 출력하기{% endblock %}
   
   {% block body %}
   <p>이름 : {{name}}</p>
   <p>{{name}} 안녕?</p>
   {% endblock %}
   ```

   ```django
   <!-- cube.html -->
   {% extends 'base.html' %}
   {% block title %}세제곱 구하기{% endblock %}
   
   {% block body %}
   
   <p> {{num}}의 세제곱은 {{cube_num}} !!!</p>
   
   {% endblock %}
   ```


## 5. Form data

1. `ping`

   1. 요청 url 설정

      ```python
      path('home/ping/', view.ping)
      ```

   2.  view 설정

      ```python
      def ping(request):
          return render(request, 'ping.html')
      ```

   3. template 설정

      ```html
      <form aciton="/home/ping/">
          name : <input type="text" name="user_name"> <br>
          password : <input type="password" name="password">
          <input type="submit" value="입력">
      </form>
      ```

2. `pong`

   1. 요청 url 설정

      ```python
      path('home/pong/', views.pong)
      ```

   2. view 설정

      ```python
      def pong(request):
          user_name = request.GET.get('user_name')
          password = request.GET.get('password')
          return render(request, 'pong.html', {'user_name':user_name, 'password':password})
      ```

   3. template 설정

      ```html
      <h1>
          name : {{user_name}}
          password : {{password}}
      </h1>
      ```

3. POST 요청 처리

   1. 요청 FORM 수정

      ```django
      <form action="/home/pong/" method="POST">
          {% csrf_token %}
      </form>
      ```

   2. view 수정

      ```python
      def pong(request):
          message = request.POST.get('message')
      ```

   * `csrf_token`은 보안을 위해 django에서 기본적으로 설정되어 있는 것이다.
     * SCRF 공격 : Cross Site Request Forgery
     * form을 통해 POST 요청을 보낸다는 것은 데이터베이스에 반영되는 경우가 대부분인데, 해당 요청을 우리가 만든 정해진 form에서 보내는지 검증하는 것.
     * 실제로 input type hidden으로 특정한 hash값이 담겨 있는 것을 볼 수 있다.
     * `settings.py`에 `MIDDLEWARE`설정에 보면 csrf 관련된 내용이 설정된 것을 볼 수 있다. 
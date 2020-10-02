# Django_template_example



## 1. 반복문

```html
<h3>1. 반복문</h3>
{% for menu in my_list %}
    {{ forloop.counter }}
    {% if forloop.first %}
        <p>짜짜짜짜</p>
    {% else %}
    <p>{{ menu }}</p>
    {% endif %}
{% endfor %}
{% for user in empty_list %}
    <p>{{ user }}</p>
    {% empty %}
        <p>지금 가입된 유저가 없습니다.</p>
{% endfor %}
<hr>
```

```
1
짜짜짜짜

2
짬뽕

3
탕수육

4
양장피

지금 가입된 유저가 없습니다.
```



## 2. 조건문

```html
{% if '짜장면' in my_list %}
    <p>짜장면은 고추가루 없이 못 먹지!</p>
{% endif %}
```

```
짜장면은 고추가루 없이 못 먹지!
```



## 3. length filter 활용

```html
{% for message in messages %}
    {% if message|length > 5 %}
        <p>글씨가 너무 long 해요</p>
    {% else %}
        <p>{{ message }}, {{ message|length }}</p>
    {% endif %}
{% endfor %}
```

```
apple, 5

글씨가 너무 long 해요

글씨가 너무 long 해요

mango, 5
```



## 4. lorem ipsum : % 주의하자 !

```html
{% lorem %}
<hr>
{% lorem 3 w %}
<hr>
{% lorem 4 w random %}
<hr>
{% lorem 4 p %}
```



## 5. 글자수 제한하기(truncate)

```html
<p>{{ my_sentence|truncatewords:3 }}</p>
<p>{{ my_sentence|truncatechars:10 }}</p>
```

```
Life is short, ...

Life i ...
```



## 6. 글자 관련 필터

```html
<p>{{ 'ABC'|length }}</p>
<p>{{ 'ABC'|lower }}</p>
<p>{{ my_sentence|title }}</p>
<p>{{ 'abc def. hi'|capfirst }}</p>
<p>{{ 'abcdef'|random }}</p>
<p>{{ my_list|random }}</p>
```

```
3

abc

Life Is Short, You Need Python!

Abc def. hi

b

짜장면
```



## 7. 연산

```html
<p>{{ 4|add:6 }}</p>
```

```
10
```



## 8. 날짜 표현

```html
{% now "SHORT_DATETIME_FORMAT" %} <br>
{% now "DATETIME_FORMAT" %} <br>
{% now "SHORT_DATE_FORMAT" %} <br>
{% now "DATE_FORMAT" %} <br>
{% now "Y년 m월 d일 (l) h:i" %}<br>
<hr>
{{ datetimenow|date:"SHORT_DATE_FORMAT" }}
```

```
2019-2-12 11:40 
2019년 2월 12일 11:40 오전 
2019-2-12. 
2019년 2월 12일 
2019년 02월 12일 (화요일) 11:40
----------------------------------------------
2019-2-12.
```


# CSS

* Cascading Style Sheet
* HTML 은 정보 구조화, CSS는 style의 정의



### 기본 사용법

```css
h1 {color:blue; font-size:15px}
```

h1: 셀렉터

{  } : 선언

color, font-size :  프로퍼티(property)

blue, 15px : 값(value)



## css 활용하기

### 1. Inline(인라인)

```html
<h1 style="color:blue; font-size:100px">
    This is my site
</h1>
```

* HTML 요소의 style에 CSS를 넣기



### 2. Embedding(내부참조)

```html
<head>
    <title>my site</title>
    <style>
        h1 {
            color: blue;
            font-size: 100px;
        }
    
    </style>
</head>
<body>
    <h1>
        This is my site
    </h1>
</body>
```

* HTML 내부에 CSS를 포함시키기



### 3.  Link file(외부참조)

```html
<head>
    <title>my site</title>
    <link rel="stylesheet" href="mystyle.css">
</head>
<body>
    <h1>
        This is my site
    </h1>
</body>
```

```css
h1 {
    color: blue;
    font-size: 20px;
}
```

* 외부에 있는 CSS 파일을 로드하기



```
실제 프로젝트에서 활용시, 일반적으로 '컴포넌트화'시켜서 외부파일로 활용한다.
```





## 프로퍼티 값의 단위

### 1. 키워드

* 개발자 도구로 확인



### 2. 크기 단위

* px(픽셀) : 디바이스 별로 픽셀의 크기는 다르다

* % : 백분률 단위의 상대단위, 기본 글꼴 크기에 상대적인 사이즈를 설정한다.

* em : 배수의 단위로 상대단위 이다. 요소에 지정된 사이즈(부모에게 상속된 사이즈나 디폴즈 사이즈)에 상대적인 사이즈를 설정한다.

* rem : em의 기준은 상속의 영향으로 바뀔수 있다. rem은 최상위 요소(html)의 사이즈를 기준으로 삼는 상대단위이다

* Viewport : 디바이스마다 다른 크기의 화면을 가지고 있기 때문에 상대적 단위인 viewport를 기준으로 만든 단위

  | 단위 | 설명                              |
  | ---- | --------------------------------- |
  | vw   | 너비의 1/100                      |
  | vh   | 높이의 1/100                      |
  | vmin | 너비 또는 높이 중 작은 쪽의 1/100 |
  | vmax | 너비 또는 높이 중 큰 쪽의 1/100   |

  12pt == 16px == 1em == 100%

### 3. 색상 표현 단위

| 단위 | 비고               |
| ---- | ------------------ |
| HEX  | #ffffff            |
| RGB  | rgb(0, 0, 0)       |
| RGBA | rgb(0, 0, 0,  0.5) |





## Box Model

```
Content : 실제 내용이 위치
Padding : 테두리 안쪽의 내부 여백. 요소에 적용된 배경의 컬러, 이미지는 패딩까지 적용
Border : 테두리 영역
Margin : 테두리 바깥의 외부 여백, 배경색을 지정할 수 없다.
```



## Display

### 1. block

* 항상 새로운 라인에서 시작한다.

* 화면 크기 전체의 가로폭을 차지한다. (width : 100%)

* block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다.

```
ex) div, h1~h6, p, ol, ul, li, hr, table, form
```









### 2. inline

* 새로운 라인에서 시작하지 않으며 문자의 중간에 들어갈 수 있다.
* content의 너비만큼 가로폭을 차지한다.
* width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다.
* 상, 하 여백은 line-height로 지정한다.

```
ex) span, a, strong, img, br, input, select, textarea, button
```



### 3. inline-block

* block과 inline 레벨 요소의 특징을 모두 갖는다.
* inline 레벨 요소처럼 한 줄에 표시 되면서 block에서의 width, height, margin(top, bottom) 속성을 모두 지정할 수 있다.



### 4. None

* 해당 요소를 화면에 표시하지 않는다. (공간조차 사라진다.)





## Visibility Property

### 1. visible

* 해당 요소를 보이게 한다. (기본값)



### 2. hidden

* 해당 요소를 안보이게 한다. (공간은 존재한다.)





## Position

* 요소의 위치 정의



### 1. static (기본위치)

* 기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.



### 2. relative (상대위치)

* 기본위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동



### 3. absolute (절대위치)

* 부모 요소 또는 가장 가까이 있는 조상 요소(static 제외)를 기준으로 좌표 프로퍼티(top, bottom, left, right)만큼 이동한다.
* relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정된다.



### 4. fixed (고정위치)

* 부모 요소아 관계없이 브라우저의 viewport를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치 이동 시킨다.
* 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.




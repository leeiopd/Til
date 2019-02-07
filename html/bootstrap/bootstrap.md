# bootstrap

* Content Delivery(Distribution) Network 컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템.
* 개별 end-user의 가까운 서버를 통해 빠르게 전달 가능(지리적 이점) 외부 서버를 활용함으로써 본인 서버의 부하가 적어짐
* CDN은 보통 적절한 수준의 캐시 설정으로 빠르게 로딩할 수 있음.



## 1. Utilities

### 1.1 Spacing

* m-0 : margin 0
* mr-0 : margin-right 0
* mx-0 : margin-right 0 and margin-left 0
* py-0 : padding-top 0 and padding-bottom 0
* mt-0.25rem : margin-top 0.25rem

| 단축 | 뜻          | num  | 배수 | px   |
| ---- | ----------- | ---- | ---- | ---- |
| m    | margin      | 0    | 0    | 0px  |
| p    | padding     | 1    | 0.25 | 4px  |
| t    | top         | 2    | 0.5  | 8px  |
| b    | bottom      | 3    | 1    | 16px |
| r    | right       | 4    | 1.5  | 24px |
| x    | left, right | 5    | 3    | 48px |
| y    | top, bottom | auto | 자동 |      |



### 1.2 Color

| 색        | 16진 표현        |
| --------- | ---------------- |
| primary   | #007bff / 파랑   |
| secondary | #6c757d / 회색   |
| success   | #28a745 / 녹색   |
| info      | #17a2b8 / 하늘색 |
| warning   | #ffc107 / 노란색 |
| danger    | #dc3545 / 빨간색 |
| light     | #f8f9fa / 흰색   |
| dark      | #343a40 / 검정색 |



### 1.3 Border

* .border 으로 class 설정이 가능하다.

* border-color 

* ```css
  .rounded {
      border-radius: 0.25rem !important;
  }
  ```

* rounded-circle

* rounded-pill



### 1.4 display

* .d-block
* .d-inline
* .d-none
* .d-sm-none



| 속성                  |                                                    | 줄바꿈                                           | 너비, 높이 지정          | margin여백       |
| --------------------- | -------------------------------------------------- | ------------------------------------------------ | ------------------------ | ---------------- |
| display: inline       | 요소를 inline처럼 표시                             | X,일렬로 배치                                    | 불가능                   | 좌우 여백만 적용 |
| display: block        | 요소를 block처럼 표시                              | O, 자동 줄 바꿈                                  | 가능, defult: width 100% | 가능             |
| display: inline-block | 요소를 inline 속성으로, 내부는 block 속성으로 표시 | X, 일렬로 배치(block이 inline처럼 옆으로 늘어섬) | 가능                     | 가능             |





* `<div>`와 `<span>` 비교

| <div>                 | <span>                                 |
| --------------------- | -------------------------------------- |
| 기본적으로 block 속성 | inline 속성                            |
| 가로폭을 전부 차지    | 태그 안의 내용만큼만 너비, 높이를 차지 |



* %%%%% [참고 블로그](https://m.blog.naver.com/PostView.nhn?blogId=elren&logNo=220857327692&proxyReferer=https%3A%2F%2Fwww.google.com%2F)











### 1.5 position

| 속성     | 위치                                                         |
| -------- | ------------------------------------------------------------ |
| static   | 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 임의 설정 불가 |
| absolute | 절대 좌표와 함께 위치 지정                                   |
| realtive | 원래 있던 위치를 기준으로 좌표 지정                          |
| fixed    | 스크롤과 상관없이 좌측 상단을 기준으로 좌표 고정             |
| inherit  | 부모 태그의 속성값을 상속                                    |



* %%%%% [참고 블로그](https://ofcourse.kr/css-course/position-%EC%86%8D%EC%84%B1)

### 1.6 flex

#### 1) flex-row / flex-column

* item을 행으로 배치하건 여로 배치할 수 있다.
* 기본값은 row이다.
* row-reverse, column-reverse로 배치를 뒤집을 수 있다.



#### 2) justify-content (기본적으로 행 조정)

* start: 왼쪽으로
* end : 오른쪽으로
* center : 중앙
* between : item들 사이에 동일한 간격
* around : item들 주위에 동일한 간격



#### 3) align-items (기본적으로 열 조정)

* start : 왼쪽으로
* end : 오른쪽으로
* center :  중앙
* stretch : (기본값) 부모의 크기만큼 늘린다.



#### 4) flex-wrap

* item이 부모의 크기를 넘어가지 못하게 만든다.



#### 5) item 전용 - align-self

* start : 왼쪽으로

* end : 오른쪽으로

* center :  중앙

* stretch : 늘린다





### 1.7 grid

* 12개의 칸을 기준으로 공간배치, 반응형으로 만들 수 있다.
* col
* sm
* md
* lg
* xl



### 1.8 media query

* 반응형으로 만들수 있는 강력한 도구

```css
/* example */
@media (min-width: 600px) {
    h1{
        color: red;
    }
}


p.orientation::after{
    content: '가로입니다.'
}


@media (orientation: portrait) {
    p.orientation::after{
        content:'세로입니다.'
    }
}


@media (width: 500px) {
    h1 {
        color: deepskyblue;
    }
}


@media (max-width: 500px) {
    h2 {
        color: greenyellow;
    }
}

@media (min-width: 300px){
    .rainbow{
        color: orangered
    }
}

@media (min-width: 600px) {
    .rainbow{
        color:blue;
    }
}

@media (min-width: 800px) {
    .rainbow{
        color:navy;
    }
}

@media (min-width: 900px) {
    .rainbow{
        color:blueviolet;
    }
}

@media (max-height: 500px) {
    h2{
        color: gray;
    }
}

@media (max-height: 500px) and (max-width: 500px){
    h3{
        color: blueviolet;
    }
}
```





### 1.9 components

* 그 외에도 bootstrap에서 제공하는 많은 기능들을 tag로 설정하고 사용 할 수 있다.




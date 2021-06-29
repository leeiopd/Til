# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 01. Javascript

##### 10_jQuery

* 예전에는 Browser 별로 ajax 를 호출하는 함수가 각각 다른 문제가 있었는데, jQuery  에서 통일을 함
  * Browser 의 표준화가 이루어지며 jQuery 의 장점이 옅어짐



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    숫자 :
    <div id="num"></div>
    <button id="plus">증가</button>
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script>
      var num = 1;
      $(document).ready(function () {
        $("#num").html(num);
        $("#plus").click(function () {
          num++;
          $("#num").html(num);
        });
      });
    </script>
  </body>
</html>
```

* 숫자를 증가시키는 버튼을 jQuery 로 구현


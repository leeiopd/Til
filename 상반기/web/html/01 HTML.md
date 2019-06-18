# 01 HTML

* HTML 기본 구조

```html
<!DOCTYPE html>
<html lang="kor">
    <head>
        ---------------
    </head>
    <body>
        --------------
    </body>
</html>
```





* head 옵션

```html
<head>
    <meta charset="utf-8">
	<title>HTML연습</title>
	<style>
	body{
	height: 10000px;  ---- 스크롤 바 생성
	}
	table, tr, td{  
	border: 1px solid cornflowerblue   ----table 옵션
	}
	</style>
</head>
```





```html
<body>
```

* 글자 표현

```html
<a href="#id값">id값으로 가기</a>
        <h1 id="heading">heading1</h1>
        <!-- 주석은 이렇게 사용합니다. -->
        
		<h1>안녕</h1>
        <h2>하열</h2>
        <h6>반갑.. h는 6까지 </h6> 
        <p><!-- P태그는 문단별 자동 엔터    -->Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos quam reprehenderit, aut cum quidem ab non quod nesciunt necessitatibus est minus facilis. Deserunt suscipit voluptatum atque, accusantium nemo dolorum.</p>
        <br><!-- '\n' -->
        
		<p>위에 작성한 것은 <strong>Lorem Ipsum</strong>으로 임의의 문자열을 나타냅니다.</p>
        <strong> strong 태그와 b태그는 모두 bold체를 표현한다.</strong><br>
        <em>이탤릭체도 작성 가능합니다.</em><br>
        <i>i로도 작성 가능합니다. 다만, em이 시맨틱한 의미를 가지고 있습니다.</i><br>
        

		<p><del>취소선을 나타 냅니다.</del></p>
        
		<p><mark>하이라이팅도 가능합니다.</mark></p>
        
		<p>log<sub>10</sub>10</p>
        
		<p>2<sup>3</sup></p>
        
		<hr> <!-- 선 긋기 -->
        
		<p>아                       아!!</p>
        <p>아&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아!!</p>
        <!-- 띄워쓰기 : &nbsp -->
        
        <pre><!-- 문자 그대로 표현 가능함 -->
            import random
            random.sample(range(1, 46), 6)
            띄    워            쓰     기
        </pre>

        <q>안녕하세요, 인용문입니다. 짧을 때 사용하세요.</q>
        <blockquote>인용문이지만, 긴 문장입니다.
            아마도 들여쓰기가 기본적으로 적용됩니다.
        </blockquote>

        <ul>
            <li>순서가 없습니다.</li>
            <li style="list-style-type: equare">이재찬</li>
            <li>박성민</li>
        </ul>

        <!-- emmet -->
        <ol reversed start="2">
            <li>1교시</li>
            <li>2교시</li>
            <li>3교시</li>
            <li>4교시</li>
            <li>5교시</li>
            <li value="10">6교시</li>
            <li type="a">7교시</li>
            <li>8교시</li>
        </ol>

        <ul>
            <li>사과</li>
            <li>바나나</li>
            <li>안녕</li>
        </ul>
```



* target 태그

```html
        <P><a href="https://google.com" target="_blank">새창으로 구글로</a></P>
        <P><a href="https://google.com" target="_self">여기서구글로</a></P>
        <p><a id="id값" href="#heading">상단으로 가기</a></p>
        <a href="hello.html" target="_blank">hello, world!</a>
        <p><a href="templates/test.html">test</a></p>
        <a href="mailto:t@t.t">메일 보내기</a>
```





* table만들기

```html

        <table>
            <tr>
                <td>숫자</td>
                <td>숫자</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <Td>3</Td>
            </tr>
            <tr>
                <td colspan="3">1</td>
            </tr>
            <tr>
                <td rowspan="4">4</td>
                <td>2</td>
                <td>2</td>
                
            </tr>
            <tr>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
            </tr>
        </table>
        <hr>
```



* input 태그

```html
        <h2>Form input</h2>
        <form action="#">
            일반텍스트: <input name="username" type="text" placeholder="이름을 입력해 주세요" autofocus><br>
            이메일 : <input type="email" placeholder="이메일을 입력해 주세요" autocomplete="email"><br>
            비밀번호 : <input type="password" placeholder="패스워드를 입력해 주세요"><br>
            날짜 : <input type="date"><br>
            <input type="hidden" name="hidden" value="이 사람은 바보">
            <input type="submit" value="전송~"><br>
            
            <!-- radio button -->
            <input type="radio" name="gender" value="male">남자<br>
            <input type="radio" name="gender" value="female" checked>여자<br>
            
            <!-- check box -->
            <input type="checkbox" name="option" value="1">SIA<br>
            <input type="checkbox" name="option" value="2">QUEEN<br>
            <input type="checkbox" name="option" value="3">뜨또<br>
            
            <!-- drop down -->
            <select>
                <option value="korea">한국</option>
                <option value="japan" disabled>일본</option>
                <option value="china" selected>중국</option>
            </select>
            <input name="number" type="range" min="0" max="100" step="10">
        </form>
```



```html
    </body>

</html>
```




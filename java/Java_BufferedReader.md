# Java_BufferedReader

### BufferedReader/BufferedWriter

* `Buffer`에 있는 IO Class
  * `Buffer` : CPU와 보조기억장치 사이에서 사용되는 임시 저장 공간
  * 속도차가 큰 두 대상이 입출력을 수행할 때 효율성을 위해 사용하는 임시 저장공간
* 입력된 데이터가 바로 전달되지 않고 중간에 버퍼링이 된 후에 전달
* 출력의 경우에도 `Buffer`를 거쳐 간접적으로 출력장치로 전달
* 시스템의 데이터 처리 효율성을 높여주며 버퍼스트림을 InputStreamReader / OutputStreamWriter를 같이 사용하여 버퍼링을 하게 되면 입출력 스트림으로 부터 미리 버퍼에 데이터를 가져도 놓기 때문에 보다 효율적인 입출력이 가능



##### BufferedReader

* Scanner와의 차이
  * `Scanner`의 경우 `Space`/`Enter`를 모두 경계로 인식함
  * `BufferedReader`는 `Enter`만 경계로 인식
  * 입력 데이터가 `String`으로 고정

* 입력

  ```java
  package java_test;
  
  import java.io.BufferedReader;
  import java.io.InputStreamReader;
  
  public class test {
  	public static void main(String[] args) throws Exception {
  		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
  		String s = bf.readLine(); //String
  		int i = Integer.parseInt(bf.readLine()); //Integer
  	}
  }
  ```

  * readLine() 메서드를 이용하여 입력
    * 리턴값이 String으로 고정되기 때문에 형변환을 해주어야 함
    * readLine() 메서드 사용 시 예외처리를 해주어야 함
      * try & catch
      * throws IOException

* 공백단위 데이터 가공

  ```java
  StringTokenizer st = new StringTokenizer(s); //StringTokenizer인자값에 입력 문자열 넣음
  int a = Integer.parseInt(st.nextToken()); //첫번째 호출
  int b = Integer.parseInt(st.nextToken()); //두번째 호출
  
  String array[] = s.split(" "); //공백마다 데이터 끊어서 배열에 넣음
  ```

  * nextToken() 메소드 사용

    * readLine()을 통해 입력받은 값을 공백단위로 구분하여 순서대로 호출

  * String.split()

    * 공백단위로 끊어서 배열에 저장

  * StringTokenizer(String str, String delim, boolean returnDelims)

    * str : 분석할 문자열
    * delim : 분리 문자로 사용할 문자
    * returnDelims : 분리 문자까지 분리해서 출력할지 여부

    ```java
    package com;
    
    import java.util.StringTokenizer;
    
    public class Test_StringTokenizer{
        public static void main(String[] args){
            STringTokenizer st = new StringTokenizer("사과:배,딸기:감,귤", ",:", true);
            while (st.hasMoreTokens()){
                System.out.println(st.nextToken());
            }
        }
    }
    ```

    ```
    사과
    :
    배
    ,
    딸기
    :
    감
    ,
    귤
    ```

    * 기본 분리 문자별로 분리

    * 메소드

      * countTokens()

        * 분리 문자를 사용하여 문자열을 분리해서 생성된 토큰 숫자

      * nextToken()

        * 분리 문자를 사용해 다음 토큰을 리턴

      * nextToken(String delim)

        * 다음 토큰을 찾을 때 delim 문자로 변경하여 토큰을 찾아 리턴

      * hashMoreTokens()

        * 분자열을 분리 할 문자가 남아 있는지 여부를 리턴하는 메소드(true/false)

      * 실습

        ```java
        StringTokenizer st = new StringTokenizer("사과:배,감,귤:딸기",":");
        
        System.out.println("st 토큰 갯수 : " + st.countTokens());
        System.out.pirntln("st NextToken(,) :" + st.nextToken(","));
        
        while (st.hasMoreToken()){
            System.out.println(st.nextToken());
        }
        ```

        ```
        st 토큰 갯수 : 3
        st nextToken(,) :사과:배
        감
        귤:딸기
        ```

        * st.countTokens() 메소드를 이용하여 토큰 숫자를 구함
        * st.nextToken(",")  메소드를 이용하여 구분 문자를 변경, 첫번째 토큰을 리턴
        * hasMoreTokens() 메소드를 이용하여 다음 토큰 확인


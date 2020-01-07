# Java_Scanner

### Scanner 클래스

* java에서 입력받을 때 쓰이는 클래스
* 정수, 실수, 문자열을 읽어 올 수 있다



* 호출

  ```java
  import java.util.Scanner;
  ```



* 객체 생성

  ```java
  Scanner sc = new Scanner(System.in);
  ```

  

* 예제코드

  ```java
  import java.util.Scanner;
  
  public class ScannerExample{
      public static void main(String[] args){
          Scanner sc = new Scanner(system.in);
          
          String str;
          int number;
          
          System.out.print("문자 입력");
          str = sc.next();
          
          System.out.print("숫자 입력");
          number = sc.nextInt();
      }
  }
  ```



* Methods
  * next() - 공백 이전 까지의 문자열 입력
  * nextLint() - 한줄 다 입력
  * next().charAt(0) - 문자 하나 입력
  * nextInt() - 정수 입력
  * nextDouble() - 실수 입력

  


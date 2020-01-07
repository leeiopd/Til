# Java_예외처리

### 프로그램 오류

* 프로그램이 실행 중 어떤 원인에 의해 오동작을 하거나 비정상적으로 종료되는 것을 에러 또는 오류라고 한다
* 에러의 종류
  1. 컴파일 에러(`Compile-time Error`) : 컴파일 할 때 발생하는 에러
  2. 런타임 에러(`Runtime Error`) : 프로그램이 실행 도중에 발생하는 에러
* 자바의 에러
  * 자바에서 실행시 발생할 수 있는 프로그램 오류를 에러와 예외 두가지로 구분함
  * 에러(`Error`) : 프로그램이 실행 도중 발생하는 문제중에 심각한 컴퓨터 관련 문제로 해결할 수 없는 것
  * 예외(`Exception`) : 심각한 문제가 아닌 문제 발생 상황, 에러에 비해 비교적 덜 심각함. 코드에 의해 수습 될 수 잇는 다소 미약한 오류
    * 예외 중에서도 프로그래머가 관리 해야 할 예외와 실행중에 발생하는 예외를 `RuntimeException` 으로 나눔
    * `Exception` : 미리 예외상황을 어떻게 처리할 지 정함
    * `RuntimeException` : 실행 중 발생하는 예외이지만, 코딩할 때 처리할 필요는 없다



### Java_Exception Handling

* 자바는 프로그램을 실해중에 발생하는 `Exception`을 처리할 수 있는 `Exception Handling`을 제공

  1. `try-catch-finally` : 발생한 `method` 안에서 처리

     ```java
     try{
         // 실행 프로그램 작성
         // 예외가 발생할 가능성이 있는 코드
     } catch(예외타입 1){
         // try 블록 안에서 예외 타입1이 발생할 경우 처리 할 코드
     } catch(예외타입 2){
         // try 블록 안에서 예외 타입2가 발생할 경우 처리 할 코드
     } finally{
         // 예외 발생에 관계없이 실행되는 코드
     }
     ```

     * `try`
       * 예외가 발생할 가능성이 있는 범위를 지정하는 블록
       * `try`는 최소한 하나의 `catch` 블록이 있어야 하며, `catch` `try` 다음에 위치한다.
     * `catch`
       * 블록의 매개변수는 예외 객체가 발생했을 때 참조하는 변수로 반드시 `java.lang.Throwable` 클래스의 하위 클래스 타입으로 선언 되어야 함
     * `finally`
       * 필수 블록은 아님
       * `catch`  유무와 상관없이 무조건 수행
       * 주로 `IO` 또는 `Connection`을 `close()` 하는데 사용

     

     ```java
     public class Test {
         public static void main(String[] args) {
             while(true) {
                 try {
                     Scanner scan = new Scanner(System.in);
                     int value = scan.nextInt();
                     System.out.println(9/value);
                 } catch(ArithmeticException e) {
                     e.printStackTrace();
                 } finally {
                     System.out.println("무조건 실행됩니다.");
                 }
             }
         }
     }
     ```

     ```
     // 실행 결과
     
     9
     1
     무조건 실행됩니다.
     0
     java.lang.ArithmeticException: / by zero
     무조건 실행됩니다.
     	at Test.main(Test.java:9)
     1
     9
     무조건 실행됩니다.
     ```

     

  

  2. `throws` : `method`를 호출한 곳에서 `Exception` 처리

     * `method` 선언부에 `throws`를 사용해서 `Exception`작성
     * 예외를 처리하는 것이 아니라, 호출한 `method`로 전달
     * 호출한 `method`에서 예외처리를 해야 할 때 사용
  
     ```java
     public class ThrowsTest {
       public static void main(String[] args) {
         try {
           sub();
         } catch (ArrayIndexOutOfBoundsException e) {
           System.out.println("배열의 크기가 잘못 되었습니다. 0 ~ 9 유효합니다.");
         }
       } // main
        
       public static void sub() throws ArrayIndexOutOfBoundsException {
         int[] array = new int[10];
         int i = array[10];
       }
     } // ThrowsTest
     ```
  
   
  
     
  
  3. `throw` : 강제로 `Exception`를 발생시켜 처리
  
     * `throw` 를 사용하여 고의로 `Excption`을 발생 시킬 수 있다
  
     * `new`를 이용해서 발생키는 예외 클래스의 객체 생성
  
       ```java
       Exception e = new Exception("고의로 에러 발생")
       ```
  
     * `throw`를 이용해서 예외 발생
  
     ```java
       throw e;
     ```
  
     
  
     ```java
     public class ExceptionThrow {
       public static void main(String[] args) {
         try {
           Exception e = new Exception("고의로 발생 시킴");
           throw e; // 예외를 발생
            
           // throw new Exception("고의로 발생시켰음."); 위의 2줄을 이처럼 1줄로 줄여쓰기 가능하다.
         } catch (Exception e) {
           System.out.println("에러 메세지 : " + e.getMessage());
           e.printStackTrace();
         } // try - catch
          
         System.out.println("프로그램이 정상 종료됨");
       } // main
     } // ExceptionThrow
     ```
  
  
  
  4. `exception re-throwing` : 예외 되던지기
  
     * 한 `method`에 발생할 수 있는 예외가 여럿인 경우
       * 몇개는 `try-catch`문으로 처리
       * 나머지는 호출한 `method`에서 처리
       * 양쪽에 나눠서 처리되도록 할 수 있다
     * `Exceptoin`을 처리 한 후 다시 `Exception `을 생성해서 호출한 `method`로 전달하는 것
     * `Exception` 이 발생한 `method`와 호출한 `method`, 양쪽에서 `Exception`을 처리해야 하는 경우에 사용
  
     ```java
     public class RethrowingTest {
       public static void main(String[] args) {
         try {
           method();
         } catch (Exception e) {
           System.out.println("main 메서드에서 예외가 처리 됨");
         }// try - catch
       } // main
        
       static void method() throws Exception {
         try {
           throw new Exception();
         } catch (Exception e) {
           System.out.println("method 메서드에서 예외가 처리 됨");
           throw e; // 다시 예외를 발생시킨다.
         } // try - catch
       } // method
        
     } // RethrowingTest
      
     /*
      * 결과
      *
      * method 메서드에서 예외가 처리 됨
      * main 메서드에서 예외가 처리 됨
      *
      */ 
     ```
  
     
  
  
  
   5. 사용자 `Exception`를 생성하여 처리
  
      * 기존의 정의된 `Exception Class`를 상속받아서 새로운 `Exception Class`를 정의 할 수 있다.
  
      ```java
      class MyException extends Exception {
        public MyException(String message) {
          super(message);
        } // MyException 생성자
      } // MyException extends Exception
       
      public class MyExceptionTest {
        public static void checkNegative(int number) throws MyException {
          if (number < 0) {
            throw (new MyException("음수는 안됩니다."));
          }
          System.out.println("다행히 음수가 아니군요");
        }
         
        public static void main(String[] args) {
          try {
            checkNegative(1);
            checkNegative(-1);
          } catch (MyException ex) {
            ex.printStackTrace();
          } // try catch
        } // main
      } // MyExceptionTest
      ```
  
      


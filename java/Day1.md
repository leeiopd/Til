# JAVA_Day1

## # 프로그램 개발 순서

* 일반적인 개발 순서
  * 소스파일
  * 컴파일
  * 파일 실행
  * 컴퓨터

* 소스파일
  * 프로그래밍 언어로 구현된 파일
  * 프로그래밍 언어 별 확장자가 다르다
    * c - "*.c"
    * jav - "*,java"
  * 프로그래밍 언어는 고급언어와 저급언어로 분류
    * 고급 언어 - C, JAVA 등 사람이 이해하기 쉬운 형태
    * 저급 언어 - '0'과 '1' 으로 표현하는 기계어
  * 고급언어로 작성 된 소스파일을 실행하려면 저급언어로 변환하는 과정이 필요
* 컴파일
  * 개발자가 작성한 소스 파일을 컴퓨터가 실행 하려면 고급 언어로 작성 된 소스 파일을 기계어로 변환해야 함
  * 변환작업 - `컴파일(Compile)`
  * 변환 프로그램 - `컴파일러(Compiler)`
    * C 언어 : ".c" 소스파일을 컴파일 하면 ".exe" 실행파일 생성
    * java 언어: ".java" 소스파일을 컴파일 하면 ".class" 실행파일 생성
* 자바 실행 파일
  * 자바는 다른 프로그램 언어와는 달리 컴파일 작업을 거쳐 생성된 파일이 기계어 코드가 아님
    * `바이트 코드(byte code)` 생성
  * 바이트 코드는 기계어가 아니기 때문에 컴퓨터에서 바로 실행 불가
  * 컴파일된 바이트 코드를 다시 기계어 코드로 변환해 주어야함
  * 바이트 코드를 기계어 코드로 변환하는 작업과 자바 프로그램 실행에 관련된 모든 작업은 `자바 가상 머신(JVM, Java Virtual Machine)`에서 담당



## # JVM

* 개요
  * JVM은 자바 실행 파일이 각 컴퓨터의 운영체제에 맞게 실행 될 수 있도록 기계어 코드로 변환작업을 한 후 자바 실행 파이를 구동함
  * 자바 실행 구조의 가장 큰 장점은 자바 실행파일이 실행되는 환경이 달라져도 추가적인 작업이 필요 없다는 점
  * `JVM`에서 각 운영체제에서 실행 할 수 있도록 처리
* JVM 실행 환경
  * 클래스 로더 (Class loader)
    * 자바 프로그램이 실행 될 때 가장 먼저 동작
    * 실행에 필요한 모든 `실행파일(".class")`을 찾아 준다.
  * 바이트 코드 검증(Byte code verifier)
    * 실행 파일의 코드를 검증
    * 실행 시점에 코드의 유혀성을 검증하는 과정을 거치므로 자바 프로그램은 보안에 강하다는 장점이 있음
  * JIT(Just In time) 컴파일러
    * 바이트 코드를 기계어 코드로 변환
    * `JIT 방식` - 소스파일을 실행 파일로 변환하는 것처럼 파일 전체를 한번에 기계어로 변환
      * <-> 인터프리터 방식
* 개발환경
  * 자바 플랫폼
    * JAVA SE(Java Platform, Standard Edition)
      * 테스크톱, 서버, 임베디드 시스템 개발을 위한 표준 자바 플랫폼으로 자바의 기본 개발환경을 제공
      * 자바 개발환경인 JDK와 자바 런타임 환경이 JRE 등 두가지로 나누어 제공했지만 Java11 버전부터는 하나로 합쳐 제공
    * Java EE(Java Enterprise Eidtion)
      * Java SE에 웹 서버 역할을 추가한 것으로 자바 애플리케이션을 동작시킬 수 있는 컨테이너등을 표준화한 플랫폼
      * 웹 프로그래밍에서 사용하는 JSP, Servlet과 비즈니스 모듈을 담당하는 EJB, 서버의 자원을 관리해주는 JNDI등의 기술이 있다.
    * Java ME(Java Micro Edition)
      * 모바일이나 내자형 장치처럼 메모리, 디스플레이, 전력 용량 등이 제한된 소형장치에서 실행되는 자바 어플리케이션을 위해 경량하된 기술을 지원하는 플랫폼



## # 변수

* 변수 이름
  * 첫 글자는 `'문자', '_', '$'` 중 하나로 시작해야 한다. 숫자로 시작 할 수 없다.
  * 첫 글자는 소문자로 시작하는 것이 관례
  * 공백을 포함 할 수 없다
  * 대소문자를 구분한다
  * 길이에 제한이 없다
  * 예약어를 사용할 수 없다
    * 예약어 : 포르갦 언어에서 내부적으로 기능이 정해져 있는 단어
* 표기법
  * 카멜 표기법
    * firstName
    * 변수명이나 함수명에 사용
  * 파스칼 표기법
    * FirstName
    * 클래스명에 사용
  * 스네이크 표기법
    * first_name



## # 데이터

* 종류
  * 논리 타입
    * ex) boolean isMarry = true;
  * 문자 타입
    * ex) char gender = 'F';
  * 정수 타입
    * ex) int age = 23;
  * 실수 타입
    * ex) double PI = 3.14;
  * 참조 타입
    * ex) String name = "Amy";
* 논리 타입
  * boolean
    * 1byte
    * true/false
* 문자 타입
  * char
    * 2byte
    * 한 글자의 문자
    * 유니코드
      * char c = '\u0057';
      * System.out.println(c) // W
* 정수 타입
  * byte
    * 1byte
    * -128 ~ 127
  * short
    * 2byte
    * -32,768 ~ 32,767
  * int
    * 4byte
    * -2,147,483,648 ~ 2,147,483,647
  * long
    * 8byte
    * -2^63 ~ (2^63 - 1)
* 실수 타입
  * 부호와 소수점 자리를 표현하기 위해 `가수(Mantissa)`와 `지수(Exponent)`로 분리하여 저장
  * float
    * 4byte
    * float 타입을 저장하기 전 멤리에 임시로 저장하는데, 실수는 기본적으로 메모리에 임시로 저장 될 때 double 타입으로 저장되기 때문에 임시 저장시 float 타입으로 처리 해 주어야함
    * ex) float exampleFloat = 1136.50F;
  * double
    * 8byte
    * dafualt
* 참조 타입
  * 기본 데이터 타입
    * boolean
    * char
    * byte
    * short
    * int
    * long
    * float
    * double
  * 참조 데이터 타입
    * 그 외
  * 참조 타입 변수에는 데이터 자체가 아니라, 데이터가 저장된 메모리의 주솟값을 저장



## # 제어문

* 어노테이션
  * Java5 부터 제공된 주석
  * @ 기호로 시작
  * 어노테이션도 일종의 주석이므로 프로그램 실행과는 상관 없음, 하지만 단순한 코드 설명이 아니라 컴파일러에게 정보를 전달하는 역할
  * 컴파일러는 컴파일 할 때, 어노테이션 정보를 보고 그에 맞게 처리
  * ex)
    * @Override
    * @Deprecated
    * @SuppressWarnings("unchecked")
# Java_WrapperClass

* `Java` 는 데이터를 `Class` 나 객체 외에 (`int`, `double`, `char` 및 `boolean` 과 같은) 기초 `type` 을 가진다
* `Java` 에서는 `기본형` 과 `객체 참조` 같은 구자기 타입을 관리 데이터를 가짐
  * 데이터 저장 시, 기본형 타입의 변수에 저장하는 방법과 다양한 객체를 저장 할 수 있는 컨테이너 역할을 하는 객체를 생성 할 수 있다.



* `Wrapper Class` 

  * 특정 기본형 타입을 나타냄

  * `Wrapper Class` 의 구성자는 저장할 `기본형 타입` 값을 받음

    | 기본형 타입 | Wrapper Class |
    | :---------: | :-----------: |
    |    byte     |     Byte      |
    |    short    |     Short     |
    |     int     |    Integer    |
    |    long     |     Long      |
    |    float    |     Float     |
    |   double    |    Double     |
    |    char     |   Charater    |
    |   boolean   |    Boolean    |
    |    void     |     Void      |



* `Boxing` / `UnBoxing`
  * `Wrapper Class` 산술 연산을 위해 정의된 클래스가 아니기 때문에, 이 클래스의 인스터늣에 저장된 값을 저장하는 새로운 객체의 생성 및 참조만 가능
  * `Boxing`
    * 기본 자료형을 `Wrapper Class` 의 객체로 변경하는 과정
    * 기본형 -> 참조형
  * `UnBoxing`
    * 각각의 객체를 기본 자료형으로 변경하여 사용하는 과정
    * 참조형 -> 기본형
  * `Auto Boxing` / `Auto UnBoxing`
    * `JDK 1.5` 이후에는 자동으로 `Boxing` / `UnBoxing` 을 처리하도록 지원
  * 내용물의 `동치` 검사
    * `==` 기호 대신 `equals()` 메소드 사용
    * `Wrapper Class` 이고 `객체` 이기 때문에 `==` 연산은 두 객체의 `인스턴스 참조(주소값)` 을 비교하게됨


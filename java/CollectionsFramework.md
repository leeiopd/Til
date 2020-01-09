#  Collections Framework

### Collections Frameworks

* 용어
  * Java가 제공하는 잘 정의 된 객체의 그룹을 다루기 위한 `framework`
  * `Collection` 은 `Java collection framework` 를 구성하는 2개의 그룹중 한 그룹의 최상위 레벨 인터페이스
* `Collections` 는 `static` 메소드만으로 구성된 구성된 유틸리티 클래스
  
* 구성
  * `Collection` : 최상위 인터페이스
    * `Set` : 순서가 없는 컬렉션, 중복 허용 X, 순서X (index 접근 X)
      * `set`은 `List` 처럼 인덱스로 검색하는 메소드 대신, 전체 객체를 대상으로 한 번 씩 다 가져오는 반복자, Iterator 제공
      * `HashSet` : `Set` 의 대표적인 자료 구조
        * `Hash Algoritm` : 해시 함수를 사용하여 데이터를 해시 테이블에 저장하고, 다시 그것을 검색하는 알고리즘
          * 문자열을 `HashSet` 에 저장할 경우, 같은 문자열을 갖는 `String` 객체는 동등한 객체로, 다른 문자열을 갖는 `String` 는 다른 객체로 간주된다.
          * `String` 클래스가 `hashCode()`와 `equlas()`메소드를 오버라이딩 하여, 같은 문자열일 경우 `hashCode()` 리턴이 같게, `equals()`의 리턴값은 `true` 로 나오도록 구현해 놓았기 때문
        * `contains()` 메소드를 이요하여 자료구조안에 아이템이 있는지 확인
      * `TreeSet` : `red-black` 이라는 트리에 데이터를 담음, 값에 따라 순서가 정해진다. HashSet보다 성능상 느림.
        * `Sorted` - 기존 데이터 구조에 정렬 속성을 추가한 자료구조
        * `data` 들이 자동 오름차순 정렬 됨
        * `HashSet` 의 메소드와 동일한 메소드 제공
        * 특별히 정렬된 순으로 순회가 유리한 메소드를 제공
        * `HashSet` -> `TreeSet` - `addAll()` 메소드
      * `LinkedHashSet` : 연결된 목록 타입으로 구현된 `hash table`에 저장, 저장된 순서에 따라 값이 정렬되지만 가장 느림.
    * `List` : 순서가 있는 컬렉션, 중복 허용
      * `ArrayList` : 객체 생성 시 크기를 지정할 필요가 없는 배열, 비동기
        * 동기화 필요 시 `Collections.syschronizeList()` 메소드를 통해 동기화가 보장되는 List를 반환하여 사용 
        * `resizable`
      * `Vector` : 객체 생성 시 크기를 지정할 필요가 없는 배열, 동기화 보장
        * 동기화를 보장 할 필요가 없는 경우 `ArrayList` 추천
          * 동기화를 필요한 경우라도 `ArrayList` 를 동기화 시켜 사용하는 것을 추천
      * `LinkedList` : `ArrayList` 와 동일하지만, `Queue` 인터페이스를 구현했기 때문에 `FIFO Queue` 작업을 수행
        * 비동기
        * 동기화 필요 시 `Collections.syschronizeList()` 메소드를 통해 동기화가 보장되는 `List` 를 반환하여 사용 
        * `ArrayList` 와 유사, `Queue/Deque` 속성과 메소드를 가지고 있음.
        * 양방향 포인터 구조
          * 중간 `삽입/삭제`가 빈번 할 수록 효율적
      * `Stack` : `Deque` 인터페이스 속성을 물려받아 메소드만 `LIFO` 에 맞게 정의.
        * `LIFO` 지원
    * `Queue`
      * `LinkedList`
      * `PriorityQueue`
  * Map : `Key` 와 `Value` 값의 쌍으로 구성된 객체의 집합을 처리하기 위한 인터페이스, 중복 `Key`허용 X
    * `Key` 값은 모두 객체
    * `Value는` 중복저장이 가능/ `Key` 는 불가능
    * 중복 저장시 새로운 값으로 대체됨
    * `value` 순 정렬 지원 X
    * `HashMap` : `Map` 인터페이스를 구현하기 위해 해시테이블을 사용한 클래스
      * 중복 불가, 순서 없음
      * `Key`/`Value` 값으로 `null` 허용
    * `HashTable` : `Map` 인터페이스가 아닌 `Directory` 추상 클래스를 구현
      * 동기화를 기본으로 지원
      * 일반적인 경우 성능 문제로 잘 사용하지 않음
    * `TreeMap` : `data` 들이 `Key` 를 기준으로 defualt로 오름차순 정렬 됨, 동기화 미지원
    * `LinkedHashMap` : 삽입 순서로 `iteration` 될 수 있는 `HashMap`

# 09_OOP

# OOP with Python

## 용어 정리

```python
class Person:                      #=> 클래스 정의(선언) : 클래스 객체 생성
    name = '홍길동'                  #=> 멤버 변수(데이터 어트리뷰트)
    def greeting(self):            #=> 멤버 메서드(메서드)
        print(f'{self.name}')
```


```python
iu = Person()       # 인스턴스 객체 생성
daniel = Person()   # 인스턴스 객체 생성
iu.name             # 데이터 어트리뷰트 호출
iu.greeting()       # 메서드 호출
```



```python
# Person을 만들어봅시다.
class Person:
    name = '홍길동'
    
    def greeting(self):
        print(f'{self.name}')
```

* 클래스와 인스턴스간의 관계를 확인해봅시다.

```python
lee = Person()
```

```python
isinstance(lee, Person)
```

```
True
```



##  `self` : 인스턴스 객체 자기자신

* C++ 혹은 자바에서의 this 키워드와 동일함. 
* 특별한 상황을 제외하고는 무조건 메서드에서 `self`를 첫번째 인자로 설정한다.
* 메서드는 인스턴스 객체가 함수의 첫번째 인자로 전달되도록 되어있다.



```python
# iu를 다시 인사시켜봅시다.
lee.greeting()
```

```
홍길동
```



```python
lee.name = '이재찬'
lee.greeting()
```

```
이재찬
```



```python
# 다르게 인사를 시킬 수도 있습니다.
Person.greeting(lee)
```

```
이재찬
```



```python
# 아래와 같이 greeting에 self를 넣지 않으면, lee.greeting() 으로 호출이 불가능 하다. (TypeError 발생)
# 이유  : lee.greeting()은 Person.greeting(lee)와 같다.
# 우리가 함수에서 인지가 선언되지 않은데 넘겨줄 수 없었던 것 처럼 여기에서도 오류가 뜨는 것이다.
# ex) random.choice([1, 2, 3], 6)
class Person:
    name = '홍길동'
    
    def greeting():
        print(f'안녕하세요?')
```

```python
lee = Person()
lee.greeting()
```

```python
# 인자가 없는데 1개가 주어져서 0 개가 필요한데 1개를 받았다고 오류가 발생.
# class 내의 self의 선언이 필요함.

lee.greeting()
lee = persion   #두개는 같은 선언.
```



```python
def greeting(name):
    print('name')
```

```python
greeting('hi')
```

```
name
```



* 클래스 선언부 내부에서도 반드시 self를 통해 데이터 어트리뷰트에 접근 해야 합니다.

```python
# 예시를 봅시다.
name = '??????????'

class Person:
    name = '홍길동'
    def greeting(self):
        print(f'안녕하세요? {name}')
```

```python
hong = Person()
hong.greeting() # {name}은 전역변수 name을 호출함
```

```
안녕하세요? ??????????
```



```python
# 예시를 봅시다.
name = '??????????'

class Person:
    name = '홍길동'
    def greeting(self):
        print(f'안녕하세요? {self.name}') # {self.name}은  class안의 name을 호출.
```

```python
hong = Person()
hong.greeting()
```

```
안녕하세요? 홍길동
```



## 클래스-인스턴스간의 이름공간

* 클래스를 정의하면, 클래스 객체가 생성되고 해당되는 이름 공간이 생성된다. 

* 인스턴스를 만들게 되면, 인스턴스 객체가 생성되고 해당되는 이름 공간이 생성된다. 

* 인스턴스의 어트리뷰트가 변경되면, 변경된 데이터를 인스턴스 객체 이름 공간에 저장한다.

* 즉, 인스턴스에서 특정한 어트리뷰트에 접근하게 되면 인스턴스 -> 클래스 순으로 탐색을 한다.

```python
# iu에게 이름을 지정해줍시다.
hong.name = '홍!'
hong.greeting()
```

```python
hong.phone = '010'
```



## 생성자 / 소멸자

* 생성자는 인스턴스 객체가 생성될 때 호출되는 함수이며, 소멸자는 객체가 소멸되는 과정에서 호출되는 함수입니다.

```python
def __init__(self):
    print('생성될 때 자동으로 호출되는 메서드입니다.')
    
def __del__(self):
    print('소멸될 때 자동으로 호출되는 메서드입니다.')
```

```
__someting__
```

위의 형식처럼 양쪽에 언더스코어가 있는 메서드를 스페셜 메서드 혹은 매직 메서드라고 불립니다.

```python
# 생성자와 소멸자를 만들어봅시다.
class Person:
    name = '홍길동'
    def __init__(self): # __init__ : 생성자, class가 생성될 때 실행.
        print('응애!')
              
    def greeting(self):
        print(f'안녕하세요? {self.name}') 
    
    def __del__(self): # __del__: 소멸자, class가 소멸될 때 실행.
        print('으억')
        
# class를 만들때 생성되는 class도 python 내부의 object class를 상속받아서 만들어지게 되고
# __init__, __del__ 과 같은 method들은 def 로 선언 시 상속받은 내용에서 overriding 하게 되는 것임
```

```python
#  생성시켜봅시다.
p1 = Person()
```

```
응애!
```



```python
# 연속 생성
p1 = Person()
# p1에 연결되어있던 class와의 연결이 끊어지고 새로운 class가 생성되고 연결 -> 생성자 호출
# 그리고 다음으로 이전의  class가 소멸 -> 이전 class의 소멸자 호출
#
# 1. 생성자
# 2. 소멸자 순으로 보이게 됨.
```

```
응애!
으억
```



```python
# 소멸시켜봅시다.
del p1
```

```python
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-55-a63efbf89462> in <module>
      1 # 소멸시켜봅시다.
----> 2 del p1

NameError: name 'p1' is not defined
```



```python
p1 = Person() # Person의 class 생성 후 p1에 새로 생성된 class의 주소를 연결.
p2 = p1       # p1의 주소를 가르키는 p2 생성, 
```

* 생성자 역시 메소드이기 때문에 추가적인 인자를 받을 수 있습니다.



```python
# 아래와 같이 모두 사용할 수 있습니다!
def __init__(self, parameter1, parameter2):
    print('생성될 때 자동으로 호출되는 메서드입니다.')
    print(parameter1)

def __init__(self, *args):
    print('생성될 때 자동으로 호출되는 메서드입니다.')

def __init__(self, **kwagrs):
    print('생성될 때 자동으로 호출되는 메서드입니다.')
```

* 따라서, 생성자는 값을 초기화하는 과정에서 자주 활용됩니다. 

* 아래의 클래스 변수와 인스턴스 변수를 통해 확인해보겠습니다.



## 클래스 변수 / 인스턴스 변수

```python
class Person:
    population = 0              # 클래스 변수 : 모든 인스턴스가 공유함.
    
    def __init__(self, name):   
        self.name = name        # 인스턴스 변수 : 인스턴스별로 각각 가지는 변수
```



```python
# 위의 생성자와 인사하는 메소드를 만들어봅시다.
class Person:
    population = 0
    
    def __init__(self, name, age):
        self.name = name  # name을 입력받아 인스턴수 변수로 선언
        self.age = age    # age를 입력받아 인스턴수 변수로 선언
        Person.population += 1
        
    def greeting(self):
        print(f'{self.name} 입니다. {self.age}살')
```

```python
# 본인의 이름을 가진 인스턴스를 만들어봅시다.
p1 = Person('이재찬', 25)
```

```python
# 이름을 출력해봅시다.
p1.name
```

```
'이재찬'
```



```python
# 옆자리 친구의 이름을 가진 인스턴스를 만들어봅시다.
p2 = Person('토마스', 25)
```

```python
# 이름을 출력해봅시다.
p2.name
```

```
'토마스'
```



```python
# population을 출력해봅시다.
Person.population
```

```
2
```



```python
# 물론, 인스턴스도 접근 가능합니다. 왜일까요?!
p1.population
```

```
2
```

* 인스턴스 공간안에 population이 없기때문에 class 영역에서 호출해옴.



## 정적 메서드 / 클래스 메서드

* 메서드 호출을 인스턴스가 아닌 클래스가 할 수 있도록 구성할 수 있습니다. 

* 이때 활용되는게 정적 메서드 혹은 클래스 메서드입니다.

* 정적 메소드는 객체가 전달되지 않은 형태이며, 클래스 메서드는 인자로 클래스를 넘겨준다.

```python
# Person 클래스가 인사할 수 있는지 확인해보겠습니다.
Person.greeting()
```

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-84-6d9af1c11039> in <module>
      1 # Person 클래스가 인사할 수 있는지 확인해보겠습니다.
----> 2 Person.greeting()

TypeError: greeting() missing 1 required positional argument: 'self'
```



```python
# 이번에는 Dog class를 만들어보겠습니다.
# 클래스 변수 num_of_dogs 통해 개가 생성될 때마다 증가시키도록 하겠습니다. 
# 개들은 각자의 이름과 나이를 가지고 있습니다. 
# 그리고 bark() 메서드를 통해 짖을 수 있습니다. 
class Dog :
    
    def __init__ (self, name, age):
        self.name = name
        self.age = age
    
   
    def bark(self):
        print('멍')
```

```python
# 각각 이름과 나이가 다른 인스턴스를 3개 만들어봅시다.
nurung2 = Dog('누렁이', 3)
nurung2.bark()
```

```
멍
```



```python
Dog.bark()
```

```python
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-98-f8fbf66ba0be> in <module>
----> 1 Dog.bark(self)

NameError: name 'self' is not defined

```



* staticmethod는 다음과 같이 정의됩니다.

```python
@staticmethod
def methodname():
    codeblock
```



```python
# 단순한 static method를 만들어보겠습니다.
class Dog :
    
    def __init__ (self, name, age):
        self.name = name
        self.age = age
    
    @staticmethod
    def bark():
        print('멍')
```



* classmethod는 다음과 같이 정의됩니다.

```python
@classmethod
def methodname(cls):
    codeblock
```



```python
# 개의 숫자를 출력하는 classmethod를 만들어보겠습니다.
class Dog :
    cnt = 0
    
    def __init__ (self, name, age):
        self.name = name
        self.age = age
        self.cnt = 10000
        Dog.cnt += 1
    
    # 인스턴스 메소드 doggy.bark() == Dog.bark(doggy)
    def bark(self):
        print(f'멍, {self.name}')
        
    @classmethod
    def count(cls):
        print(f'{cls.cnt}')
```

```python
doggy = Dog('멈',2)
```

```python
# 만들어보고,
ui = Dog('댕댕이', 3)
```

```python
# 함수를 호출해봅시다.
Dog.count()
```

```
2
```



```python
ui.count()
# 인스턴스가 가지고 있는 cnt = 10000 but classmethod가 발동되어서 class의 cnt가 나온다
```

```
2
```



```python
# 개의 숫자를 출력하는 classmethod를 만들어보겠습니다.
class Dog :
    cnt = 0
    
    def __init__ (self, name, age):
        self.name = name
        self.age = age
        self.cnt = 10000
        Dog.cnt += 1
    
    # 인스턴스 메소드 doggy.bark() == Dog.bark(doggy)
    def bark(self):
        print(f'멍, {self.name}')
        
#   @classmethod
    def count(cls):
        print(f'{cls.cnt}')
```

```python
ui = Dog('댕댕이', 3)
```

```
ui.count() # classmethod를 삭제하니 인스턴스의 cnt값을 호출.
```

```
10000
```



```python
# 인스턴스 메소드
    def greeting(self):
        self.name
# 1. ui.greeting == Person.greeting(iu)
# 2. 첫번째 인자로 iu object가 넘어간다 (인스턴스)
# 3. self.name 형식으로 메소드 내부에서 인스턴스 변수를 가져올수 있다.

---------------------------------------------------------------------------------

@classmethod
def greeting(cls):
    cls.cnt
# 1. Person.greeting()
# 2. 첫번째 인자로 Person이 넘어간다.
```

```python
iu.greeting()
```

```python
Person.greeting(iu)
```
# Vanilla js

## JS_basic_day1_2019-07-03



> ### What is Java script?

* Front end에서 사용하는 언어
* 빠르게 발전하고 있어서 영향력이 커지고 있음
* 90년대 Effect를 주기위하여 만들어 졌음



> ### Versions of JS
>
> ### (ES5, ES6....)

* ECMAScript
  * ES5 == ECMAScript5
  * Specifications의 버전을 의미
* Specifications
  *  체계 메뉴얼
* Browser
  * Specification을 각 브라우저만의 방식으로 동작시키는 역할
* Vanilla JavaScript
  * Library를 사용하지 않는 JavaScript



> ### VanillaJS

```javascript
alert('Im Working. Im JS. Im Beautiful. Im worth it');
// alert 함수 - message 출력
```



```javascript
console.log('hi');
// console.log == print

a = 221; // 하나의 표현을 expressions 이라고 함
b = a - 5; //expression의 끝을 알리는 것은 ';'
console.log(b);
```

* JavaScript 변수

  1. Create varialble

  2. Initilize

  3. Use

  

```javascript
let A // Initilize
      // let: 변수의 선언자, let 선언되어 작동하지만 좋지 않음
```



```javascript
let x = 211;
let z = x - 5;
x = 4 // x를 선언해주었기 때문에 한번더 선언 할 필요는 없다.
console.log(a, b)
```





> Const/Var

```javascript
// const는 변하지 않는 변수를 선언
const k = 211;
let j  = k - 5;
// k = 4; // TypeError: Assignment to constant variable.
console.log(k, j);
```



```javascript
// var 변수를 바꿀 수 있는 선언
var p = 211;
var o = p - 5;
p = 4;
console.log(p, o);
```

* 변수가 바뀌어야 한다면 let
* 변하면 안된다면 const
* var는 3년전에 사용하던 선언



>  변수

* string, boolean, number , float

```javascript
// 변수의 사용은 기본 const
// 필요할 때 만 let

//String
const what = "Nicolas";
console.log(what);
// 이모테콘도 가능함


//Boolean
const wat = false;
const wht = true;
console.log(wat);  // 출력 flase
console.log(wht); // 출력 treu

//Number
const num = 111;
console.log(num)

//float
const flot = 55.1;
console.log(flot)
```



> Array

```javascript
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

// console.log(monday, tue, wed, thu, fri);

const dayOfWeek = [mon, tue, wed, thu, fri];

console.log(dayOfWeek);
// [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]

console.log(dayOfWeek[2]);
// 'Wed' 출력, 0 부터 idex

console.log(dayOfWeek[1231]);
// undefined
```



> Object

```javascript
const nicoInfo = {
  name:"Nico",
  age:33,
  gender:"Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Old Boy"],
  favFood: [
      {
        name:"Kimchi",fatty:false}, {name:"Cheese burger", fatty:true
      }
    ]
};

console.log(nicoInfo);
//{ name: 'Nico', age: 33, gender: 'Male', isHandsome: true }


console.log(nicoInfo.name);
// Nico

nicoInfo.gender = "Female"
console.log(nicoInfo.gender);
// Female
```



> Function

```javascript
// Funtion

function sayHello(name, age){
  console.log('Hello!', name, "you have to", age, "years of age.")
}

sayHello("Nicol", 15);
```




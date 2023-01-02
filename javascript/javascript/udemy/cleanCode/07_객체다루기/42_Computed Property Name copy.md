# Udemy - CleanCode

### 7. 객체 다루기

##### 42_Computed Property Name

* Javascript 의 속성은 property 를 가지고 있고, 계산된 property 를 동적으로 다룰 수 있다.



* 예1

```react
const LoginComponent = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
      // onChange 가 동작 할 때, event 객를 받아서 동작
      // input 의 value 는 오른쪽, name 은 왼쪽으로 입력됨
    });
  };

  return (
    <React.Fragment>
      <input value={state.id} onChange={handleChange} name="name" />
      <input value={state.password} onChange={handleChange} name="password" />
    </React.Fragment>
  );
};
```

* 동작
  1. input 이 onChange 될 때마다, handleChange 가 event 객체를 받는다.
  2. event target 에 접근하여 value 뿐만 아니라 속성인 "[ ]" 안의 name 도 동적으로 접근한다.



* 예2

```javascript
// redux 문법

const noop = createAction("INCREMENT");

const reducer = handleActions(
  {
    [noop]: (state, action) => ({ counter: state.counter + action.payload }),
  },
  { counter: 0 }
);
```



* 예3

```javascript
// Vuex 문법

import Vuex from "vuex";
import { SOME_MUTATION } from "./mutation-types";

export const SOME_MUTATION = "SOME_MUTATION";

const store = new Vuex.Store({
  state: {
    // some code...
  },
  mutations: {
    // computed property name
    [SOME_MUTATION](sate) {},
    // [함수명](매개변수){함수 몸체}
  },
});
```





* 예4

```javascript
const funcName0 = "func0";
const funcName1 = "func1";
const funcName2 = "func2";

const obj = {
  [funcName0]() {
    return "func0";
  },
  [funcName1]() {
    return "func1";
  },
  [funcName2]() {
    return "func2";
  },
};

for (let index = 0; index < 3; index++) {
  console.log(obj[`func` + index]());
}
```

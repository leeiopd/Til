# JS - async/await 반복문

> forEach를 사용하여 비동기호출(async/await) 을 하였을때 비동기 호출이 완료되지 않은 상황에서 forEach문이 종료되는 현상 발생



### 1. async / await 를 이용한 비동기 처리 함수

```javascript
async function testFnc(){
  const  test = awiat this.testApi();
}
```



### 2. forEach 문에서의 async / await

```javascript
function wait(ms){
  return new Promise(resoleve => setTimeout(resolve, ms))
}

async function waitLog(item){
  await wait(500);
  console.log("waitLog : ${item}")
}

async function testFnc(){
  [1, 2, 3].forEach(async index => await this.waitLog(index));
  console.log('end');
}
```



- 실행 결과

  ```bash
  > testFnc();
    end
    >Promise{<resolved>: undefined}
    waitLog : 1
    waitLog : 2
    waitLog : 3
  ```

  - end 가 먼저 실행되고 1,2,3이 실행되는 결과가 나왔다.
  - forEach는 반복문 전체가 종료되는 것에 대한 결과를 기다려주지 않기 때문에, end 가 먼저 실행되고 1, 2, 3 이 순차적으로 실행되었다.



### # 해결1. For ... Of

```javascript
async function testFnc(){
  const array = [1, 2, 3];
  
  for (const index of array){
    await this.waitLog(index)
  }
  
  console.log('end')
}
```

- 반복문의 결과가 완료된뒤 진행하려면 `forEach가` 아닌 `For...Of` 를 사용하자



- 실행결과

  ```javascript
  > testFnc();
    > Promise {<pending>}
    waitLog : 1
    waitLog : 2
    waitLog : 3
    end
  ```

  - 실행 순으로 출력되는 모습을 확인 할 수 있다.





### # 해결2. 비동기 병렬 처리

- async / await 를 사용하여 비동기 작업을 배열로 처리하는 경우 순서가 보장되어야 하는 상황이 아니라면 병렬 처리를 통해 최적화를 할 수 있다.



```javascript
async function testFnc() {
    const arrays = [1, 2, 3];
    const arrayPromises = arrays.map(this.waitLog);
    await Promise.all(arrayPromises);
    console.log('end');
}
```

- map 과 promise.all 을 이용하게되면 병렬 처리가 가능하다.
- 우선 map을 이용하여 promise를 반환하도록 하고, 이를 promise.all을 이용하여 한번에 처리하게 하면 더욱 빠른 처리가 가능하다.
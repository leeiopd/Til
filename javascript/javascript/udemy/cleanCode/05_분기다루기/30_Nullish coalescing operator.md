# Udemy - CleanCode

### 5. 분기 다루기

##### 30_Nullish coalescing operator



* Nullish coalescing operator (Null 병합 연산자)

  ```javascript
  function createElement(type, height, width) {
    const element = document.createElement(type || "div");
  
    element.style.height = String(height || 10) + "px";
    element.style.width = String(width || 10) + "px";
  
    return element;
  }
  
  const el = createElement("div", 0, 0);
  
  console.log(el.style.height); // 10
  console.log(el.style.width); // 10
  ```
  
  * 0 이 falsy 로 판단되어 10 으로 설정
  
  
  
  
  ```javascript
  function createElement(type, height, width) {
    const element = document.createElement(type ?? "div");
  
    element.style.height = String(height ?? 10) + "px";
    element.style.width = String(width ?? 10) + "px";
  
    return element;
  }
  
  const el = createElement("div", 0, 0);
  
  console.log(el.style.height);
  console.log(el.style.width);
  
  ```
  
  * 좌항이 null 이거나 undefined 일때, 우항이 사용됨
  * null 과 undefined 의 판단 에만 사용해야함
  
  
  
  
  
  
  ```javascript
  console.log(null||undefined??"foo")
  // SyntaxError: Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses
  
  console.log((null||undefined)??"foo") // "foo"
  ```
  
  * Logial expressions 과 Coalesce expressions 는 혼합하여 사용 할수 없다.
  * 연산자 우선순위를 명시적으로 표시하면 사용 가능

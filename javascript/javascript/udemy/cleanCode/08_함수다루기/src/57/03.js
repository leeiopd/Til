/**
 * void & return
 */

class Parent {
  parentMethod() {
    console.log("parentMethod");
  }

  parentMethodArrow = () => {
    console.log("parentMethodArrow");
  };

  overrideMethod = () => {
    return "Parent";
  };
}

class Child extends Parent {
  childMethod() {
    super.parentMethod();
  }
  childMethodCallParentArrow() {
    super.parentMethodArrow();
  }

  overrideMethod() {
    return "child";
  }
}

new Child().childMethod(); // parentMethod
new Child().overrideMethod(); // Parent
new Child().childMethodCallParentArrow(); // Error, (intermediate value).parentMethodArrow is not a function

// arrow function 은 class 에서 구현 했을때
// 생성자 함수에서 초기화되는 현상이 발생

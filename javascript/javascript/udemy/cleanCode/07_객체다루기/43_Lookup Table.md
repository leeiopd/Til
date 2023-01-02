# Udemy - CleanCode

### 7. 객체 다루기

##### 43_Lookup Table

* Lookup Table: Key 와 Value 를 쌍으로 나열된 Table



* IF

```react
function getUserType(type) {
  if (type === "ADMIN") {
    return "관리자";
  } else if (type === "INSTRUCTOR") {
    return "강사";
  } else if (type === "STUDENT") {
    return "수강생";
  } else {
    return "해당 없음";
  }
}
```



* Swich

```javascript
function getUserType(type) {
  switch (type) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "수강생";
    default:
      return "관리자";
  }
}
```



* Lookup Table 1

```javascript
function getUserType(type) {
  // USER_TYPE 상수
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    UNDEFINED: "해당 없음",
  };

  // return USER_TYPE[type] || "해당없음";

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
  // nullish operator
}
```

- 상수를 활용한 Lookup Table
- return 값이 증가하여도 간단히 처리 가능



* Lookup Table 2

```javascript
function getUserType(type) {
  return (
    {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "수강생",
    }[type] ?? "해당 없음"
  );
}
```

- Short coding - 추천 X

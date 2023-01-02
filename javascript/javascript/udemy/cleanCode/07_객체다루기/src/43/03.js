/**
 * Object Lookup Table
 */

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

/**
 * 복잡한 인자 관리하기
 */

function createCar(name, brand, color, type) {
  return { name, brand, color, type };
}

function createCar2({ name, brand, color, type }) {
  return { name, brand, color, type };
}

createCar2("차량 이름", { brand: "브랜드", color: "색", type: "타입" });

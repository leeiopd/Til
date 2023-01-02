/**
 * 복잡한 인자 관리하기
 */

function createCar({ name, brand, color, type }) {
  if (!name) {
    throw new Error("Name is a required"); // Name is a required
  }

  if (!brand) {
    throw new Error("Brand is a required");
  }

  return { name, brand, color, type };
}

createCar("차량 이름", { color: "색", type: "타입" }); // Name is a required

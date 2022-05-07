function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = String(height || 10) + "px";
  element.style.width = String(width || 10) + "px";

  return element;
}

const el = createElement("div", 0, 0);

console.log(el.style.height);
console.log(el.style.width);


console.log(null||undefined??"foo")
console.log((null||undefined)??"foo")
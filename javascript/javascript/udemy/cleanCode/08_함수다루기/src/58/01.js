/**
 * Callback Function
 */

someElement.addEventListener("click", function (e) {
  console.log("클릭이 되었습니다");
});

DOMException.prototype.addEventListener = function (eventType, callbackFunc) {
  if (eventType === "click") {
    const clickEventObject = {
      target: {},
    };

    callbackFunc(clickEventObject);
  }
};

function getElements() {
  const result = {};

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

///////////////////////////////////////

function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

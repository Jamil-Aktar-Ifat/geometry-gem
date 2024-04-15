// function parallelogramCalc() {
//   const baseInput = document.getElementById("parallelogram-base");
//   const baseValue = baseInput.value;
//   const base = parseFloat(baseValue);
//   console.log(base);
// }

function parallelogramCalc() {
  const base = getInputValueByID("parallelogram-base");
  console.log("Base: ", base);

  const height = getInputValueByID("parallelogram-height");
  console.log("Height: ", height);

  const area = base * height;
  console.log("Area: ", area);

  //   const displayArea = document.getElementById("parallelogram-area");
  //   displayArea.innerText = area;

  setInnerTextByID("paralleogram-area", area);
}

function getInputValueByID(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const inputValue = parseFloat(inputText);
  //   console.log(inputValue);
  return inputValue;
}

function setInnerTextByID(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

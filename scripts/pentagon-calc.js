function pentagonAreaCalc() {
  const perimeter = getInputValueByID("pentagon-perimeter");
  //   console.log(perimeter);

  const apo = getInputValueByID("pentagon-apo");
  //   console.log(apo);

  const area = 0.5 * apo * perimeter;

  setInnerTextByID("pentagon-area", area);
}

function getInputValueByID(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputText = inputField.value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}

function setInnerTextByID(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function rectangleCalc() {
  // get the lenght of rectangle
  const recLenInput = document.getElementById("rectangle-base");
  const recLenValue = recLenInput.value;
  const lenght = parseFloat(recLenValue);
  console.log(lenght);

  //   get the width of rectangle
  const recWidthInput = document.getElementById("rectangle-height");
  const recWidthValue = recWidthInput.value;
  const width = parseFloat(recWidthValue);
  console.log(width);

  //   calculate the area of the reactanlge
  const area = lenght * width;
  console.log("Area of rectangle is: ", area);

  //   display the area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}

/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. Display the area.
 * step-1: get base value of the triangle
 * step-2: added an ID in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get the value from the input field. (value is string at this point)
 * step-5: convert the value to a number using the parseFloat command
 */

function triangleCalc() {
  // triangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBase.value;
  const base = parseFloat(triangleBaseValue);
  console.log(base);

  // triangle height value
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeight.value;
  const height = parseFloat(triangleHeightValue);
  console.log(height);

  // calculate triangle area
  const area = 0.5 * base * height;
  console.log("Area of the triangle is: ", area);

  //display the area
  const triangleArea = document.getElementById("triangle-area-span");
  triangleArea.innerText = area;
}

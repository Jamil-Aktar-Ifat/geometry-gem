function ellipseCalc() {
  const ellipseMajor = getInputValueByID("ellipse-major");
  //   console.log(ellipseMajor);
  const ellipseMinor = getInputValueByID("ellipse-minor");
  //   console
  const area = 3.14 * ellipseMajor * ellipseMinor;
  setInnerTextByID("ellipse-area", area);
}

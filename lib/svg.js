class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text, color) {
    if (text.length > 3) {
      throw new Error("Error!Text characters is greater than 3.")
    }
    this.textElement = `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shapes) {
    this.shapeElement = shapes.render();
  }
}

module.exports =SVG;
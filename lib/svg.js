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
      throw new Error("Error!Text character is greater than 3.")
    }
  }
}
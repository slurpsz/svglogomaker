const inquirer = require('inquirer');
const { Circle, Square, Triangle} = require('./lib/shapes')
const SVG = require('./lib/svg')
const {writeFile} = require('fs/promises');

inquirer
 .prompt([
  {
    message: "Enter logo text. (Text cannot exceed 3 characters)",
    type: "input",
    name: "logoText",
    validate: (text) => text.length <= 3 || "Text cannot be more than 3 characters.",
  },
  {
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number).",
    type: "input",
    name: "textColor"
  },
  {
    message: "Choose a logo shape.",
    type:"list",
    name: "shape",
    choices: ['Circle','Square','Triangle']
  },
  {
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number).",
    type: "input",
    name:"shapeColor"
  }
  ])
  .then(({ logoText, textColor, shape, shapeColor}) => {
    let logoShapes;
    switch (shape) {
      case "Circle":
        logoShapes = new Circle();
        break;
      case "Square":
        logoShapes = new Square();
        break;
      case "Triangle":
        logoShapes = new Triangle ();
        break;
    }
    logoShapes.setColor(shapeColor);

    const svg = new SVG();
    svg.setTextElement(logoText, textColor);
    svg.setShapeElement(logoShapes);
    return writeFile('logo.svg', svg.render());
  })
  .then(() => {
    console.log('Generated logo.svg');
  })
  .catch((error)=> {
    console.log(error);
    console.log('Problem Encountered.');
  })
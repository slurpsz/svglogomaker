const { it } = require("node:test");
const {Circle, Square, Triangle} = require("./shapes");

describe("Circle", () => {
  it("should render svg correctly for a red circle", () => {
    const circle = new Circle();
    circle.setColor("red")
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
  });
});
describe("Square", () => {
  it("should render svg correctly for a blue square", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
  })
});
describe("Triangle", () => {
  it("should render svg correctly for a pink triangle", () => {
    const triangle = new Triangle();
    triangle.setColor("pink");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink"/>');
  })
});
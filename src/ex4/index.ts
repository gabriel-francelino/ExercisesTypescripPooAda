import { Square } from "./entity/Square";
import { Circle } from "./entity/Circle";

const square = new Square(27.5)
const circle = new Circle(12.3)

const areaOfSquare = square.calculateArea()
const perimeterOfSquare = square.calculatePerimeter()
const areaOfCircle = circle.calculateArea()
const perimeterOfCircle = circle.calculatePerimeter()

console.log(`Area of square: ${areaOfSquare}`)
console.log(`Perimeter of square: ${perimeterOfSquare}`)
console.log(`Area of circle: ${areaOfCircle}`)
console.log(`Perimeter of circle: ${perimeterOfCircle}`)


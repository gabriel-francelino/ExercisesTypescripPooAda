import { Calculator } from "./calculator/Calculator";

const calculator = new Calculator();

const soma = calculator.sum(10, 20);
const subtracao = calculator.sub(23, 15)
const produto = calculator.dot(45, 3)
const divisao = calculator.div(16, 10)
const absoluto = Calculator.abs(-45)

console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)
console.log(`Produto: ${produto}`)
console.log(`Divisão: ${divisao}`)
console.log(`Valor absoluto: ${absoluto}`)



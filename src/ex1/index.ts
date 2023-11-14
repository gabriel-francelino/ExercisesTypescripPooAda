import {Car} from "./entity/Car"

const car1 = new Car("Fiat", "2010", "Vermelho")
const car2 = new Car("Gol", "2016", "Preto")
const car3 = new Car()

car3.model= "Fiat"
car3.year= "2004"
car3.color= "Azul"

car1.toString()
car2.toString()
car3.toString()

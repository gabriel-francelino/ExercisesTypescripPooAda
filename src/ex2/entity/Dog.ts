import { Animal } from "./Animal";

class Dog extends Animal {
    private _name: string;
    private _pawsNumber: number;

    constructor(
        name: string,
        breed: string,
        habitat: string,
        pawsNumber: number
    ) {
        super(breed, habitat, true);
        this._name = name;
        this._pawsNumber = pawsNumber;
    }

    makeSound(): void {
        console.log("Au au au...");
    }

    move(): void {
        console.log("The dog is moving...");
    }
}

export { Dog };

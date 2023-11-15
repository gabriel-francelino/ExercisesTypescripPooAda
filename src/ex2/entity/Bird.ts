import { Animal } from "./Animal";

class Bird extends Animal {
    private _fly: boolean;

    constructor(fly: boolean, breed: string, habitat: string) {
        super(breed, habitat, true);
        this._fly = fly;
    }

    makeSound(): void {
        console.log("Piu piu piu...");
    }

    move(): void {
        console.log("The bird is moving...");
    }
}

export { Bird };

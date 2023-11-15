abstract class Animal {
    private _breed: string;
    private _habitat: string;
    private _hasPaws: boolean;

    constructor(breed: string, habitat: string, hasPaws: boolean) {
        this._breed = breed;
        this._habitat = habitat;
        this._hasPaws = hasPaws;
    }

    makeSound(): void {
        console.log("The animal is making a sound");
    }

    move(): void {
        console.log("The animal is moving");
    }
}

export { Animal };

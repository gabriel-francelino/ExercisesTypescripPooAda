import { Engine } from "./Engine";

export class Car {
    private _color: string;
    private _numberOfDoors: number;
    private _transmissionType: string;
    private _brand: string;
    private _engine: Engine;

    constructor(
        color: string,
        numberOfDoors: number,
        transmissionType: string,
        brand: string
    ) {
        this._color = color;
        this._numberOfDoors = numberOfDoors;
        this._transmissionType = transmissionType;
        this._brand = brand;
        this._engine = new Engine(6500, "eletric");
    }

    start(): void {
        this._engine.start();
        console.log("The car is running!");
    }

    stop(): void {
        this._engine.stop();
        console.log("The car is stopped!");
    }

    accelerate(): void {
        this._engine.accelerate();
        console.log("The car is accelerating!");
    }

    brake(): void {
        this._engine.brake();
        console.log("The car is braking!");
    }
}

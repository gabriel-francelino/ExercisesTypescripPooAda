import { GeometricShape } from "./GeometricShapes";

export class Square implements GeometricShape {
    private _side: number;

    constructor(side: number) {
        this._side = side;
    }

    get side() {
        return this._side;
    }

    set side(value) {
        this._side = value;
    }

    calculateArea(): number {
        if (!this._side) {
            throw new Error(
                "It is not possible to calculate area of negative values"
            );
        } else {
            const area = this._side ** 2;
            return parseFloat(area.toFixed(2));
        }
    }
    calculatePerimeter(): number {
        if (!this._side) {
            throw new Error(
                "It is not possible to calculate perimeter of negative values"
            );
        } else {
            const perimeter = this._side * 4;
            return parseFloat(perimeter.toFixed(2));
        }
    }
}

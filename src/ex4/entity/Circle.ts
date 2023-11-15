import { GeometricShape } from "./GeometricShapes";

export class Circle implements GeometricShape {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    calculateArea(): number {
        if (!this._radius) {
            throw new Error(
                "It is not possible to calculate area of negative values"
            );
        } else {
            const area = Math.PI * this._radius ** 2;
            return parseFloat(area.toFixed(2));
        }
    }
    calculatePerimeter(): number {
        if (!this._radius) {
            throw new Error(
                "It is not possible to calculate perimeter of negative values"
            );
        } else {
            const perimeter = this._radius * 2 * Math.PI;
            return parseFloat(perimeter.toFixed(2));
        }
    }
}

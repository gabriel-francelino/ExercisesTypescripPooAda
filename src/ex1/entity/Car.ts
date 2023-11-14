class Car {
    private _model: string;
    private _year: string;
    private _color: string;

    constructor(model?: string, year?: string, color?: string) {
        this._model = model;
        this._year = year;
        this._color = color;
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get year() {
        return this._year;
    }

    set year(year: string) {
        this._year = year;
    }

    get color() {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }

    toString() {
        console.log(`\n----------------------`);
        console.log(`Modelo: ${this._model}`);
        console.log(`Ano: ${this._year}`);
        console.log(`Cor: ${this._color}`);
        console.log(`----------------------\n`);
    }
}

export { Car };

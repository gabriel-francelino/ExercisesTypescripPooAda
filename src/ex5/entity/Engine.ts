export class Engine {
    private _acceleration: number;
    private _maxRPM: number;
    private _ignitionType: string;
    private _isRunning: boolean;

    constructor(maxRPM: number, ignitionType: string) {
        this._acceleration = 0;
        this._maxRPM = maxRPM;
        this._ignitionType = ignitionType;
        this._isRunning = false;
    }

    start(): void {
        this._isRunning = true;
    }

    stop() {
        this._isRunning = false;
    }

    accelerate(): void {
        if (this._acceleration < 180) this._acceleration += 20;
    }

    brake(): void {
        if (this._acceleration > 0) this._acceleration -= 20;
    }
}

export class Calculator {

    sum(number1: number, number2: number): number {
        return number1 + number2;
    }

    sub(number1: number, number2: number): number {
        return number1 - number2;
    }

    dot(number1: number, number2: number): number {
        return number1 * number2;
    }

    div(number1: number, number2: number): number {
        return number1 / number2;
    }

    static abs(number: number): number {
        return number < 0 ? number * -1 : number;
    }
}

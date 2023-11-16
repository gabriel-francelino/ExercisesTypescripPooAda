import { InsufficientBalanceError } from "../exceptions/InsufficientBalanceError";

export class BankAccount {
    private _name: string;
    private _cpf: string;
    private _balance: number;
    private type: string;

    constructor(name: string, cpf: string, type: string) {
        this._name = name;
        this._cpf = cpf;
        this._balance = 0.0;
        this.type = type;
    }

    info(): void {
        console.log(
            "=================== ACCOUNT INFORMATION =================="
        );
        console.log(`Name: ${this._name}`);
        console.log(`CPF: ${this._cpf}`);
        console.log(`Balance: ${this._balance}`);
        console.log(`Type: ${this.type}`);
        console.log(
            "==========================================================\n"
        );
    }

    withdraw(value: number): void {
        if (value > this._balance) {
            // console.log('Insufficient balance');
            throw new InsufficientBalanceError("Insufficient balance");
        }

        this._balance -= value;
        console.log("Withdraw made successfully");
    }

    deposit(value: number): void {
        this._balance += value;
        console.log("Deposit made successfully");
    }
}

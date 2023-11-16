import { BankAccount } from "./bank/BankAccount";
import { InsufficientBalanceError } from "./exceptions/InsufficientBalanceError";

try {
    const account1 = new BankAccount("Gabriel", "123.456.789-10", "checking");
    account1.info();
    account1.deposit(100.0);
    account1.info();
    account1.withdraw(20.0);
    account1.info();
    account1.withdraw(500.0);
    account1.info();
} catch (InsufficientBalanceError) {
    console.log(InsufficientBalanceError.name);
    console.log(InsufficientBalanceError.message);
}

import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

 const EAccountType = { Saving: 1, Checking: 2, Credit: 3, Loan: 4 }
class TBankAccount {
    #balance = 0;
    #accountType;
    constructor(aAccountType){
        this.#balance = 100;
        this.#accountType = aAccountType
    }
// getter
    get balance(){
        return this.#balance
    }

    withdraw(amount){
        if (aAmount <= this.#balance){
        this.#balance -= aAmount;
        } else {
            printOut("Inssuciffient funds")
        }
    }
    get aAccountType(){
        return this.#accountType;
    
    }
set aAccountType(aAccountType){
    this.#accountType = this.#accountType;
    printOut("this changed to " + this.#accountType)
}
}




// account instance
const account1 = new TBankAccount();
account1.balance = 200;
printOut("account1: " + account1.balance);
account1.withdraw(200);
printOut("account1: " + account1.balance);
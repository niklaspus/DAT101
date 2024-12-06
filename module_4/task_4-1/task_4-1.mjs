"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const accountType = {Normal: "Brukskonto", Saving: "Sparekonto", Credit: "Kreditkonto", Pension: "Pensionkonto"};

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1891, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8389, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
  };

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;
   
    

    constructor(aType) {
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = CurrencyTypes.NOK;
        
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        let changeText = "Account type has changed from " + this.#type;
        this.#type = aType;
        changeText += " to " + this.#type;
        printOut(changeText)
    }
    getBalance() {
        return this.#balance + this.#currencyType.denomination;
    }
    deposit(aAmount, aType = CurrencyTypes.NOK) {
        let newAmount = aAmount / this.#currencyConvert(aType);
        this.#balance += newAmount;
        this.#withdrawCount = 0;
        let depText = "Deposited " + aAmount + this.#currencyType.denomination + " ";
        depText += " new balance is: ";
        depText += this.#balance.toFixed(2) + this.#currencyType.denomination;
        printOut(depText);
    }

    withdraw(aAmount, aType = CurrencyTypes.NOK) {
        let newAmount = aAmount;
        let canWdraw = true;
        let wText = "";
        
switch (this.#type) {
    case accountType.Saving:
        if (this.#withdrawCount < 3) {
            this.#withdrawCount++;
            canWdraw = true;
        } else {
            printOut(wText)
            canWdraw = false;
            wText = "Cant withdraw more than 3 times from a " + this.#type + " account.";
            

        }
        break;

    case accountType.Pension:
        canWdraw = false;
        wText = "Cant withdraw from a " + this.#type + " account.";
        break;
        }
        
        if (canWdraw) {
            
            this.#balance -= newAmount;
        let wText = "Withdrew " + aAmount + this.#currencyType.denomination +" ";
        wText += " new balance is ";
        wText += this.#balance.toFixed(2) + this.#currencyType.denomination; 
        printOut(wText);
        }
        printOut(wText);
    }

    setCurrencyType(aNewCurrType) {
        if(this.#currencyType === aNewCurrType) {
            return;
        }
        this.#balance = this.#balance * this.#currencyConvert(aNewCurrType);
        let text = "The account currency has been changed from ";
        text += this.#currencyType.name + " to " + aNewCurrType.name;
        text += newLine + " New balance is: ";
        text += this.#balance.toFixed(2) + aNewCurrType.denomination;
        this.#currencyType = aNewCurrType;
        printOut(text);

    }

    #currencyConvert(aType) {
        return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
    }

}
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(accountType.Normal + ", " + accountType.Saving + ", " + accountType.Credit + ", " + accountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let myAccount = new TAccount(accountType.Normal);
printOut("My account: " + myAccount.toString());
myAccount.setType(accountType.Saving);
printOut("My account: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(40)
myAccount.withdraw(20)
printOut("Account balance: " + myAccount.getBalance())
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(90);
myAccount.withdraw(20);
myAccount.withdraw(20);
myAccount.withdraw(20);
myAccount.withdraw(20);
myAccount.setType(accountType.Pension);
myAccount.withdraw(20);
myAccount.setType(accountType.Saving);
myAccount.withdraw(10);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100)
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.USD)
myAccount.setCurrencyType(CurrencyTypes.SEK)
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(60, CurrencyTypes.NOK);
myAccount.withdraw(40, CurrencyTypes.USD);

printOut(newLine);

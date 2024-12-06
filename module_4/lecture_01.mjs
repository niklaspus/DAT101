import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));




class TAdress {
    constructor(aStreet, aZip, aCity) {
        this.street = aStreet;
        this.zip = aZip;
        this.city = aCity;
    }

}

class TPerson extends TAdress {
    constructor(aFirstName, aLastName, aEmail, aStreet, aZip, aCity) {

    super(aStreet, aZip, aCity);
    this.firstName = aFirstName;
    this.lastName = aLastName;
    this.email = aEmail;    
    this.address = null;
    }                                                             
}

const = employee1 = new TEmployee (
    "Kari", "Norman", 
)

const person1 = new TPerson("Niklas" ,"Sjåvik" , "niklas.sjavik@gmail.com")
const address1 = new TAdress("gate 1", "1234", "drangedal")
printOut(person1.firstName + " " + person1.lastName + " "+ person1.email);
printOut (address1.street + " ")
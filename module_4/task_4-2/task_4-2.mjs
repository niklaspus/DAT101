"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 const arrayNums = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14,
    15, 16, 17, 18,
    19, 20];

let text = " ";
for (let i = 0; i < arrayNums.length; i++) {
    text += arrayNums[i] + ", ";
}
printOut(text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(arrayNums.join("¨ "));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const sentence = "Hei på deg, hvordan har du det?";
const arrayWords = sentence.split(" ");

arrayWords.every(everyWord);
function everyWord(aWord, aIndex) {
    printOut(aIndex + " " + (aIndex + 1) + " " + aWord);
    return true;
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const names = ["Anne", "Inger", "Kari", "Marit", 
"Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne",
 "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

 function elementRemove(aArray, aItem) {
    const result = aArray.indexOf(aItem);
    if(result > -1) {
        printOut("Kan fjerne " + " " + aItem + " fra array.");
        aArray.splice(result, 1);
    } else {
        printOut("Kan ikke fjerne " + " " + aItem + " fra array.")
    }
 }
elementRemove(names, "Inger");
printOut(names.join(", "))
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const names2 = [
"Jakob", "Lucas", "Emil", "Oskar",
"Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper",
"Mathias", "Jonas", "Tobias", "Liam",
"Håkon", "Theodor", "Magnus"];

const bothNames =names.concat(names2);
bothNames.forEach(printName);
function printName(aName) {
    printOut(aName);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {

    #Tile;
    #Author;
    #ISBN;

    constructor(aTile, aAuthor, aISBN) {
        this.#Tile = aTile;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }
    toString() {
        return this.#Tile + ", " + this.#Author + ", " + this.#ISBN;
    }
}

const bookArray = [
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0-593-20106-0"),
    new TBook("Frankenstein", "Mary Shelley", "978-0-553-21247-1"),
    new TBook("The Metamorphosis", "Franz Kafka", "978-0-812-98514-6")
];

bookArray.forEach(printBook);

function printBook(aBook) {
    printOut(aBook.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    Weekday2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    WorkDays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

    const keys = Object.keys(EWeekDays);
    printOut("Keys: " + keys.join(", "));
    const values = Object.values(EWeekDays);
    printOut("Values: " + values.join(", "));
    let valueKeys = Object.values(EWeekDays[keys[8]]);
    printOut("ValueKeys: " + valueKeys.join(", "));

    

    for(let index = 0; index < keys.length; index++) {
        let text = " ";
        const key = keys[index];
        text = key + "= ";

   
        const keyObj = EWeekDays[key];
        const keyObjKeys = Object.keys(keyObj);

        for(let i = 0; i < keyObjKeys.length; i++) {
            const keyObjKey = keyObjKeys[i];
            const keyObjVal = keyObj[keyObjKey];
            text += " " + keyObjKey + "= " + keyObjVal;
        }
        printOut(text);
    }





printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNums = [];
for(let i = 0; i < 35; i++) {
    const randomNum = Math.ceil(Math.random() * 20);
    randomNums.push(randomNum);
}

function sortNums(aValue1, aValue2) {
    return aValue1 - aValue2;
}

randomNums.sort(sortNums);
printOut("Ascending Array: " + randomNums.join(" "))
randomNums.reverse(sortNums);
printOut("Descending Array: " + randomNums.join(" "))

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const freq = [];
for(let i = 0; i < randomNums.length; i++) {
    const value = randomNums[i];
    if(freq[value]) {
        freq[value]++;
    } else {
        freq[value] = 1;
    }
}

let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq)

function sortFreq(aValue1, aValue2) {
    const freq1 = freq[aValue1];
    const freq2 = freq[aValue2];
    return freq2 - freq1;
}

let freqText = " ";
for(let i = 0; i < freqKeys.length; i++) {
    const freqKey = freqKeys[i];
    const freqValue = freq[freqKey]
    freqText += freqKey + ": " + freqValue + ", "
}
printOut(freqText)
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const table = [];
for(let row = 0; row < 5; row++) {
    const columns = [];
    for(let column = 0; column < 9; column++) {
        const cell = + row + ", " + column;
        columns.push(cell);
    }
    table.push(columns);
}

let tableText = " ";
for(let row = 0; row < table.length; row++) {
    const columns = table[row];

    for(let column = 0; column < columns.length; column++) {
        const cell = columns[column];
        tableText += "[" + cell + "]";
    }
    printOut(tableText)
    
}
printOut(newLine);

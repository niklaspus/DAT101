"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrint1 = "";
let txtPrint2 = "";
for (let start = 1, end = 10; start <= 10; start++, end--) { 
    txtPrint1 += " " + start.toString();
    txtPrint2 += " " + end.toString();
}
printOut(txtPrint1 + newLine);
printOut(txtPrint2 + newLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const answerNum = 30;
let guessNum = 0;
while(answerNum !== guessNum){
    guessNum = Math.ceil(Math.random() * 60);
}
printOut("Guess Number = " + guessNum.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
guessNum = 0;
let guessCount = 0;
let startTime = Date.now();
while(answerNum !== guessNum){
    guessCount++;
    guessNum = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Antall gjetninger " + guessCount.toString() + " Tok " + timeUsed.toString() + "ms.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let num = 2; num < 200; num++) {
    let isPrime = true;
    let divisor = 2;
    while (divisor < num) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        printOut(num + " ")
    }
}


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for(let line = 1; line <= 7; line++) {
    let lineTxt = "";
    for (let column = 1; column <= 9; column++){
        lineTxt += "K" + column + "R" + line + " ";
    }
    printOut(lineTxt)
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrintTask6 = "";
const points = Math.ceil(Math.random() * 237);
const percent = points / 236 * 100;

let grade;
if(percent <= 40) {
    grade = "F";
 } else if (percent <= 52) {
    grade = "E";
  } else if (percent <= 64) {
    grade = "D";
    } else if (grade <= 76) {
    grade = "C";
     } else if (percent <= 88) {
    grade = "B";
      } else if (percent <= 100) {
    grade = "A";
}

txtPrintTask6 += newLine + "Student got a total of " + points.toString() + " Points. ";
txtPrintTask6 += newLine + "This corresponds to " + percent.toFixed(0) + " % of possible amount of points, and therefore gives the student grade " + grade;




printOut(txtPrintTask6 + newLine);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let txtPrintTask7 = "";
String.prototype.numberOfOccurence = function (aSubstring) {
    const listStrings = this.split(aSubstring);
    return listStrings.length - 1;
};
let fullStraight = false;
let threePar = false;
let tower = false;
let yatsy = false;
let throwCounter = 0;

do {
    const diceOne = Math.ceil(Math.random() * 6);
    const diceTwo = Math.ceil(Math.random() * 6);
    const diceThree = Math.ceil(Math.random() * 6);
    const diceFour = Math.ceil(Math.random() * 6);
    const diceFive = Math.ceil(Math.random() * 6);
    const diceSix = Math.ceil(Math.random() * 6);
    const diceRoll = diceOne + "," + diceTwo + "," + diceThree + "," + diceFour + ", " + diceFive + ", " + diceSix;

    const countOne = diceRoll.numberOfOccurence("1");
    const countTwo = diceRoll.numberOfOccurence("2");
    const countThree = diceRoll.numberOfOccurence("3");
    const countFour = diceRoll.numberOfOccurence("4");
    const countFive = diceRoll.numberOfOccurence("5");
    const countSix = diceRoll.numberOfOccurence("6");
    const diceCount = countOne + ", " + countTwo + ", " + countThree + ", " + countFour + ", " + countFive + ", " + countSix;

    const o1 = diceCount.numberOfOccurence("1");
    const o2 = diceCount.numberOfOccurence("2");
    const o3 = diceCount.numberOfOccurence("3");
    const o4 = diceCount.numberOfOccurence("4");
    const o5 = diceCount.numberOfOccurence("5");
    const o6 = diceCount.numberOfOccurence("6");
    const occurenceDice = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + "," + o6;

    if (!yatsy) {
        yatsy = (o6 === 1)
        if (yatsy) {
            txtPrintTask7 += diceRoll + newLine;
            txtPrintTask7 += "Yatsy!" + newLine;
            txtPrintTask7 += "it took " + throwCounter + " Attempts.";
        }

    }
    if (!fullStraight){
        fullStraight = (o1 === 6);
        if (fullStraight) {
            txtPrintTask7 += diceRoll + newLine;
            txtPrintTask7 += "Full straight!" + newLine;   
            txtPrintTask7 += "It took " + throwCounter + " Attempts " + newLine + newLine;

        }
    }
    if(!threePar) {
        threePar = (o2 === 3);
        if (threePar) {
            txtPrintTask7 += diceRoll + newLine;
            txtPrintTask7 += "Three pair!" + newLine;
            txtPrintTask7 += "It took " + throwCounter + " Attempts" + newLine + newLine;
        }
    }
    if (!tower) {
        tower = (o2 === 1 && o4 === 1);
        if (tower) {
            txtPrintTask7 += diceRoll + newLine;
            txtPrintTask7 += "Tower!" + newLine
            txtPrintTask7 += "It took " + throwCounter + " Attempts"+ newLine + newLine;
        }
    }
    throwCounter++
}

while (yatsy === false) {
    printOut(newLine + txtPrintTask7 + newLine)
}
/* husk mulig newline?*/







printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

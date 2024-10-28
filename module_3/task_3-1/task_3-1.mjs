"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 6;

printOut("Wake up time = " +  wakeUpTime.toString());

if (wakeUpTime <= 7)  {
  printOut("I can take the bus to school."); 
} else if (wakeUpTime <= 8) {
  printOut("I can take the train to school");
} else  {
  printOut("I have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let integer = 3;

printOut("Value = " + integer.toString()); 
if (integer <0) {
  printOut(" Value is Negative"); 
  } else if (integer ==0) {
printOut("Value is Zero");
  } else {
    printOut("Value is Positive");
  }
   
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomInt = (min, max) => {
  min = Math.ceil(1)
  max = Math.floor(8)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const submittedFile = randomInt(1,8);
printOut("Submitted File Size: " + submittedFile.toString())

if (submittedFile >=4) {
  printOut("Thank You");
} else {
  printOut("The image is too small")
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Submitted File Size: " + submittedFile.toString());
if (submittedFile >=6) {
  printOut("Image is too large");
} else if (submittedFile >=4) {
printOut("Thank you")
} else {
  printOut("The image is too small")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  printOut("Month Is = " + monthName);
  
  if (monthName.includes("r")) {
printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let daysOfMonth = null;
switch (monthName) {
  case "January":
  case "Mai":
  case "Mars":
  case "Juli":
  case "August":
  case "December":
    daysOfMonth = 31;
break;
  case "April":
  case "Jun":
  case "September":
  case "November":
   daysOfMonth = 30;
  break;
  default:
    

    daysOfMonth = 28;
}
printOut("There is " + daysOfMonth  + " Days In  " + monthName);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName.includes("Mars Mai")) {
  printOut("The art gallery is open in " + monthName + ",Welcome")
} else if (monthName.includes("April")) {
  printOut("The art gallery is open in " + monthName + ",in the building next door")
} else {
  printOut("The art gallery is closed in " + monthName)
}
printOut(newLine);

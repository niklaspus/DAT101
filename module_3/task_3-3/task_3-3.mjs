"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function norDate() {
    let dateToday = new Date();
    const optionList = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    printOut(dateToday.toLocaleDateString("no-NB", optionList))
    return dateToday; // lå inn return i etterkant til part 2
}
norDate()
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function countDown() {
   const today = norDate() //henter date object dataen, og printer formateringen
   const release = new Date(2025, 4, 14);
   const difference = release - today;
   const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
   {
printOut("Det er " + daysLeft.toFixed(0) + " dager igjen til lanseringen av 2XKO!.")
   }
}

countDown()
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const circleRadius = {Radius: 1};

function circleCalc(aRadius, aProperty) {
    let Radius = 0;
    let diameter = 0;
    let circumference = 0;
    let area = 0;
    switch (aProperty) {
        case circleRadius.Radius:
            Radius = aRadius;
            diameter = (2 * Radius);
            circumference = (2 * diameter * Math.PI);
            area = (Math.PI * Radius * Radius);
            break;
        

    }
    printOut("Diameter is: " +  diameter);
    printOut("Circumference is: " + circumference.toFixed(2));
    printOut("Area is: " + area.toFixed(2));
}
circleCalc(3, circleRadius.Radius)


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rectangleMeasure = {Width: 1, Height: 2};

function rectangleCalc(aWidth, aHeight, aMeasure) {
   let Measure = 0;
   let Width = 0;
   let Height = 0;
   let circumferencePart4 = 0;
   let areaPart4 = 0;

   switch (aMeasure) {
    case rectangleCalc.Width && rectangleCalc.Height:
        Measure = aMeasure;
        Width = aWidth;
        Height = aHeight;
        circumferencePart4 = 2 * (Width + Height);
        areaPart4 = Width * Height;
        break;
   }
   printOut("Rectangle Width: " + Width.toFixed() + ", " + "Rectangle Height: " + Height.toFixed());
   printOut("Circumference is: " + circumferencePart4.toFixed(2));
   printOut("Areal is: " + areaPart4.toFixed(2));

}
rectangleCalc(4, 3, rectangleMeasure.Measure)

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const TempTypes = {Celsius: 1, Fahrenheit: 2, Kelvin: 3};

function convertTemp(aTemperature, aType) {
    let Celsius = 0;
    let Fahrenheit = 0;
    let Kelvin = 0;
    switch (aType) {
        case TempTypes.Celsius:
            printOut("Convert " + aTemperature + " Celsius");
                 Celsius = aTemperature;
                 Fahrenheit = (Celsius * 9/5)+ 32;
                 Kelvin = Celsius + 237.15;
                break;

            case TempTypes.Fahrenheit:
                printOut(newLine)
                printOut("Convert " + aTemperature + " Fahreinheit");
                
                 Fahrenheit = aTemperature;
                 Celsius = (Fahrenheit - 32) / 1.8;
                 Kelvin = Celsius + 273.15;
                break;

            case TempTypes.Kelvin:
                printOut(newLine)
                printOut("Convert from " + aTemperature + " Kelvin");

                 Kelvin = aTemperature
                 Fahrenheit = Celsius * 1.8 + 32; 
                 Celsius = Kelvin - 273.15;
                
                break;

    }
            printOut("Celsius: " + Celsius.toFixed(0));
            printOut("Fahrenheit: " + Fahrenheit.toFixed(0));
            printOut("Kelvin: " + Kelvin.toFixed(0));
}
        
    
        
convertTemp(40, TempTypes.Celsius);
convertTemp(104, TempTypes.Fahrenheit);
convertTemp(313, TempTypes.Kelvin);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcNet(grossAmount, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("TaxGroup " + taxGroup)

    switch(taxGroup){
        case "NORMAL":
            vat = 25;
            break;
        case "FOOD":
            vat = 15;
            break;
        case "HOTEL":
        case "TRANSPORT":
        case "CINEMA":
            vat = 10;
            break;
    }
    if (!Number.isNaN(vat)){
        net = (100 * grossAmount / (vat + 100));
    }
    return net;
}

const netPrice1 = calcNet(100, "normal");
if(Number.isNaN(netPrice1)){
    printOut("Unknown VAT group!");
} else {
    printOut("Net price =  " + netPrice1.toFixed(2));
    printOut(newLine);
}

const netPrice2 = calcNet(150, "food");
if(Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
} else {
    printOut("Net price = " + netPrice2.toFixed(2));
    printOut(newLine);
}

const netPrice3 = calcNet(200, "hotel");
if(Number.isNaN(netPrice3)) {
    printOut("Unknown VAT group!")
} else {
    printOut("Net price = " + netPrice3.toFixed(2));
    printOut(newLine);
}

const netPrice4 = calcNet(250, "transport");
if(Number.isNaN(netPrice4)) {
    printOut("Unknown VAT group!")
} else {
    printOut("Net price = " + netPrice4.toFixed(2));
    printOut(newLine);
}

const netPrice5 = calcNet(300, "cinema");
if(Number.isNaN(netPrice5)) {
    printOut("Unknown VAT group!")
} else {
    printOut("Net price = " + netPrice5.toFixed(2));
    printOut(newLine);
}

const netPrice6 = calcNet(350, "goblin");

if (Number.isNaN(netPrice6)) {
    printOut("Unknown VAT group!")
} else {
    printOut("Net price = " + netPrice6.toFixed(2));
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcSpeed(Speed, Distance, Time) {
    if (Speed === undefined) {
        let Speed = (Distance / Time);
        printOut("Speed = " + Speed.toFixed(1) + " km/h.");
        printOut("Distance = " + Distance.toFixed(1) + " km.");
        printOut("Time = " + Time.toFixed(1) + " hours.")

    } else if (Distance === undefined) {
        let Distance = (Speed * Time);
        printOut("Distance = " + Distance.toFixed(1) + " km.");
        printOut("Speed = " + Speed.toFixed(1) + " km/h");
        printOut("Time = " + Time.toFixed(1) + " hours.");

    } else if (Time === undefined) {
        let Time = (Distance / Speed);
        printOut("Time = " + Time.toFixed(1) + " hours.");
        printOut("Speed = " + Speed.toFixed(1) + " km/h.")
        printOut("Distance = " + Distance.toFixed(1) + " km.");

    } else if (Speed === undefined && Time === undefined) {
        return(NaN);

    } else if (Distance === undefined && Speed === undefined) {
        return(NaN);
    }
    
}

calcSpeed(undefined, 50, 1)
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function textEdit(aText, maxStringNum, textChar, boolChar) {
    while (aText.length < maxStringNum) {
        aText = boolChar ? aText + textChar : textChar + aText
    }
    printOut(aText);
    return aText;

}
textEdit("Test Test", 10, "¨", true);
textEdit("Hello Test Text", 20, "-", false);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function isMathFun() {
    let leftRight = 1;
    let line = 1;
    let checkOk = false;

    do {
        let numLeft = 20;
        for (let left = 0; left < line + 1; left++) {
            numLeft += leftRight;
            leftRight++;
        }

        let numRight = 30;
        for (let right = 0; right < line; right++) {
            numRight += leftRight;
            leftRight++;
        }

        if (numLeft !== numRight) {
            checkOk = false;
            printOut("Error in line " + line.toString());
        } else {
            checkOk = true;
        }
        line++

        if (line > 200) {
            printOut("Math is Fun");
            break;
        }
    } while (checkOk);
}

isMathFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorialOf(num) {
    if (num === 0 || num === 1); {
        return 1;
        


        return num * factorialOf(num - 1);

    }
    

}





function calcFac(num2) {
        const result = factorialOf(num2)
        printOut("Factorial " + "(" + num2 + ")" + " is " + result);
    }


calcFac(9)
printOut(newLine);

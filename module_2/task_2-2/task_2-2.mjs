"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ans1a = 2 + 3 * ((2 - 4) * 6);
const ans1b = 2 + 3 * 2 - 4 * 6;


printOut("2 + 3 * ((2 - 4) * 6)")
printOut(ans1a.toString());
printOut("2 + 3 * 2 - 4 * 6")
printOut(ans1b.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const m = 25;
let cm = 34;
const mTcm =  m * 100;
cm = cm + mTcm;
let inc = cm / 2.54;
inc = inc.toFixed(2);
printOut(inc.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dTh = 3 * 24;
const hTm = (12 + dTh) * 60;
let min = 14;
const sTm = 45 / 60;
min = min + hTm + sTm;

printOut(min.toString())

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const min2 = 6322.5;

let d2 = (min2 / 60) / 24;
const d2l = d2 - Math.floor(d2);
d2 = Math.floor(d2);

let h2 = d2l * 24;
const h2l = h2 - Math.floor(h2);
h2 = Math.floor(h2);

let min2b = h2l * 60;
const min2bl = min2b - Math.floor(min2b);
min2b = Math.floor(min2b);

let s2 = min2bl * 60;
s2 = Math.floor(s2);



printOut(d2.toString() + " Dager, " + h2.toString() + " Timer, " + min2b.toString() + " Minutter, " + s2.toString() + " Sekunder");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let mengdeUSD = 54;

const mengdeNOK = Math.round(mengdeUSD * NOK);


printOut(mengdeUSD.toString() + " dollar blir " + mengdeNOK.toString() + " kroner ");
mengdeUSD = Math.round(mengdeNOK * USD);
printOut(mengdeNOK.toString() + " kroner blir " + mengdeUSD.toString() + " dollar ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Tekst = "There is much between heaven and earth that we do not understand.";
let Lengde;
let posNum;
let fraPos;
let indEarth;
let søk = "earth";

Lengde = Tekst.length;
posNum = Tekst.charAt(19);
fraPos = Tekst.substring(35, 8);
indEarth = Tekst.indexOf(søk);
/*løs siste index greia obs*/



printOut(" Teksten har " + Lengde + " Karakterer ");
printOut(" Bokstaven på posisjon 19 er " + posNum);
printOut(fraPos);
printOut(indEarth.toString());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let x1 = 5;
let y1= 3;
let x2 = 7;
let y2 = 7;




const svar71 = (x1 > y1);
const svar72 = (x2 >= y2); 
printOut("1. the statement is " + svar71);
printOut("2. the statement is " + svar72);
printOut("3. the statement is " + ("a" > "b"));
printOut("4. the statement is " + ("1" < "a"));
printOut("5. the statement is " + ("2500" < "abcd"));
printOut("6. the statement is " + ("arne" !== "thomas"));
printOut("7. the statement is " + (2 === 5));
printOut("8. the statement is " + !("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let strEn = "254";
let numEn = parseInt(strEn);

let strTo = "57.23";
let numTo = Number(strTo);

let strTre = "25 kroner";
let numTre = parseInt(strTre);
printOut(numEn.toString() );
printOut(numTo.toString() );
printOut(numTre.toString() );
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totaltDager = 131; 
let uker = Math.floor(totaltDager / 7);
let dager = totaltDager % 7;
printOut(uker.toString() + " Uker og " + dager.toString() + " Dager " );
printOut(newLine);
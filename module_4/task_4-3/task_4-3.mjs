"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate")
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
  const perimeter = (height + width + height + width);
  const area = (height * width);
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Circumference: " + perimeter + "&nbsp; Area: " + area;
}
//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");
function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch(key) {
    case "Enter":
      const wordsUser = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(wordsUser);
      txtTask2Output.innerHTML = "Number of words =" + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break; 
  }
}
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");
let text = "";

function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");

  for(let i = 0; i < chkTask3.length; i++) {
    const checkBox = chkTask3[i];
    if(checkBox.checked) {
      const value = checkBox.value;
      if(value === "1") {
        text += "You have chosen number " + value + ". Wrong<br />";
      } else if(value === "2") {
        text += "You have chosen number " + value + ". Yes, it is<br />"; 
      } else if (value === "3") {
        text += "You have chosen number " + value + ". Thats correct<br />";
      } else if (value === "4") {
        text += "You have chosen number " + value + ". Maybe<br />";
      } else if (value === "5") {
        text += "You have chosen number " + value + ". Yes, this is a test<br />";
      }
      }
    }
    txtTask3Output.innerHTML = text;
    text = "";
  }

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars")
for(let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i];

  const radioButton = document.createElement("input")
radioButton.type = "radio";
radioButton.id = "car" + car.value;
radioButton.name = "car";
radioButton.value = car.value;

const label = document.createElement("label");
label.htmlFor = "car" + car.value;
label.textContent = car.caption;

divTask4Cars.appendChild(radioButton);
divTask4Cars.appendChild(label)
divTask4Cars.appendChild(document.createElement("br"));
}
const txtTask4Output = document.getElementById("txtTask4Output");
txtTask4Output.addEventListener ("change"), (event) =>{
  if (event.target.type === "radio") {
const selectedCar = event.target.value;
document.getElementById("txtTask4Output").textContent = "You selected: " + selectedCar;
}
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");
const selected = selectTask5Animals[i];
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
function selectTask5AnimalsChange(aEvent) {
value = selectTask5Animals
  if(selectTask5Animals.onchange) {
    console.log(value)
  }
}


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

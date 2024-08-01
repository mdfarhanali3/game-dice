// first example

const calculateSumButtonElement = document.querySelector("#calculator button");

function sumNumber() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredvalue = userNumberInputElement.value;

  let sum = 0;

  for (let i = 0; i <= enteredvalue; i++) {
    sum = sum + i;
  }

  const sumvalue = document.getElementById("calculated-sum");
  sumvalue.textContent = sum;
  sumvalue.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", sumNumber);

// second example

const highlightButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightning() {
  const anchorelements = document.querySelectorAll("#highlight-links a");

  for (const anchorelement of anchorelements) {
    anchorelement.classList.add("highlight");
  }
}
highlightButtonElement.addEventListener("click", highlightning);

// display user data

const dummyUserData = {
  firstName: "John",
  lastName: "Doe",
  age: "16",
};
const userdata = document.querySelector("#user-data button");

function displayUserData() {
  const userdataElement = document.getElementById("output-user-data");

  userdataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const outputElement = document.createElement("li");

    const outputValue = key.toUpperCase() + ": " + dummyUserData[key];

    outputElement.textContent = outputValue;

    userdataElement.append(outputElement);
  }
}

userdata.addEventListener("click", displayUserData);

// statistics

const rollButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function displayStatistics() {
  const enteredValueElement = document.getElementById("user-target-number");
  const enteredValue = enteredValueElement.value;
  const ulListElement = document.getElementById("dice-rolls");

  ulListElement.innerHTML = "";
  let noOfRolls = 0;

  let rightNumber = false;

  while (!rightNumber) {
    const rollednumber = rollDice();
    noOfRolls++;
    const newRollListElement = document.createElement("li");
    outputValue = "Roll " + noOfRolls + ": " + rollednumber;
    newRollListElement.textContent = outputValue;
    ulListElement.append(newRollListElement);
    rightNumber = rollednumber == enteredValue;

  }

  const spanTotalRollsElement = document.getElementById("output-total-rolls");
  const spanTargetNoElement = document.getElementById("output-target-number");

  spanTargetNoElement.textContent = enteredValue;
  spanTotalRollsElement.textContent = noOfRolls;
}

rollButtonElement.addEventListener("click", displayStatistics);

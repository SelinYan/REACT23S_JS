const form = document.querySelector("form");
const customer = document.querySelector("#name");
const age = document.querySelectorAll(`[name="age"]`);
const healthStatus = document.querySelectorAll(`[name="status"]`);
const googHabits = document.querySelectorAll(`[name="goodHabit"]`);
const badHabits = document.querySelectorAll(`[name="badHabit"]`);

const riskscore = document.querySelector("#riskscore");

const riskscoreCal = () => {
  let customerName = customer.value;
  let ageResult = "";
  let healthStatusResult = [];
  let goodHabitResult = [];
  let badHabitResult = [];
  let score = 0;

  age.forEach((item) => {
    if (item.checked) {
      ageResult = item.id;
    }
  });

  switch (ageResult) {
    case "age1":
      score += 0;
      break;
    case "age2":
      score += 0.1;
      break;
    case "age3":
      score += 0.3;
      break;
    case "age4":
      score += 0.6;
      break;
    case "age5":
      score += 1;
      break;
    case "age6":
      score += 1.5;
      break;
    case "age7":
      score += 2.1;
      break;
  }
};

form.addEventListener("input", riskscoreCal);

/*const randomNumbers = () => {
  const num1 = Number(prompt("Please type in the first random number"));
  const num2 = Number(prompt("Please type in the second random number"));
  const num3 = Number(prompt("Please type in the third random number"));

  const mult = num1 * num2 * num3;
  const sum = num1 + num2 + num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log("sum is:", sum, " and multiplication is: ", mult);
  } else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
      console.log("all numbers are negative");
    } else {
      console.log("sum is:", sum);
    }
  }
};
*/
const decisionMaking = () => {
  let userName = prompt("please type in a random name ");
  if (userName.length > 0) {
    console.log("Hello ''");
  }
};
decisionMaking();

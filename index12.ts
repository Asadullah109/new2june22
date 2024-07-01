#!/usr/bin/env node

import inquirer from 'inquirer';

async function main() {
  const answers = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
      message: "Select one of operators to perform action",
      type: "list",
      name: "operator",
      choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
  ]);

  const { firstNumber, secondNumber, operator } = answers;

  switch (operator) {
    case "ADDITION":
      console.log(`Result: ${firstNumber + secondNumber}`);
      break;
    case "SUBTRACTION":
      console.log(`Result: ${firstNumber - secondNumber}`);
      break;
    case "MULTIPLICATION":
      console.log(`Result: ${firstNumber * secondNumber}`);
      break;
    case "DIVISION":
      if (secondNumber !== 0) {
        console.log(`Result: ${firstNumber / secondNumber}`);
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
      break;
    default:
      console.log("Please select a correct operator");
  }
}

main().catch(err => console.error(err));

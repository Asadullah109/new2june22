import inquirer from 'inquirer';

const quizQuestions = [
  {
    type: 'list',
    name: 'q1',
    message: 'What is the type of the variable "myname" in the code?',
    choices: ['string', 'string | null', 'string | undefined', 'string | number'],
  },
  {
    type: 'list',
    name: 'q2',
    message: 'What is the value of "myname" after the code "myname = null;" is executed?',
    choices: ['"zia"', 'null', 'undefined', '12'],
  },
  {
    type: 'list',
    name: 'q3',
    message: 'What happens when the code "myname = undefined;" is executed?',
    choices: ['No error', 'Runtime error', 'Compile-time error', 'Syntax error'],
  },
  {
    type: 'list',
    name: 'q4',
    message: 'What is the purpose of the "toString()" method in JavaScript?',
    choices: ['To convert a value to a string', 'To convert a value to a number', 'To convert a value to a boolean', 'To convert a value to an object'],
  },
  {
    type: 'list',
    name: 'q5',
    message: 'What is the type of the variable "myAge" in the code?',
    choices: ['string', 'number', 'string | number', 'number | string'],
  },
  {
    type: 'list',
    name: 'q6',
    message: 'What is the value of "myAge" after the code "myAge = 16;" is executed?',
    choices: ['"Dont Know"', '16', 'undefined', 'null'],
  },
  {
    type: 'list',
    name: 'q7',
    message: 'What happens when the code "console.log(myAge.toLowerCase());" is executed?',
    choices: ['No error', 'Runtime error', 'Compile-time error', 'Syntax error'],
  },
  {
    type: 'list',
    name: 'q8',
    message: 'What is the purpose of the "toLowerCase()" method in JavaScript?',
    choices: ['To convert a string to uppercase', 'To convert a string to lowercase', 'To convert a number to string', 'To convert a boolean to string'],
  },
  {
    type: 'list',
    name: 'q9',
    message: 'What is the type of the variable "newAge" in the code?',
    choices: ['string', 'number', 'string | number', 'number | string'],
  },
  {
    type: 'list',
    name: 'q10',
    message: 'What is the value of "newAge" after the code "let newAge = Math.random() > 0.6 ? "Khan" : 60;" is executed?',
    choices: ['"Khan"', '60', 'undefined', 'null'],
  },
  {
    type: 'list',
    name: 'q11',
    message: 'What happens when the code "newAge.toLowerCase();" is executed?',
    choices: ['No error', 'Runtime error', 'Compile-time error', 'Syntax error'],
  },
  {
    type: 'list',
    name: 'q12',
    message: 'What is the purpose of the "typeof" operator in JavaScript?',
    choices: ['To check the type of a variable', 'To check the value of a variable', 'To check the scope of a variable', 'To check the hoisting of a variable'],
  },
  {
    type: 'list',
    name: 'q13',
    message: 'What is the type of the variable "age" in the code?',
    choices: ['number', 'string', 'number | string', 'number | "died" | "unknown"'],
  },
  {
    type: 'list',
    name: 'q14',
    message: 'What is the value of "age" after the code "age = 90;" is executed?',
    choices: ['90', '"died"', '"unknown"', '"living"'],
  },
  {
    type: 'list',
    name: 'q15',
    message: 'What happens when the code "age = "living";" is executed?',
    choices: ['No error', 'Runtime error', 'Compile-time error', 'Syntax error'],
  },
  {
    type: 'list',
    name: 'q16',
    message: 'What is the type of the variable "zia" in the code?',
    choices: ['string', '"zia"', '"zia" | undefined', '"zia" | null'],
  },
  {
    type: 'list',
    name: 'q17',
    message: 'What happens when the code "zia = "khan";" is executed?',
    choices: ['No error', 'Runtime error', 'Compile-time error', 'Syntax error'],
  },
  {
    type: 'list',
    name: 'q18',
    message: 'What is the purpose of the "type alias" in TypeScript?',
    choices: ['To create a new type', 'To create a new variable', 'To create a new function', 'To create a new class'],
  },
];

const answersKey = {
  q1: 'string | null',
  q2: 'null',
  q3: 'Compile-time error',
  q4: 'To convert a value to a string',
  q5: 'string | number',
  q6: '16',
  q7: 'Compile-time error',
  q8: 'To convert a string to lowercase',
  q9: 'string | number',
  q10: ['Khan', '60'], // This one has two possible correct answers
  q11: 'Compile-time error',
  q12: 'To check the type of a variable',
  q13: 'number | "died" | "unknown"',
  q14: '90',
  q15: 'Compile-time error',
  q16: '"zia"',
  q17: 'Compile-time error',
  q18: 'To create a new type',
};

inquirer.prompt(quizQuestions).then((answers) => {
  let score = 0;
  for (const question in answers) {
    if (Array.isArray(answersKey[question])) {
      if (answersKey[question].includes(answers[question])) {
        score++;
      }
    } else if (answers[question] === answersKey[question]) {
      score++;
    }
  }
  console.log(`You scored ${score} out of ${quizQuestions.length}`);
});

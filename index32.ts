import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'q1',
    message: 'Which operator is used to concatenate strings in TypeScript?',
    choices: ['+', '-', '*'],
    correctAnswer: '+'
  },
  {
    type: 'list',
    name: 'q2',
    message: 'What is the purpose of an assignment operator in TypeScript?',
    choices: [
      'To perform mathematical calculations',
      'To compare two values',
      'To assign a value to a variable'
    ],
    correctAnswer: 'To assign a value to a variable'
  },
  {
    type: 'list',
    name: 'q3',
    message: 'Which operator in TypeScript is used for incrementing a value by 1?',
    choices: ['+=', '++', '--'],
    correctAnswer: '++'
  },
  {
    type: 'list',
    name: 'q4',
    message: 'Which type of operator is used to perform mathematical operations like addition and subtraction?',
    choices: ['Logical operator', 'Arithmetic operator', 'Assignment operator'],
    correctAnswer: 'Arithmetic operator'
  },
  {
    type: 'list',
    name: 'q5',
    message: 'What do logical operators do in TypeScript?',
    choices: ['Concatenate strings', 'Manipulate boolean values', 'Perform mathematical operations'],
    correctAnswer: 'Manipulate boolean values'
  },
  {
    type: 'list',
    name: 'q6',
    message: 'What does the following TypeScript expression evaluate to: 10 <= 5?',
    choices: ['true', 'false', 'NaN'],
    correctAnswer: 'false'
  },
  {
    type: 'list',
    name: 'q7',
    message: 'What is the purpose of the modulus operator (%) in TypeScript?',
    choices: [
      'to perform division',
      'to find the remainder of a division operation',
      'to perform multiplication'
    ],
    correctAnswer: 'to find the remainder of a division operation'
  },
  {
    type: 'list',
    name: 'q8',
    message: 'Which operator is used to perform exponentiation in TypeScript?',
    choices: ['^', '**', '%'],
    correctAnswer: '**'
  },
  {
    type: 'list',
    name: 'q9',
    message: 'What is the result of the expression: (5 > 3 && 10 > 20)?',
    choices: ['true', 'false', 'Error'],
    correctAnswer: 'false'
  },
  {
    type: 'list',
    name: 'q10',
    message: 'What does the NOT operator (!) do in TypeScript?',
    choices: ['It negates a boolean value', 'It performs bitwise operations', 'It concatenates strings'],
    correctAnswer: 'It negates a boolean value'
  },
  {
    type: 'list',
    name: 'q11',
    message: 'What does the ternary operator in TypeScript allow you to do?',
    choices: ['Perform arithmetic operations', 'Assign values to variables', 'Provide a shorthand for conditional statements'],
    correctAnswer: 'Provide a shorthand for conditional statements'
  },
  {
    type: 'list',
    name: 'q12',
    message: 'Which of the following is an arithmetic operator?',
    choices: ['||', '%', '&&'],
    correctAnswer: '%'
  },
  {
    type: 'list',
    name: 'q13',
    message: 'What is the result of the following TypeScript expression: 10 + 5 * 2?',
    choices: ['30', '20', '25'],
    correctAnswer: '20'
  },
  {
    type: 'list',
    name: 'q14',
    message: "What will be the result of the following TypeScript expression: console.log(` 'Hello' + 'World' `);",
    choices: ['HelloWorld', 'Hello World', "'Hello' + 'World'"],
    correctAnswer: 'HelloWorld'
  },
  {
    type: 'list',
    name: 'q15',
    message: 'What happens if you try to divide a number by zero in TypeScript?',
    choices: ['The result is zero.', 'The result is Infinity.', 'The result is NaN.'],
    correctAnswer: 'The result is Infinity.'
  },
  {
    type: 'list',
    name: 'q16',
    message: 'What is the result of the following TypeScript expression: 2 ** 3?',
    choices: ['6', '8', '16'],
    correctAnswer: '8'
  },
  {
    type: 'list',
    name: 'q17',
    message: 'What will be the value of `result` after executing the following TypeScript code? let num1: number = 16; let num2: number = 7; let result: number = num1 % num2; console.log(result)',
    choices: ['8', '1', '2'],
    correctAnswer: '2'
  },
  {
    type: 'list',
    name: 'q18',
    message: 'What will be the output of the following TypeScript code? let x: number = 10; x+=2; console.log(x);',
    choices: ['8', '12', '10'],
    correctAnswer: '12'
  },
  {
    type: 'list',
    name: 'q19',
    message: 'What does the following TypeScript expression evaluate to: console.log( 5 !== 5 )?',
    choices: ['true', 'false', 'Error'],
    correctAnswer: 'false'
  },
  {
    type: 'list',
    name: 'q20',
    message: 'What will be the value of result after executing the following TypeScript code? let num1: number = 5; let num2: string = \'5\'; console.log(num1 === num2);',
    choices: ['true', 'false', 'Error'],
    correctAnswer: 'false'
  }
];

async function quiz() {
  const results = await inquirer.prompt(questions);
  let score = 0;

  questions.forEach((question, index) => {
    if (results[`q${index + 1}`] === question.correctAnswer) {
      score++;
    }
  });

  console.log(`You scored ${score} out of ${questions.length}`);
}

quiz();

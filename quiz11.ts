
import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'compileCommand',
    message: 'Which command compiles all TypeScript files in a project?',
    choices: [
      'tsc build',
      'tsc all',
      'tsc',
      'tsc compile'
    ],
    correctAnswer: 'tsc'
  },
  {
    type: 'list',
    name: 'declareVariable',
    message: 'In TypeScript, how do you declare a variable with a specific type?',
    choices: [
      'let x = value as type;',
      'let x = value.type;',
      'let x: type = value;',
      'let x = (type)value;'
    ],
    correctAnswer: 'let x: type = value;'
  },
  {
    type: 'list',
    name: 'typeChecking',
    message: 'Which TypeScript feature helps catch errors early during development?',
    choices: [
      'Type checking',
      'Minification',
      'Debugging',
      'Testing'
    ],
    correctAnswer: 'Type checking'
  },
  {
    type: 'list',
    name: 'consoleLog1',
    message: 'What will be printed to the console when this TypeScript code is executed? let age: number = 25; console.log("Age: " + age);',
    choices: [
      'undefined',
      'Age: 25',
      '"Age: " + 25',
      '25'
    ],
    correctAnswer: 'Age: 25'
  },
  {
    type: 'list',
    name: 'jsonDifference',
    message: 'What distinguishes JSON (JavaScript Object Notation) from a typical JavaScript object?',
    choices: [
      'JSON objects are inherently immutable, whereas JavaScript objects are mutable by default.',
      'JSON can only represent data as strings, whereas JavaScript objects can handle any data type.',
      'JSON requires keys to be surrounded by double quotes, while JavaScript objects do not have this restriction.',
      'There is no distinction; JSON and JavaScript objects share identical syntax and usage.'
    ],
    correctAnswer: 'JSON requires keys to be surrounded by double quotes, while JavaScript objects do not have this restriction.'
  },
  {
    type: 'list',
    name: 'typescriptDefinition',
    message: 'What is TypeScript?',
    choices: [
      'A framework for CSS',
      'A type of database',
      'A new programming language',
      'A superset of JavaScript'
    ],
    correctAnswer: 'A superset of JavaScript'
  },
  {
    type: 'list',
    name: 'consoleLog2',
    message: 'What will be printed to the console when this TypeScript code is executed? let firstName: string = "John"; let lastName: string = "Doe"; let fullName: string = firstName + " " + lastName; console.log(fullName);',
    choices: [
      '"John" + "Doe"',
      'JohnDoe',
      'undefined',
      'John Doe'
    ],
    correctAnswer: 'John Doe'
  },
  {
    type: 'list',
    name: 'runAfterCompile',
    message: 'How do you run a TypeScript file after compiling it?',
    choices: [
      'ts run file.js',
      'node file.js',
      'run file.js',
      'typescript file.js'
    ],
    correctAnswer: 'node file.js'
  },
  {
    type: 'list',
    name: 'consoleLog3',
    message: 'What will be the output of console.log(isCompleted);? let isCompleted: boolean = false; isCompleted = true; console.log(isCompleted);',
    choices: [
      'null',
      'undefined',
      'true',
      'false'
    ],
    correctAnswer: 'true'
  },
  {
    type: 'list',
    name: 'typeAnnotations',
    message: 'What is the purpose of TypeScript\'s type annotations?',
    choices: [
      'To control the visibility of functions',
      'To define the structure of data',
      'To add comments to your code',
      'To style your application'
    ],
    correctAnswer: 'To define the structure of data'
  }
];

async function runQuiz() {
  let score = 0;

  for (const question of questions) {
    const answer = await inquirer.prompt({
      type: question.type,
      name: question.name,
      message: question.message,
      choices: question.choices
    });

    if (answer[question.name] === question.correctAnswer) {
      score++;
    }
  }

  console.log(`You got ${score} out of ${questions.length} questions correct!`);
}

runQuiz();

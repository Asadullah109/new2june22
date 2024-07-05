import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'q1',
    message: 'What is the difference between let and const keywords in TypeScript?',
    choices: [
      'Both are used for declaring constants.',
      'let allows reassignment of values, while const doesn\'t.',
      'const is for primitive types, and let is for objects.',
      'let is slower than const'
    ],
    correctAnswer: 'let allows reassignment of values, while const doesn\'t.'
  },
  {
    type: 'list',
    name: 'q2',
    message: 'How can you create an array of numbers in TypeScript?',
    choices: [
      'let numbers: number[] = [1, 2, 3];',
      'let numbers = new Array(1, 2, 3);',
      'let numbers: any[] = [1, "two", 3];',
      'let numbers = [1, 2, 3];'
    ],
    correctAnswer: 'let numbers: number[] = [1, 2, 3];'
  },
  {
    type: 'list',
    name: 'q3',
    message: 'What does the any type in TypeScript signify?',
    choices: [
      'A primitive data type like string or number',
      'An undefined variable',
      'A variable that can hold any type of value',
      'A custom data type created by the developer'
    ],
    correctAnswer: 'A variable that can hold any type of value'
  },
  {
    type: 'list',
    name: 'q4',
    message: 'What is the purpose of an interface in TypeScript?',
    choices: [
      'To create a custom data type',
      'To handle asynchronous operations',
      'To define a reusable block of code',
      'To define the structure of an object'
    ],
    correctAnswer: 'To define the structure of an object'
  },
  {
    type: 'list',
    name: 'q5',
    message: 'Which statement is NOT true about TypeScript and JavaScript?',
    choices: [
      'TypeScript code runs directly in the browser without compilation.',
      'TypeScript code compiles to readable JavaScript.',
      'TypeScript offers additional features like interfaces and classes.',
      'Both languages share the same core syntax.'
    ],
    correctAnswer: 'TypeScript code runs directly in the browser without compilation.'
  },
  {
    type: 'list',
    name: 'q6',
    message: 'How can you define a function that takes two numbers as arguments and returns their sum?',
    choices: [
      'function add(x, y) => x + y;',
      'function add(x: any, y: any) { return x + y; }',
      'function add(x, y) { return x + y; }',
      'function add(x: number, y: number): number { return x + y; }'
    ],
    correctAnswer: 'function add(x: number, y: number): number { return x + y; }'
  },
  {
    type: 'list',
    name: 'q7',
    message: 'What is the primary benefit of using TypeScript over JavaScript?',
    choices: [
      'Improved browser compatibility',
      'Larger standard library',
      'Static type checking',
      'Faster execution speed'
    ],
    correctAnswer: 'Static type checking'
  },
  {
    type: 'list',
    name: 'q8',
    message: 'Which of the following is a valid way to declare a variable with a string type in TypeScript?',
    choices: [
      'var name = "John";',
      'let age: number = 30;',
      'let fullName: string = "Jane Doe";',
      'const isStudent = true;'
    ],
    correctAnswer: 'let fullName: string = "Jane Doe";'
  },
  {
    type: 'list',
    name: 'q9',
    message: 'What is the keyword to extend an existing class in Typescript?',
    choices: [
      'compose',
      'inherit',
      'extends',
      'derive'
    ],
    correctAnswer: 'extends'
  },
  {
    type: 'list',
    name: 'q10',
    message: 'What is the syntax for defining a class in TypeScript?',
    choices: [
      'class MyClass { ... }',
      'function MyClass() { ... }',
      'let MyClass = { ... }',
      'interface MyClass { ... }'
    ],
    correctAnswer: 'class MyClass { ... }'
  }
];

(async () => {
  let score = 0;

  for (const question of questions) {
    const answer = await inquirer.prompt([question]);
    const userAnswer = answer[question.name];
    const correctAnswer = question.correctAnswer;
    
    if (userAnswer === correctAnswer) {
      score++;
      console.log('Correct!');
    } else {
      console.log(`Wrong! The correct answer is: ${correctAnswer}`);
    }
  }

  console.log(`Your final score is: ${score}/${questions.length}`);
})();

import inquirer from 'inquirer';
const quizQuestions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the purpose of declaring a variable in programming?',
        choices: ['To store a value', 'To print a message', 'To perform a calculation', 'To call a function'],
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which data type is used to store numbers in programming?',
        choices: ['string', 'boolean', 'number', 'float'],
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What is the data type of the variable "name" in the following code: let name = "John"?',
        choices: ['string', 'number', 'void'],
    },
    {
        type: 'list',
        name: 'q4',
        message: 'Which variable declaration allows a value to be changed later in the code?',
        choices: ['let', 'const', 'static'],
    },
    {
        type: 'list',
        name: 'q5',
        message: 'What is the data type of the variable "age" in the following code: let age = 25?',
        choices: ['let', 'const', 'number', 'string'],
    },
    {
        type: 'list',
        name: 'q6',
        message: 'const message: string = "Hello World"; message = false;',
        choices: ['cannot re-assigned', 'false', 'hello world', '1234'],
    },
    {
        type: 'list',
        name: 'q7',
        message: 'How do you recognize the string?',
        choices: ['string always be written in quotations or backticks', 'string always be written in curly brackets', 'string always be written in parenthesis()', 'string always be written in angular brackets <>'],
    },
    {
        type: 'list',
        name: 'q8',
        message: 'Which code is using type annotation?',
        choices: ['const myMessage = "Hello World";', 'const myMessage: string = "Hello World";', 'console.log("Hello World");', 'All of these'],
    },
    {
        type: 'list',
        name: 'q9',
        message: 'What does the command tsc --init do?',
        choices: ['Initializes a new Node.js project', 'Compiles TypeScript code', 'Installs TypeScript', 'make tsc configure file'],
    },
    {
        type: 'list',
        name: 'q10',
        message: 'Which of the following is a correct way to write a multiple-line comment in TypeScript?',
        choices: ['/* This is a comment */', '// This is a comment', 'This is a comment'],
    },
];
const answersKey = {
    q1: 'To store a value',
    q2: 'number',
    q3: 'string',
    q4: 'let',
    q5: 'number',
    q6: 'cannot re-assigned',
    q7: 'string always be written in quotations or backticks',
    q8: 'const myMessage: string = "Hello World";',
    q9: 'make tsc configure file',
    q10: '/* This is a comment */',
};
inquirer.prompt(quizQuestions).then((answers) => {
    let score = 0;
    for (const question in answers) {
        if (answers[question] === answersKey[question]) {
            score++;
        }
    }
    console.log(`You scored ${score} out of ${quizQuestions.length}`);
});

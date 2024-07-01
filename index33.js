import inquirer from 'inquirer';
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is a module in TypeScript?',
        choices: ['A function', 'A way to organize code into separate pieces', 'A data type'],
        correctAnswer: 'A way to organize code into separate pieces'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'What does encapsulation refer to in the context of modules?',
        choices: ['Minimizing code redundancy', 'Hiding implementation details from the outside', 'Accessing external libraries'],
        correctAnswer: 'Hiding implementation details from the outside'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'How does TypeScript handle code reuse with modules?',
        choices: ['By providing a built-in code sharing mechanism', 'By automatically importing relevant code snippets', 'By using the import and export keywords'],
        correctAnswer: 'By using the import and export keywords'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'Which keyword is used to export elements from a module?',
        choices: ['out', 'export', 'external'],
        correctAnswer: 'export'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'What does the import keyword do in TypeScript?',
        choices: ['Exports elements from a module', 'Declares variables', 'Imports elements from another module', 'Defines TypeScript classes'],
        correctAnswer: 'Imports elements from another module'
    },
    {
        type: 'list',
        name: 'q6',
        message: 'Which TypeScript configuration file is commonly used to specify module-related settings?',
        choices: ['tsconfig.json', 'package.json', 'node_modules'],
        correctAnswer: 'tsconfig.json'
    },
    {
        type: 'list',
        name: 'q7',
        message: 'What is the purpose of the Inquirer module in TypeScript applications?',
        choices: ['To handle HTTP requests', 'To create interactive command-line interfaces', 'To manage database connections'],
        correctAnswer: 'To create interactive command-line interfaces'
    },
    {
        type: 'list',
        name: 'q8',
        message: 'In TypeScript, what is the significance of adding "type": "module" to the package.json file?',
        choices: [
            'To specify the TypeScript version used in the project',
            'To configure module resolution and code generation',
            'To indicate that the project is using ECMAScript modules'
        ],
        correctAnswer: 'To indicate that the project is using ECMAScript modules'
    },
    {
        type: 'list',
        name: 'q9',
        message: 'In TypeScript, what does the await keyword do when used with the Inquirer module?',
        choices: ['Imports modules asynchronously', 'Defines asynchronous functions', 'Pauses execution until a promise is resolved'],
        correctAnswer: 'Pauses execution until a promise is resolved'
    },
    {
        type: 'list',
        name: 'q10',
        message: 'What is the role of the npm command in the context of installing third-party modules in TypeScript?',
        choices: ['To manage package installation and dependencies', 'To compile TypeScript code to JavaScript', 'To initialize a new TypeScript project'],
        correctAnswer: 'To manage package installation and dependencies'
    },
    {
        type: 'list',
        name: 'q11',
        message: 'How would you prompt the user to enter their age using the Inquirer module in TypeScript?',
        choices: [
            'prompt("Enter your age: ");',
            'inquirer.prompt({ name: \'age\', type: \'number\', message: \'Enter your age:\' });',
            'inquirer.getInput(\'Enter your age: \');'
        ],
        correctAnswer: 'inquirer.prompt({ name: \'age\', type: \'number\', message: \'Enter your age:\' });'
    },
    {
        type: 'list',
        name: 'q12',
        message: 'What is the command to compile a TypeScript file named app.ts into JavaScript using the TypeScript compiler?',
        choices: ['tsc app.ts -o app.js', 'tsc app.ts', 'ts-compile app.ts'],
        correctAnswer: 'tsc app.ts'
    },
    {
        type: 'list',
        name: 'q13',
        message: 'Which npm package is commonly used for adding colors and styles to the terminal in TypeScript applications?',
        choices: ['Cheerio', 'Chalk', 'Commander'],
        correctAnswer: 'Chalk'
    },
    {
        type: 'list',
        name: 'q14',
        message: 'How do you install Chalk as a dependency using npm?',
        choices: ['npm add chalk', 'npm install chalk globally', 'npm install chalk'],
        correctAnswer: 'npm install chalk'
    },
    {
        type: 'list',
        name: 'q15',
        message: 'How do you use Chalk to print a message in red color in a TypeScript file?',
        choices: ['chalk.red(\'Message\');', 'chalk.color(\'red\', \'Message\');', 'chalk(\'red\', \'Message\');'],
        correctAnswer: 'chalk.red(\'Message\');'
    },
    {
        type: 'list',
        name: 'q16',
        message: 'In TypeScript, if you want to import everything from a module into a single variable, which statement would you use?',
        choices: [
            'import * as module from "./module";',
            'import { * } from "./module";',
            'import all from "./module";'
        ],
        correctAnswer: 'import * as module from "./module";'
    },
    {
        type: 'list',
        name: 'q17',
        message: 'Consider the following code: // module1.ts export const greeting = "Hello"; Which statement correctly imports the greeting variable from module1.ts?',
        choices: [
            'import { greeting } from "./module1";',
            'import greeting from "./module1";',
            'import { greeting } from "module1";'
        ],
        correctAnswer: 'import { greeting } from "./module1";'
    },
    {
        type: 'list',
        name: 'q18',
        message: 'Consider the following code: // module2.ts export default function greet() { console.log("Hello!"); } Which statement correctly imports the greet function from module2.ts?',
        choices: [
            'import { greet } from "./module2";',
            'import greet from "./module2";',
            'import { greet } from "module2";'
        ],
        correctAnswer: 'import greet from "./module2";'
    },
    {
        type: 'list',
        name: 'q19',
        message: 'Consider the following code: // module3.ts export const PI = 3.14; export function double(x: number): number { return x * 2; } Which statement correctly imports both PI and double from module3.ts?',
        choices: [
            'import { PI, double } from "./module3";',
            'import { PI, double } from "module3";',
            'import all from "./module";'
        ],
        correctAnswer: 'import { PI, double } from "./module3";'
    },
    {
        type: 'list',
        name: 'q20',
        message: 'Which Chalk method would you use to style text with bold formatting?',
        choices: ['chalk.bold()', 'chalk.style("bold")', 'chalk.setBold(true)'],
        correctAnswer: 'chalk.bold()'
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

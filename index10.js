import inquirer from 'inquirer';
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the value of the variable "a"? Code\nlet a :number = 5;',
        choices: [
            'a) 5',
            'b) 33',
            'c) "best"',
            'd) undefined'
        ],
        correctAnswer: 'a) 5'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'What is the benefit of using "let" instead of "var"?',
        choices: [
            'a) Global scope',
            'b) Blocked scope',
            'c) Functional scope',
            'd) None of the above'
        ],
        correctAnswer: 'b) Blocked scope'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'Why does the code "console.log("let: " + z);" throw an error?',
        choices: [
            'a) z is not defined in this scope',
            'b) z is defined in this scope',
            'c) z is a global variable',
            'd) z is a constant'
        ],
        correctAnswer: 'a) z is not defined in this scope'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'What is the purpose of the "import" statement in JavaScript?',
        choices: [
            'a) To define a variable',
            'b) To declare a function',
            'c) To import a module or variable from another file',
            'd) To export a variable'
        ],
        correctAnswer: 'c) To import a module or variable from another file'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'What is the difference between "import a from "./first";" and "import {b, c} from "./second";)?',
        choices: [
            'a) The first imports a default export, while the second imports named exports',
            'b) The first imports named exports, while the second imports a default export',
            'c) Both import default exports',
            'd) Both import named exports'
        ],
        correctAnswer: 'a) The first imports a default export, while the second imports named exports'
    },
    {
        type: 'list',
        name: 'q6',
        message: 'What is the purpose of the "export" statement in JavaScript?',
        choices: [
            'a) To import a module or variable from another file',
            'b) To define a variable',
            'c) To declare a function',
            'd) To export a variable or module to another file'
        ],
        correctAnswer: 'd) To export a variable or module to another file'
    },
    {
        type: 'list',
        name: 'q7',
        message: 'What is the benefit of using ECMAScript modules?',
        choices: [
            'a) They allow for global scope',
            'b) They allow for blocked scope',
            'c) They allow for easier import and export of modules and variables',
            'd) They are not supported in modern browsers'
        ],
        correctAnswer: 'c) They allow for easier import and export of modules and variables'
    },
    {
        type: 'list',
        name: 'q8',
        message: 'What is the purpose of the "inquirer" module in JavaScript?',
        choices: [
            'a) To prompt the user for input',
            'b) To log output to the console',
            'c) To import modules from other files',
            'd) To export variables to other files'
        ],
        correctAnswer: 'a) To prompt the user for input'
    }
];
async function quiz() {
    const answers = await inquirer.prompt(questions);
    let score = 0;
    questions.forEach((question, index) => {
        const userAnswer = answers[question.name];
        if (userAnswer === question.correctAnswer) {
            score++;
            console.log(`Question ${index + 1}: Correct`);
        }
        else {
            console.log(`Question ${index + 1}: Incorrect. The correct answer is "${question.correctAnswer}".`);
        }
    });
    console.log(`Your score is ${score} out of ${questions.length}`);
}
quiz();

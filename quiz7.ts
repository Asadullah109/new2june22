import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What does strict mode in TypeScript do?',
        choices: [
            'Enables strict type-checking options',
            'Disables type-checking',
            'Allows use of dynamic types',
            'None of the above'
        ],
        correctAnswer: 'Enables strict type-checking options'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which of the following is a correct type alias declaration in TypeScript?',
        choices: [
            'type Alias = string | number;',
            'alias Alias = string | number;',
            'typedef Alias = string | number;',
            'define Alias = string | number;'
        ],
        correctAnswer: 'type Alias = string | number;'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'How do you select a DOM element with the id "app" in TypeScript?',
        choices: [
            'document.querySelector("#app");',
            'document.getElementById("#app");',
            'document.select("#app");',
            'document.getElement("#app");'
        ],
        correctAnswer: 'document.querySelector("#app");'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'How do you cast a variable to a specific type in TypeScript?',
        choices: [
            'let value = <string>variable;',
            'let value: string = variable;',
            'let value: cast<string>variable;',
            'let value = cast<string>variable;'
        ],
        correctAnswer: 'let value = <string>variable;'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'Which of the following is an example of type narrowing in TypeScript?',
        choices: [
            'if (typeof x === "string") { ... }',
            'if (x is string) { ... }',
            'if (x typeof "string") { ... }',
            'if (type x === "string") { ... }'
        ],
        correctAnswer: 'if (typeof x === "string") { ... }'
    }
];

inquirer.prompt(questions).then(answers => {
    let score = 0;
    questions.forEach((question, index) => {
        const answer = answers[`q${index + 1}`];
        if (answer === question.correctAnswer) {
            score++;
        }
    });
    console.log(`Your score is ${score}/${questions.length}`);
});

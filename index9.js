import inquirer from 'inquirer';
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the syntax for defining a function in TypeScript?',
        choices: [
            'A. All of the above (Correct)',
            'B. Only option A is correct.',
            'C. Only options A and B are correct.',
            'D. Only options B and C are correct.'
        ],
        correctAnswer: 'A. All of the above (Correct)'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'What are the purposes of parameters in a function?',
        choices: [
            'A. To define the names of variables used within the function. (Correct)',
            'B. To specify the return value of the function.',
            'C. To control the flow of execution within the function.',
            'D. Parameters are not necessary for all functions.'
        ],
        correctAnswer: 'A. To define the names of variables used within the function. (Correct)'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What are the different ways to specify parameter types in TypeScript functions?',
        choices: [
            'A. By using keywords like int or string.',
            'B. By using primitive data types like number or string. (Correct)',
            'C. By specifying interface names.',
            'D. All of the above (B & C)'
        ],
        correctAnswer: 'D. All of the above (B & C)'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'What is the difference between a void return type and no return type in a TypeScript function?',
        choices: [
            'A. There is no difference.',
            'B. A function with a void return type explicitly states it doesn\'t return a value, while a function with no return type might implicitly return undefined. (Correct)',
            'C. A function with a void return type cannot access arguments passed to it.',
            'D. TypeScript requires all functions to have a return type.'
        ],
        correctAnswer: 'B. A function with a void return type explicitly states it doesn\'t return a value, while a function with no return type might implicitly return undefined. (Correct)'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'Can you define optional parameters in TypeScript functions?',
        choices: [
            'A. No, all parameters must be mandatory.',
            'B. Yes, by adding a question mark (?) after the parameter name. (Correct)'
        ],
        correctAnswer: 'B. Yes, by adding a question mark (?) after the parameter name. (Correct)'
    },
    {
        type: 'list',
        name: 'q6',
        message: 'What is the benefit of using type annotations for function parameters and return values?',
        choices: [
            'A. Makes functions more complex to write.',
            'B. Improves code readability, maintainability, and catches potential errors early. (Correct)',
            'C. TypeScript requires type annotations for all functions.',
            'D. Provides no significant benefits.'
        ],
        correctAnswer: 'B. Improves code readability, maintainability, and catches potential errors early. (Correct)'
    },
    {
        type: 'list',
        name: 'q7',
        message: 'What are default parameter values in TypeScript functions?',
        choices: [
            'A). A way to pre-populate parameter values with specific constants. (Correct)',
            'B). A way to define optional parameters.',
            'C). Not supported in TypeScript.',
            'D. Default values are automatically assigned by TypeScript if not provided during function call.'
        ],
        correctAnswer: 'A). A way to pre-populate parameter values with specific constants. (Correct)'
    },
    {
        type: 'list',
        name: 'q8',
        message: 'How can you achieve code reusability with functions in TypeScript?',
        choices: [
            'A. By defining functions with the same name but different parameter types (not recommended).',
            'B. By defining functions with clear and descriptive names that encapsulate specific functionalities. (Correct)',
            'C. By using global variables to share data between functions.',
            'D. Functions cannot be reused in TypeScript.'
        ],
        correctAnswer: 'B. By defining functions with clear and descriptive names that encapsulate specific functionalities. (Correct)'
    },
    {
        type: 'list',
        name: 'q9',
        message: 'What is the difference between function declarations and function expressions in TypeScript?',
        choices: [
            'A. Function declarations are hoisted, expressions are not. (Correct)',
            'B. Function declarations require a return type, expressions don\'t.',
            'C. Function expressions can be assigned to variables, declarations cannot.',
            'D. There is no significant difference between them.'
        ],
        correctAnswer: 'A. Function declarations are hoisted, expressions are not. (Correct)'
    },
    {
        type: 'list',
        name: 'q10',
        message: 'What are Arrow Functions (lambda expressions) in TypeScript?',
        choices: [
            'A. A concise syntax for defining simple functions. (Correct)',
            'B. A way to define functions with multiple return statements.',
            'C. Not supported in TypeScript.',
            'D. Arrow functions are always anonymous (don\'t have a name).'
        ],
        correctAnswer: 'A. A concise syntax for defining simple functions. (Correct)'
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

import inquirer from 'inquirer';
// Define quiz questions and correct answers
const quizQuestions = [
    {
        question: "What is TypeScript primarily used for?",
        choices: [
            "To style web pages",
            "To add interactivity to websites",
            "To write server-side code",
            "To add static types to JavaScript"
        ],
        answer: "D"
    },
    {
        question: "How can you declare a constant variable in TypeScript?",
        choices: [
            "const myVar = 10;",
            "var myVar = 10;",
            "let myVar = 10;",
            "constant myVar = 10;"
        ],
        answer: "A"
    },
    {
        question: "Which keyword is used to inherit a class in TypeScript?",
        choices: [
            "inherits",
            "extends",
            "implements",
            "derives"
        ],
        answer: "B"
    },
    {
        question: "What is the use of 'implements' keyword in TypeScript?",
        choices: [
            "To inherit a class",
            "To define an interface",
            "To implement an interface",
            "To create a module"
        ],
        answer: "C"
    },
    {
        question: "Which of the following is not a valid TypeScript type?",
        choices: [
            "string",
            "boolean",
            "number",
            "decimal"
        ],
        answer: "D"
    },
    {
        question: "How do you define an optional property in an interface in TypeScript?",
        choices: [
            "prop?: type",
            "prop: type?",
            "prop: type;",
            "prop??: type"
        ],
        answer: "A"
    },
    {
        question: "What does the 'never' type represent in TypeScript?",
        choices: [
            "A value that is never true",
            "A function that never returns",
            "A variable that is always null",
            "A value that is always undefined"
        ],
        answer: "B"
    },
    {
        question: "What is the purpose of the 'abstract' keyword in TypeScript?",
        choices: [
            "To define an abstract class",
            "To define a method that must be implemented by subclasses",
            "Both A and B",
            "None of the above"
        ],
        answer: "C"
    },
    {
        question: "How do you specify the return type of a function in TypeScript?",
        choices: [
            "function func(): type",
            "function func -> type",
            "function func: type",
            "function func => type"
        ],
        answer: "A"
    },
    {
        question: "What is the output of 'typeof null' in TypeScript?",
        choices: [
            "'null'",
            "'undefined'",
            "'object'",
            "'number'"
        ],
        answer: "C"
    },
    {
        question: "Which of the following is a feature of TypeScript?",
        choices: [
            "Dynamic typing",
            "Static typing",
            "Weak typing",
            "No typing"
        ],
        answer: "B"
    },
    {
        question: "How do you create a tuple in TypeScript?",
        choices: [
            "let myTuple = [1, 'hello'];",
            "let myTuple: [number, string] = [1, 'hello'];",
            "let myTuple = {1, 'hello'};",
            "let myTuple: {number, string} = {1, 'hello'};"
        ],
        answer: "B"
    },
    {
        question: "What is the use of 'type alias' in TypeScript?",
        choices: [
            "To create a new type",
            "To give a new name to an existing type",
            "To define a new class",
            "To create a new function"
        ],
        answer: "B"
    },
    {
        question: "How do you define a readonly property in a TypeScript class?",
        choices: [
            "readonly prop: type;",
            "prop: readonly type;",
            "readonly type: prop;",
            "type readonly: prop;"
        ],
        answer: "A"
    },
    {
        question: "Which of the following is a correct way to define a function that accepts a callback in TypeScript?",
        choices: [
            "function func(callback: Function): void",
            "function func(callback: () => void): void",
            "function func(callback: () => any): void",
            "All of the above"
        ],
        answer: "D"
    },
    {
        question: "How do you handle exceptions in TypeScript?",
        choices: [
            "try/catch",
            "try/except",
            "handle/catch",
            "catch/try"
        ],
        answer: "A"
    },
    {
        question: "What is the default access modifier for members of a class in TypeScript?",
        choices: [
            "public",
            "private",
            "protected",
            "internal"
        ],
        answer: "A"
    },
    {
        question: "Which decorator is used to define metadata for a class in TypeScript?",
        choices: [
            "@ClassDecorator",
            "@Metadata",
            "@Decorator",
            "@Reflect"
        ],
        answer: "A"
    },
    {
        question: "How can you make a property optional in a TypeScript interface?",
        choices: [
            "By adding '?' after the property name",
            "By adding 'optional' before the property name",
            "By adding '*' before the property name",
            "By adding '&' after the property name"
        ],
        answer: "A"
    },
    {
        question: "What is the output of 'console.log(typeof NaN);' in TypeScript?",
        choices: [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        answer: "A"
    },
    {
        question: "How do you define a generic function in TypeScript?",
        choices: [
            "function func<T>(arg: T): T",
            "function func<T>(arg: T) => T",
            "function<T> func(arg: T): T",
            "function<T>(arg: T): T"
        ],
        answer: "A"
    },
    {
        question: "What does the 'private' keyword do in TypeScript?",
        choices: [
            "Prevents a variable from being reassigned",
            "Allows access to the member only within the class",
            "Makes a member accessible in all classes",
            "Allows access to the member in subclasses"
        ],
        answer: "B"
    },
    {
        question: "What is 'decorator' in TypeScript?",
        choices: [
            "A special function that can modify classes and class members",
            "A keyword to create a new class",
            "A type of variable",
            "A method to fetch data"
        ],
        answer: "A"
    },
    {
        question: "Which command is used to compile a TypeScript file?",
        choices: [
            "tsc filename.ts",
            "tsc filename",
            "compile filename.ts",
            "typescript filename.ts"
        ],
        answer: "A"
    },
    {
        question: "What is the purpose of the 'module' keyword in TypeScript?",
        choices: [
            "To declare a variable",
            "To import a module",
            "To define a module",
            "To export a module"
        ],
        answer: "C"
    }
];
// Function to start the quiz
async function startQuiz() {
    console.log("Welcome to the TypeScript Quiz!\n");
    let score = 0;
    // Iterate through each question
    for (let i = 0; i < quizQuestions.length; i++) {
        const question = quizQuestions[i];
        // Prompt user with current question
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: `${i + 1}. ${question.question}`,
                choices: question.choices.map((choice, index) => ({
                    name: `${String.fromCharCode(65 + index)}. ${choice}`,
                    value: String.fromCharCode(65 + index)
                }))
            }
        ]);
        // Check if the answer is correct
        if (answer.userAnswer === question.answer) {
            score++;
            console.log("Correct!\n");
        }
        else {
            console.log(`Wrong! The correct answer is ${question.answer}.\n`);
        }
    }
    // Display final score
    console.log(`Quiz completed! You scored ${score} out of ${quizQuestions.length}.`);
}
// Start the quiz when the script is executed
startQuiz();

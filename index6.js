import inquirer from 'inquirer';
// Define quiz questions and correct answers
const quizQuestions = [
    {
        question: "What does 'TS' stand for in TypeScript?",
        choices: [
            "TypeScript",
            "TypeSystem",
            "TypeScripter",
            "TypeScripting"
        ],
        answer: "A"
    },
    {
        question: "Which of the following describes TypeScript correctly?",
        choices: [
            "A language built on top of JavaScript that adds static typing.",
            "A JavaScript framework for building user interfaces.",
            "A server-side runtime environment for JavaScript.",
            "A database management system for NoSQL databases."
        ],
        answer: "A"
    },
    {
        question: "Which command is used to install TypeScript globally via npm?",
        choices: [
            "npm install typescript -g",
            "npm install --g typescript",
            "npm install -g typescript",
            "npm -g install typescript"
        ],
        answer: "C"
    },
    {
        question: "What is the purpose of the 'tsc' command?",
        choices: [
            "To create a TypeScript file",
            "To push files to GitHub",
            "To start a new TypeScript project",
            "To compile TypeScript code into JavaScript"
        ],
        answer: "D"
    },
    {
        question: "What type of programming paradigm does TypeScript support?",
        choices: [
            "Object-oriented programming",
            "Functional programming",
            "Procedural programming",
            "All of the above"
        ],
        answer: "D"
    },
    {
        question: "What does 'npm' stand for?",
        choices: [
            "Node Package Manager",
            "New Programming Method",
            "National Programming Month",
            "Notation for Proper Math"
        ],
        answer: "A"
    },
    {
        question: "Which file extension is used for TypeScript files?",
        choices: [
            ".js",
            ".ts",
            ".typescript",
            ".txt"
        ],
        answer: "B"
    },
    {
        question: "What does the 'any' type signify in TypeScript?",
        choices: [
            "Any valid JavaScript value",
            "A special type for numeric values",
            "A reserved keyword",
            "An error in the code"
        ],
        answer: "A"
    },
    {
        question: "Which of the following is a benefit of using TypeScript?",
        choices: [
            "Strongly-typed variables and parameters",
            "Automatic code optimization",
            "Native support for all browsers",
            "Compatible with PHP"
        ],
        answer: "A"
    },
    {
        question: "What is the TypeScript compiler written in?",
        choices: [
            "TypeScript",
            "JavaScript",
            "Python",
            "C++"
        ],
        answer: "B"
    },
    {
        question: "What is the primary use case for TypeScript?",
        choices: [
            "Building databases",
            "Creating animations",
            "Developing complex algorithms",
            "Building large-scale JavaScript applications"
        ],
        answer: "D"
    },
    {
        question: "Which of the following is NOT a TypeScript feature?",
        choices: [
            "Static typing",
            "Type inference",
            "Multiple inheritance",
            "Interfaces"
        ],
        answer: "C"
    },
    {
        question: "What is the default visibility modifier for class members in TypeScript?",
        choices: [
            "public",
            "private",
            "protected",
            "static"
        ],
        answer: "A"
    },
    {
        question: "How do you declare a variable with a specific type in TypeScript?",
        choices: [
            "var x: number;",
            "int x = 5;",
            "let x = 5;",
            "const x = 5;"
        ],
        answer: "A"
    },
    {
        question: "Which tool can be used to transpile TypeScript into JavaScript?",
        choices: [
            "tsc",
            "node",
            "npm",
            "git"
        ],
        answer: "A"
    },
    {
        question: "What is the role of 'tsconfig.json' file in a TypeScript project?",
        choices: [
            "To configure TypeScript compiler options",
            "To install TypeScript libraries",
            "To define HTML structure",
            "To create test cases"
        ],
        answer: "A"
    },
    {
        question: "Which symbol is used to denote union types in TypeScript?",
        choices: [
            "&",
            "|",
            "+",
            ":"
        ],
        answer: "B"
    },
    {
        question: "What does the 'strict' flag in 'tsconfig.json' enforce?",
        choices: [
            "Strict type-checking options",
            "Strict code formatting rules",
            "Strict file naming conventions",
            "Strict version control"
        ],
        answer: "A"
    },
    {
        question: "What is the correct way to initialize an empty array in TypeScript?",
        choices: [
            "let arr = []",
            "let arr = new Array()",
            "Both are correct",
            "None of the above"
        ],
        answer: "C"
    },
    {
        question: "Which of the following is NOT a built-in data type in TypeScript?",
        choices: [
            "string",
            "boolean",
            "undefined",
            "array"
        ],
        answer: "D"
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

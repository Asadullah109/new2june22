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
        answer: "D"
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
    },
    {
        question: "What does 'nullish coalescing' operator (??) do in TypeScript?",
        choices: [
            "Checks for undefined values",
            "Performs a logical OR operation",
            "Combines two strings",
            "Checks for null or undefined values"
        ],
        answer: "D"
    },
    {
        question: "What is the 'unknown' type in TypeScript used for?",
        choices: [
            "To indicate that the variable may be null",
            "To represent any type safely",
            "To specify an object with any properties",
            "To cast a variable to a specific type"
        ],
        answer: "B"
    },
    {
        question: "Which decorator is used in TypeScript for class methods?",
        choices: [
            "@Method",
            "@Function",
            "@MethodDecorator",
            "@FunctionDecorator"
        ],
        answer: "C"
    },
    {
        question: "What does the 'readonly' keyword do in TypeScript?",
        choices: [
            "Prevents a variable from being reassigned",
            "Allows a variable to be reassigned once",
            "Indicates that a variable is optional",
            "Makes a variable available globally"
        ],
        answer: "A"
    },
    {
        question: "What is 'Type Assertion' in TypeScript?",
        choices: [
            "Forcibly converting a variable to a different type",
            "Creating custom types",
            "Defining type aliases",
            "Declaring generic types"
        ],
        answer: "A"
    },
    {
        question: "Which TypeScript feature allows defining a type that can hold multiple types?",
        choices: [
            "Type alias",
            "Type inference",
            "Union types",
            "Intersection types"
        ],
        answer: "C"
    },
    {
        question: "What does the 'as' keyword do in TypeScript?",
        choices: [
            "Specifies a required attribute in HTML",
            "Specifies an alias for a type",
            "Performs a type assertion",
            "Declares an asynchronous function"
        ],
        answer: "C"
    },
    {
        question: "What is the purpose of 'index signatures' in TypeScript?",
        choices: [
            "To restrict the index range of an array",
            "To allow for dynamic property names",
            "To specify readonly properties in an interface",
            "To define the scope of a variable"
        ],
        answer: "B"
    },
    {
        question: "What is 'Type Guard' in TypeScript?",
        choices: [
            "A type of security feature",
            "A technique to refine types within conditional statements",
            "A special type for guarding classes",
            "A keyword to guard sensitive data"
        ],
        answer: "B"
    },
    {
        question: "Which TypeScript feature allows combining multiple types into one?",
        choices: [
            "Union types",
            "Intersection types",
            "Type assertions",
            "Type guards"
        ],
        answer: "A"
    },
    {
        question: "What is the purpose of 'keyof' operator in TypeScript?",
        choices: [
            "To declare a new key in an object",
            "To iterate over keys of an object",
            "To assign a unique identifier to each object",
            "To remove a key from an object"
        ],
        answer: "B"
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

        console.log(`Quiz completed! You scored ${score} out of ${quizQuestions.length}.`);
}

// Start the quiz when the script is executed
}
        

startQuiz()

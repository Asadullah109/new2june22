import inquirer from 'inquirer';

// Define quiz questions and correct answers
const quizQuestions = [
    {
        question: "Why did we choose TypeScript for our program?",
        choices: [
            "It is easier to spell",
            "It has fewer users",
            "It offers optional static typing and is a superset of JavaScript",
            "All of the above"
        ],
        answer: "C"
    },
    {
        question: "Which of the following is a prerequisite for coding in TypeScript?",
        choices: [
            "Having a 13th gen processor",
            "Understanding of operating systems",
            "Understanding npm and tsc",
            "Being able to code in pyhton"
        ],
        answer: "C"
    },
    {
        question: "What does npm stand for?",
        choices: [
            "Node Package Manager",
            "New Programming Method",
            "National Programming Month",
            "Notation for Proper Math"
        ],
        answer: "A"
    },
    {
        question: "What command is used to install TypeScript globally via npm?",
        choices: [
            "npm install typescript -g",
            "npm install --g typescript",
            "npm install -g typescript",
            "npm -g install typescript"
        ],
        answer: "C"
    },
    {
        question: "What is the purpose of the tsc command?",
        choices: [
            "To create a TypeScript file",
            "To push files on github",
            "To start a new TypeScript project",
            "To compile TypeScript code into JavaScript"
        ],
        answer: "D"
    },
    {
        question: "What is the output of a TypeScript compiler?",
        choices: [
            "Plain text",
            "Python code",
            "TypeScript code",
            "JavaScript code"
        ],
        answer: "D"
    },
    {
        question: "Which of the following is NOT a programming language?",
        choices: [
            "TypeScript",
            "HTML",
            "Python",
            "JavaScript"
        ],
        answer: "B"
    },
    {
        question: "What is the first step in setting up a TypeScript environment?",
        choices: [
            "Drawing a flowchart",
            "Writing code",
            "Installing npm",
            "Buying a new compute"
        ],
        answer: "C"
    },
    {
        question: "Which command creates a new TypeScript configuration file?",
        choices: [
            "tsc --config",
            "tsc --init",
            "tsc initialize typescript",
            "tsc install typescript"
        ],
        answer: "B"
    },
    {
        question: "Which of these is a benefit of using TypeScript?",
        choices: [
            "It makes your computer faster",
            "It is supported by all browsers natively",
            "It has stricter type-checking",
            "It doubles your salary"
        ],
        answer: "C"
    },
    {
        question: "What do we need to do after writing our TypeScript code to run it in a browser?",
        choices: [
            "Directly open the TypeScript file in the browser",
            "Compile it to JavaScript",
            "Rename the file",
            "Convert it to HTML"
        ],
        answer: "B"
    },
    {
        question: "What is the result of running the TypeScript compiler without any errors in the code?",
        choices: [
            "A new TypeScript file",
            "A compiled JavaScript file",
            "A PDF document",
            "An error message"
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

        // Check if answer is correct
        if (answer.userAnswer.toUpperCase() === question.answer) {
            console.log("Correct!\n");
            score++;
        } else {
            console.log(`Incorrect. Correct answer is ${question.answer}.\n`);
        }
    }

    // Display final score
    console.log(`Quiz completed! You scored ${score} out of ${quizQuestions.length}.`);
}

// Start the quiz when the script is executed
startQuiz();

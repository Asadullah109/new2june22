import  inquirer from 'inquirer';

type Question = {
    question: string;
    choices: string[];
    answer: string;
};

const questions: Question[] = [
    {
        question: "What is TypeScript?",
        choices: ["A programming language", "A superset of JavaScript", "A CSS framework", "A database"],
        answer: "A superset of JavaScript"
    },
    {
        question: "Which type does TypeScript add to JavaScript?",
        choices: ["Static types", "Dynamic types", "Both", "None"],
        answer: "Static types"
    },
    // Add more questions as needed
];

const quiz = async () => {
    let score = 0;
    for (const q of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);

        if (answer.response === q.answer) {
            score++;
            console.log("Correct!");
        } else {
            console.log(`Wrong! The correct answer is: ${q.answer}`);
        }
    }
    console.log(`You scored ${score} out of ${questions.length}`);
};

quiz();

import inquirer from 'inquirer';
// Define a function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Define a function to run the quiz
async function runQuiz(quiz, quizNumber) {
    console.log(`Quiz ${quizNumber}: Press Enter to start the quiz...`);
    let score = 0;
    // Shuffle questions to randomize order
    const shuffledQuestions = shuffleArray(quiz.questions);
    for (let i = 0; i < shuffledQuestions.length; i++) {
        const question = shuffledQuestions[i];
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: `Question ${i + 1}: ${question.question}`,
                choices: question.options,
            },
        ]);
        const userAnswerIndex = question.options.indexOf(answer.userAnswer);
        if (userAnswerIndex === question.correctAnswerIndex) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log("Incorrect! The correct answer is: " +
                question.options[question.correctAnswerIndex]);
        }
    }
    const percentageScore = (score / shuffledQuestions.length) * 100;
    console.log(`Quiz ${quizNumber} Complete! Your Score: ${score}/${shuffledQuestions.length} (${percentageScore.toFixed(2)}%)`);
}
// Example quiz
const myQuiz = {
    questions: [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin"],
            correctAnswerIndex: 1,
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5"],
            correctAnswerIndex: 1,
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus"],
            correctAnswerIndex: 1,
        },
    ],
};
// Run the quiz
runQuiz(myQuiz, 1).catch((err) => console.error(err));

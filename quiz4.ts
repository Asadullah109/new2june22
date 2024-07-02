import  inquirer from 'inquirer';

type Question = {
    question: string;
    choices: string[];
    answer: string;
};

const questions: Question[] = [
    // Primitive types
    {
        question: "Which of the following is a primitive type in TypeScript?",
        choices: ["string", "Array", "object", "Date"],
        answer: "string"
    },
    {
        question: "Which primitive type is used to represent true or false values?",
        choices: ["boolean", "number", "string", "undefined"],
        answer: "boolean"
    },
    {
        question: "Which primitive type represents the absence of any value?",
        choices: ["null", "undefined", "void", "NaN"],
        answer: "undefined"
    },
    {
        question: "Which primitive type is used for numeric values in TypeScript?",
        choices: ["number", "integer", "float", "double"],
        answer: "number"
    },
    // Union types
    {
        question: "How do you define a variable that can be either a number or a string?",
        choices: ["let myVar: number | string;", "let myVar: number || string;", "let myVar: (number, string);", "let myVar: number or string;"],
        answer: "let myVar: number | string;"
    },
    {
        question: "Which of the following is a correct union type?",
        choices: ["string | number", "string & number", "string || number", "string && number"],
        answer: "string | number"
    },
    {
        question: "How do you check the type of a variable in a union type?",
        choices: ["Using typeof", "Using instanceof", "Using type", "Using is"],
        answer: "Using typeof"
    },
    // Dynamic types
    {
        question: "What type is used in TypeScript to represent any value?",
        choices: ["any", "unknown", "object", "void"],
        answer: "any"
    },
    {
        question: "Which type should you use when you don't know the type of a value in advance?",
        choices: ["unknown", "any", "object", "undefined"],
        answer: "unknown"
    },
    {
        question: "Which type is safer to use than 'any' when dealing with dynamic types?",
        choices: ["unknown", "void", "never", "null"],
        answer: "unknown"
    },
    // Literal types
    {
        question: "What is a literal type in TypeScript?",
        choices: ["A type that specifies exact values it can hold", "A type that can hold any value", "A type that specifies a range of values", "A type that represents a union of types"],
        answer: "A type that specifies exact values it can hold"
    },
    {
        question: "How do you define a literal type for a variable that can only be 'red', 'green', or 'blue'?",
        choices: ["let color: 'red' | 'green' | 'blue';", "let color: ['red', 'green', 'blue'];", "let color: ('red', 'green', 'blue');", "let color: 'red' || 'green' || 'blue';"],
        answer: "let color: 'red' | 'green' | 'blue';"
    },
    {
        question: "Which of the following is a literal type?",
        choices: ["42", "number", "string", "boolean"],
        answer: "42"
    },
    {
        question: "What is the purpose of literal types in TypeScript?",
        choices: ["To specify exact values a variable can hold", "To define a range of acceptable values", "To allow dynamic type assignment", "To provide default values for variables"],
        answer: "To specify exact values a variable can hold"
    }
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

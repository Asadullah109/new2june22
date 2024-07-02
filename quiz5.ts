import  inquirer from 'inquirer';

type Question = {
    question: string;
    choices: string[];
    answer: string;
};

const questions: Question[] = [
    // Objects
    {
        question: "How do you define an object type in TypeScript?",
        choices: ["{ name: string, age: number }", "object { name: string, age: number }", "type { name: string, age: number }", "interface { name: string, age: number }"],
        answer: "{ name: string, age: number }"
    },
    {
        question: "How do you create an instance of an object type?",
        choices: ["let obj: { name: string, age: number } = { name: 'John', age: 30 };", "let obj = { name: 'John', age: 30 };", "let obj: Object = { name: 'John', age: 30 };", "let obj: object = { name: 'John', age: 30 };"],
        answer: "let obj: { name: string, age: number } = { name: 'John', age: 30 };"
    },
    {
        question: "How do you mark a property as optional in an object type?",
        choices: ["Using a question mark after the property name", "Using the optional keyword", "Using the nullable keyword", "Using a star after the property name"],
        answer: "Using a question mark after the property name"
    },
    // Arrays
    {
        question: "How do you define an array of strings in TypeScript?",
        choices: ["string[]", "Array<string>", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "How do you push an element into an array?",
        choices: ["arr.push(element);", "arr.add(element);", "arr.append(element);", "arr.insert(element);"],
        answer: "arr.push(element);"
    },
    {
        question: "How do you define a multidimensional array in TypeScript?",
        choices: ["number[][]", "Array<Array<number>>", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    // Tuples
    {
        question: "What is a tuple in TypeScript?",
        choices: ["A fixed-length array with specific types", "A variable-length array with any types", "A fixed-length array with any types", "A variable-length array with specific types"],
        answer: "A fixed-length array with specific types"
    },
    {
        question: "How do you define a tuple with a string and a number?",
        choices: ["[string, number]", "[number, string]", "Both A and B", "None of the above"],
        answer: "[string, number]"
    },
    {
        question: "How do you access the first element of a tuple?",
        choices: ["tuple[0]", "tuple.first", "tuple[1]", "tuple.element(0)"],
        answer: "tuple[0]"
    },
    // Functions
    {
        question: "How do you define a function with typed parameters and return type?",
        choices: ["function myFunc(a: number, b: number): number", "function myFunc(a, b): number", "myFunc(a: number, b: number): number", "def myFunc(a: number, b: number): number"],
        answer: "function myFunc(a: number, b: number): number"
    },
    {
        question: "How do you define an arrow function in TypeScript?",
        choices: ["const myFunc = (a: number, b: number): number => a + b;", "const myFunc = function(a: number, b: number): number { return a + b; };", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "How do you define a function type?",
        choices: ["type MyFunc = (a: number, b: number) => number;", "function MyFunc(a: number, b: number): number;", "Both A and B", "None of the above"],
        answer: "type MyFunc = (a: number, b: number) => number;"
    },
    {
        question: "How do you define a function with an optional parameter?",
        choices: ["function myFunc(a: number, b?: number): number", "function myFunc(a: number, b: number?): number", "function myFunc(a: number, b: number | undefined): number", "function myFunc(a: number, b: number = undefined): number"],
        answer: "function myFunc(a: number, b?: number): number"
    },
    {
        question: "How do you define a function with a default parameter?",
        choices: ["function myFunc(a: number, b: number = 10): number", "function myFunc(a: number, b: number?): number", "function myFunc(a: number, b: number | undefined): number", "function myFunc(a: number, b: number = undefined): number"],
        answer: "function myFunc(a: number, b: number = 10): number"
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

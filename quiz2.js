import inquirer from 'inquirer';
const questions = [
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
    {
        question: "How do you define an interface in TypeScript?",
        choices: ["interface MyInterface {}", "class MyInterface {}", "type MyInterface {}", "def MyInterface {}"],
        answer: "interface MyInterface {}"
    },
    {
        question: "Which keyword is used to create a variable in TypeScript?",
        choices: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How do you specify the type of a variable in TypeScript?",
        choices: ["let myVar: string;", "let myVar = string;", "let myVar: String;", "let myVar = String;"],
        answer: "let myVar: string;"
    },
    {
        question: "How do you define a function with typed parameters and return type in TypeScript?",
        choices: ["function myFunc(a: number, b: number): number", "function myFunc(a, b): number", "myFunc(a: number, b: number): number", "def myFunc(a: number, b: number): number"],
        answer: "function myFunc(a: number, b: number): number"
    },
    {
        question: "Which TypeScript feature allows you to create reusable code?",
        choices: ["Modules", "Interfaces", "Generics", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How do you handle errors in TypeScript?",
        choices: ["Using try/catch blocks", "Using error handlers", "Using async/await", "All of the above"],
        answer: "Using try/catch blocks"
    },
    {
        question: "What is the purpose of the `never` type in TypeScript?",
        choices: ["To represent values that never occur", "To represent a variable that can hold any value", "To represent an optional value", "To represent a union of types"],
        answer: "To represent values that never occur"
    },
    {
        question: "How do you install TypeScript globally using npm?",
        choices: ["npm install -g typescript", "npm install typescript", "npm install --global typescript", "npm install typescript -g"],
        answer: "npm install -g typescript"
    },
    {
        question: "How do you compile a TypeScript file named `app.ts`?",
        choices: ["tsc app.ts", "ts-node app.ts", "node app.ts", "typescript app.ts"],
        answer: "tsc app.ts"
    },
    {
        question: "What is a tuple in TypeScript?",
        choices: ["A fixed-length array with specific types", "A variable-length array with any types", "A fixed-length array with any types", "A variable-length array with specific types"],
        answer: "A fixed-length array with specific types"
    },
    {
        question: "How do you mark a property as optional in an interface?",
        choices: ["By appending a question mark to the property name", "By appending an exclamation mark to the property name", "By using the `optional` keyword", "By using the `nullable` keyword"],
        answer: "By appending a question mark to the property name"
    },
    {
        question: "Which operator is used for type assertion in TypeScript?",
        choices: ["as", "is", "assert", "typeof"],
        answer: "as"
    },
    {
        question: "What does the `unknown` type represent in TypeScript?",
        choices: ["A type-safe version of `any`", "A type that can hold only `null` or `undefined`", "A type that can hold any value", "A type that represents a void function"],
        answer: "A type-safe version of `any`"
    },
    {
        question: "How do you define a class in TypeScript?",
        choices: ["class MyClass {}", "interface MyClass {}", "def MyClass {}", "type MyClass {}"],
        answer: "class MyClass {}"
    },
    {
        question: "How do you extend a class in TypeScript?",
        choices: ["class MyClass extends AnotherClass {}", "class MyClass implements AnotherClass {}", "class MyClass inherits AnotherClass {}", "class MyClass inherits from AnotherClass {}"],
        answer: "class MyClass extends AnotherClass {}"
    },
    {
        question: "How do you implement an interface in a class?",
        choices: ["class MyClass implements MyInterface {}", "class MyClass extends MyInterface {}", "class MyClass uses MyInterface {}", "class MyClass inherits MyInterface {}"],
        answer: "class MyClass implements MyInterface {}"
    },
    {
        question: "Which decorator is used to mark a method as an event handler in Angular?",
        choices: ["@HostListener", "@EventHandler", "@Listener", "@EventListener"],
        answer: "@HostListener"
    },
    {
        question: "How do you specify an array of strings in TypeScript?",
        choices: ["let myArray: string[]", "let myArray: Array<string>", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "How do you specify a union type in TypeScript?",
        choices: ["Using the `|` operator", "Using the `&` operator", "Using the `union` keyword", "Using the `or` keyword"],
        answer: "Using the `|` operator"
    },
    {
        question: "How do you install type definitions for a library in TypeScript?",
        choices: ["npm install @types/library-name", "npm install types/library-name", "npm install library-name-types", "npm install library-name@types"],
        answer: "npm install @types/library-name"
    },
    {
        question: "What is the purpose of the `readonly` modifier in TypeScript?",
        choices: ["To mark a property as read-only", "To mark a property as writable", "To mark a property as optional", "To mark a property as private"],
        answer: "To mark a property as read-only"
    },
    {
        question: "How do you specify a generic type in TypeScript?",
        choices: ["Using angle brackets `<>`", "Using curly braces `{}`", "Using square brackets `[]`", "Using parentheses `()`"],
        answer: "Using angle brackets `<>`"
    },
    {
        question: "Which TypeScript feature allows you to define the structure of an object?",
        choices: ["Interface", "Class", "Module", "Enum"],
        answer: "Interface"
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
        }
        else {
            console.log(`Wrong! The correct answer is: ${q.answer}`);
        }
    }
    console.log(`You scored ${score} out of ${questions.length}`);
};
quiz();

import inquirer from 'inquirer';
const questions = [
    // Interfaces
    {
        question: "How do you define an interface in TypeScript?",
        choices: ["interface MyInterface {}", "type MyInterface = {}", "class MyInterface {}", "struct MyInterface {}"],
        answer: "interface MyInterface {}"
    },
    {
        question: "How do you make a property optional in an interface?",
        choices: ["Using a question mark after the property name", "Using the optional keyword", "Using the nullable keyword", "Using a star after the property name"],
        answer: "Using a question mark after the property name"
    },
    {
        question: "How do you extend an interface?",
        choices: ["Using the extends keyword", "Using the implements keyword", "Using the inherit keyword", "Using the extendsInterface keyword"],
        answer: "Using the extends keyword"
    },
    // Generics
    {
        question: "What is a generic type in TypeScript?",
        choices: ["A type that can be used with different data types", "A type that is used for any value", "A type that is defined inside a function", "A type that is always a number"],
        answer: "A type that can be used with different data types"
    },
    {
        question: "How do you define a generic function?",
        choices: ["function myFunc<T>(arg: T): T", "function myFunc<T>(arg): T", "function myFunc(arg: T): T", "function myFunc<T>(arg: T): any"],
        answer: "function myFunc<T>(arg: T): T"
    },
    {
        question: "How do you define a generic class?",
        choices: ["class MyClass<T> {}", "class MyClass(T) {}", "class MyClass<T> { constructor(T) {} }", "class MyClass[T] {}"],
        answer: "class MyClass<T> {}"
    },
    // Enums
    {
        question: "What is an enum in TypeScript?",
        choices: ["A way to define a set of named constants", "A type that can hold any value", "A type of array", "A special type of function"],
        answer: "A way to define a set of named constants"
    },
    {
        question: "How do you define a numeric enum?",
        choices: ["enum Colors { Red, Green, Blue }", "enum Colors = { Red: 0, Green: 1, Blue: 2 }", "enum Colors: number { Red, Green, Blue }", "enum Colors: { Red, Green, Blue }"],
        answer: "enum Colors { Red, Green, Blue }"
    },
    {
        question: "How do you define a string enum?",
        choices: ["enum Colors { Red = 'RED', Green = 'GREEN', Blue = 'BLUE' }", "enum Colors = { Red: 'RED', Green: 'GREEN', Blue: 'BLUE' }", "enum Colors: string { Red, Green, Blue }", "enum Colors: { Red: 'RED', Green: 'GREEN', Blue: 'BLUE' }"],
        answer: "enum Colors { Red = 'RED', Green = 'GREEN', Blue = 'BLUE' }"
    },
    // Object-Oriented Programming (OOP)
    {
        question: "How do you define a class in TypeScript?",
        choices: ["class MyClass {}", "interface MyClass {}", "type MyClass = {}", "struct MyClass {}"],
        answer: "class MyClass {}"
    },
    {
        question: "How do you create an instance of a class?",
        choices: ["let myInstance = new MyClass();", "let myInstance = MyClass();", "let myInstance = MyClass.new();", "let myInstance = create MyClass();"],
        answer: "let myInstance = new MyClass();"
    },
    {
        question: "How do you inherit a class from another class?",
        choices: ["Using the extends keyword", "Using the implements keyword", "Using the inherit keyword", "Using the extendsClass keyword"],
        answer: "Using the extends keyword"
    },
    {
        question: "How do you define a method in a class?",
        choices: ["method myMethod() {}", "function myMethod() {}", "def myMethod() {}", "classMethod myMethod() {}"],
        answer: "method myMethod() {}"
    },
    {
        question: "How do you define a private property in a class?",
        choices: ["private myProperty: type;", "protected myProperty: type;", "public myProperty: type;", "static myProperty: type;"],
        answer: "private myProperty: type;"
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

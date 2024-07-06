import inquirer from 'inquirer';

// Define the questions and answers
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the output of the following TypeScript code?\n\nlet x: number | string = "5";\nx = x + 1;\nconsole.log(x);',
        choices: [
            '6',
            '"51"',
            'TypeError',
            'Compilation Error'
        ],
        correctAnswer: '"51"'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which of the following is a correct way to define a tuple in TypeScript?',
        choices: [
            'let tuple: [string, number] = ["hello", 42];',
            'let tuple: (string, number) = ["hello", 42];',
            'let tuple: [string, number] = { "hello", 42 };',
            'let tuple: [string, number]; tuple = ["hello", "world"];'
        ],
        correctAnswer: 'let tuple: [string, number] = ["hello", 42];'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What does the "readonly" modifier do in a TypeScript interface?',
        choices: [
            'Prevents the property from being deleted',
            'Makes the property unchangeable after initialization',
            'Makes the property invisible outside the interface',
            'Prevents the property from being accessed'
        ],
        correctAnswer: 'Makes the property unchangeable after initialization'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'What is the output of the following TypeScript code?\n\nconst arr: number[] = [1, 2, 3];\nconst newArr = [...arr, 4];\nconsole.log(newArr);',
        choices: [
            '[1, 2, 3, 4]',
            '[4, 3, 2, 1]',
            '[1, 2, 3]',
            '[4]'
        ],
        correctAnswer: '[1, 2, 3, 4]'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'Which of the following TypeScript features allows you to define a variable that can hold multiple types?',
        choices: [
            'Interfaces',
            'Union Types',
            'Generics',
            'Enums'
        ],
        correctAnswer: 'Union Types'
    }
];




// Define the questions and answers

    {
        type: 'list',
        name: 'q1',
        message: 'What is the output of the following TypeScript code?\n\nlet x: number | string = "5";\nx = x + 1;\nconsole.log(x);',
        choices: [
            '6',
            '"51"',
            'TypeError',
            'Compilation Error'
        ],
        correctAnswer: '"51"'
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which of the following is a correct way to define a tuple in TypeScript?',
        choices: [
            'let tuple: [string, number] = ["hello", 42];',
            'let tuple: (string, number) = ["hello", 42];',
            'let tuple: [string, number] = { "hello", 42 };',
            'let tuple: [string, number]; tuple = ["hello", "world"];'
        ],
        correctAnswer: 'let tuple: [string, number] = ["hello", 42];'
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What does the "readonly" modifier do in a TypeScript interface?',
        choices: [
            'Prevents the property from being deleted',
            'Makes the property unchangeable after initialization',
            'Makes the property invisible outside the interface',
            'Prevents the property from being accessed'
        ],
        correctAnswer: 'Makes the property unchangeable after initialization'
    },
    {
        type: 'list',
        name: 'q4',
        message: 'What is the output of the following TypeScript code?\n\nconst arr: number[] = [1, 2, 3];\nconst newArr = [...arr, 4];\nconsole.log(newArr);',
        choices: [
            '[1, 2, 3, 4]',
            '[4, 3, 2, 1]',
            '[1, 2, 3]',
            '[4]'
        ],
        correctAnswer: '[1, 2, 3, 4]'
    },
    {
        type: 'list',
        name: 'q5',
        message: 'Which of the following TypeScript features allows you to define a variable that can hold multiple types?',
        choices: [
            'Interfaces',
            'Union Types',
            'Generics',
            'Enums'
        ],
        correctAnswer: 'Union Types'
    },
    {
        type: 'list',
        name: 'q6',
        message: 'What is the purpose of TypeScript decorators?',
        choices: [
            'To define classes',
            'To enhance or change the behavior of classes, methods, or properties',
            'To declare variables',
            'To manage state'
        ],
        correctAnswer: 'To enhance or change the behavior of classes, methods, or properties'
    },
    {
        type: 'list',
        name: 'q7',
        message: 'Which of the following TypeScript types can be used to create a variable that should never be assigned a value?',
        choices: [
            'null',
            'undefined',
            'void',
            'never'
        ],
        correctAnswer: 'never'
    },
    {
        type: 'list',
        name: 'q8',
        message: 'What is the output of the following TypeScript code?\n\nlet isDone: boolean = false;\nlet decimal: number = 6;\nconsole.log(isDone, decimal);',
        choices: [
            'false 6',
            'true 6',
            'false 0',
            'true 0'
        ],
        correctAnswer: 'false 6'
    },
    {
        type: 'list',
        name: 'q9',
        message: 'Which of the following is NOT a valid way to declare an array in TypeScript?',
        choices: [
            'let arr: number[] = [1, 2, 3];',
            'let arr: Array<number> = [1, 2, 3];',
            'let arr: [number] = [1, 2, 3];',
            'let arr: (number)[] = [1, 2, 3];'
        ],
        correctAnswer: 'let arr: (number)[] = [1, 2, 3];'
    },
    {
        type: 'list',
        name: 'q10',
        message: 'What is the main advantage of using TypeScript over JavaScript?',
        choices: [
            'It runs faster than JavaScript',
            'It is easier to write than JavaScript',
            'It provides static type checking at compile time',
            'It is more popular than JavaScript'
        ],
        correctAnswer: 'It provides static type checking at compile time'
    },
    {
        type: 'list',
        name: 'q11',
        message: 'What is the output of the following TypeScript code?\n\nfunction add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(2, 3));',
        choices: [
            '23',
            '5',
            'undefined',
            'TypeError'
        ],
        correctAnswer: '5'
    },
    {
        type: 'list',
        name: 'q12',
        message: 'What is the purpose of the "as" keyword in TypeScript?',
        choices: [
            'To declare a variable',
            'To cast a value to a specific type',
            'To define a class method',
            'To create an interface'
        ],
        correctAnswer: 'To cast a value to a specific type'
    },
    {
        type: 'list',
        name: 'q13',
        message: 'Which of the following is true about TypeScript interfaces?',
        choices: [
            'They can be used to create instances of objects',
            'They can define both properties and methods',
            'They cannot extend other interfaces',
            'They cannot be used with classes'
        ],
        correctAnswer: 'They can define both properties and methods'
    },
    {
        type: 'list',
        name: 'q14',
        message: 'What is the output of the following TypeScript code?\n\nconst obj = { name: "John", age: 30 };\nconst { name, age } = obj;\nconsole.log(name, age);',
        choices: [
            'John 30',
            '30 John',
            'undefined 30',
            'John undefined'
        ],
        correctAnswer: 'John 30'
    },
    {
        type: 'list',
        name: 'q15',
        message: 'What is the main purpose of TypeScript "generics"?',
        choices: [
            'To define multiple data types for a variable',
            'To create reusable components that work with any data type',
            'To enforce strict type checking',
            'To declare variable types dynamically'
        ],
        correctAnswer: 'To create reusable components that work with any data type'
    },
    {
        type: 'list',
        name: 'q16',
        message: 'What is the output of the following TypeScript code?\n\nfunction greet(name: string = "Guest"): string {\n  return `Hello, ${name}`;\n}\nconsole.log(greet());',
        choices: [
            'Hello, ',
            'Hello, Guest',
            'undefined',
            'Compilation Error'
        ],
        correctAnswer: 'Hello, Guest'
    },
    {
        type: 'list',
        name: 'q17',
        message: 'Which of the following is a feature of TypeScript "Enums"?',
        choices: [
            'They allow a variable to be one of a set of predefined values',
            'They provide runtime type checking',
            'They can only contain numeric values',
            'They are the same as JavaScript arrays'
        ],
        correctAnswer: 'They allow a variable to be one of a set of predefined values'
    },
    {
        type: 'list',
        name: 'q18',
        message: 'What is the output of the following TypeScript code?\n\nenum Direction { Up, Down, Left, Right }\nconsole.log(Direction.Left);',
        choices: [
            'Up',
            'Down',
            '2',
            'Right'
        ],
        correctAnswer: '2'
    },
    {
        type: 'list',
        name: 'q19',
        message: 'Which of the following TypeScript features is used to define a new type that is the combination of two or more existing types?',
        choices: [
            'Union Types',
            'Intersection Types',
            'Interfaces',
            'Enums'
        ],
        correctAnswer: 'Intersection Types'
    },
    {
        type: 'list',
        name: 'q20',
        message: 'What is the output of the following TypeScript code?\n\nlet value: unknown = "hello";\nconsole.log((value as string).toUpperCase());',
        choices: [
            'HELLO',
            'hello',
            'undefined',
            'TypeError'
        ],
        correctAnswer: 'HELLO'
    },
    {
        type: 'list',
        name: 'q21',
        message: 'Which of the following is a correct way to define an optional property in a TypeScript interface?',
        choices: [
            'interface Person { name?: string; age


// Function to check answers
const checkAnswers = (answers: any) => {
    let correctCount = 0;
    questions.forEach((question, index) => {
        const answer = answers[`q${index + 1}`];
        if (answer === question.correctAnswer) {
            correctCount++;
        }
    });
    return correctCount;
};

// Prompt the user with the questions
inquirer.prompt(questions).then(answers => {
    const correctCount = checkAnswers(answers);
    console.log(`\nYou got ${correctCount} out of ${questions.length} questions correct!`);
}).catch(error => {
    console.error(error);
});

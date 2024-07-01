import inquirer from 'inquirer';

// Define the interface for a question
interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

// Define the interface for a quiz
interface Quiz {
  questions: Question[];
}

// Define a function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Define a function to run the quiz
async function runQuiz(quiz: Quiz, quizNumber: number): Promise<void> {
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
    } else {
      console.log(
        "Incorrect! The correct answer is: " +
          question.options[question.correctAnswerIndex]
      );
    }
  }

  const percentageScore = (score / shuffledQuestions.length) * 100;
  console.log(
    `Quiz ${quizNumber} Complete! Your Score: ${score}/${shuffledQuestions.length} (${percentageScore.toFixed(2)}%)`
  );
}

// Example quiz
const myQuiz: Quiz = {
  questions: [
    {
      question: "What is the correct way to define a function in TypeScript?",
      options: [
        "function funcName(param: type): returnType { }",
        "func funcName(param: type): returnType { }",
        "def funcName(param: type): returnType { }",
        "function funcName(param: type) { }"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How do you define an interface in TypeScript?",
      options: [
        "interface IName { }",
        "class IName { }",
        "struct IName { }",
        "typedef IName { }"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the use of 'readonly' modifier in TypeScript?",
      options: [
        "To make a property write-only",
        "To make a property immutable",
        "To make a property both readable and writable",
        "To define optional properties"
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "What is the correct syntax for defining a tuple type in TypeScript?",
      options: [
        "[string, number]",
        "{string, number}",
        "(string, number)",
        "tuple<string, number>"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which of the following is true about TypeScript?",
      options: [
        "TypeScript is dynamically typed",
        "TypeScript is a strict syntactical superset of JavaScript",
        "TypeScript is a loosely typed language",
        "TypeScript does not support object-oriented programming"
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How do you define an enum in TypeScript?",
      options: [
        "enum Direction { North, East, South, West }",
        "enum Direction = { North, East, South, West }",
        "enum Direction: { North, East, South, West }",
        "enum Direction { North: 1, East: 2, South: 3, West: 4 }"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which of the following is NOT a valid TypeScript data type?",
      options: [
        "string",
        "number",
        "boolean",
        "character"
      ],
      correctAnswerIndex: 3,
    },
    {
      question: "What does 'implements' keyword do in TypeScript?",
      options: [
        "Defines a new class",
        "Defines a new interface",
        "Ensures a class adheres to an interface",
        "Defines a new module"
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the default access modifier for class members in TypeScript?",
      options: [
        "public",
        "private",
        "protected",
        "readonly"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How do you specify optional parameters in TypeScript?",
      options: [
        "By appending a '?' after the parameter name",
        "By appending a '!' after the parameter name",
        "By using the 'optional' keyword",
        "By using the 'nullable' keyword"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the use of 'never' type in TypeScript?",
      options: [
        "To represent values that never occur",
        "To represent a void return type",
        "To define an alias for a type",
        "To represent any value"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How do you create a type alias in TypeScript?",
      options: [
        "type Name = string",
        "alias Name = string",
        "typedef Name = string",
        "define Name = string"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What does the 'as' keyword do in TypeScript?",
      options: [
        "Defines a new alias for a type",
        "Performs a type assertion",
        "Checks for null or undefined",
        "Defines a constant"
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which of the following is a TypeScript-specific feature?",
      options: [
        "Closures",
        "Promises",
        "Generics",
        "Arrow functions"
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the output of the following code? \nlet x: [string, number] = ['hello', 10]; console.log(x[0]);",
      options: [
        "10",
        "hello",
        "undefined",
        "Error"
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How can you declare a variable that can hold either a string or a number?",
      options: [
        "let value: string | number",
        "let value: [string, number]",
        "let value: string & number",
        "let value: any"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the purpose of the 'unknown' type in TypeScript?",
      options: [
        "To represent a value that could be of any type, similar to 'any', but safer",
        "To represent a value that is always undefined",
        "To define a type alias",
        "To represent a type that is unknown at compile time"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How do you create a generic function in TypeScript?",
      options: [
        "function identity<T>(arg: T): T { return arg; }",
        "function identity(arg: any): any { return arg; }",
        "function identity(arg: T): T { return arg; }",
        "function identity<T>(arg: any): any { return arg; }"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What is type inference in TypeScript?",
      options: [
        "Automatic assignment of types based on the assigned value",
        "Manual declaration of variable types",
        "Inheriting types from parent classes",
        "Using types from external libraries"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which TypeScript feature allows for stricter type checking by default?",
      options: [
        "strict",
        "noImplicitAny",
        "strictNullChecks",
        "alwaysStrict"
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "How can you make properties in an interface optional?",
      options: [
        "By using '?' after the property name",
        "By using 'optional' keyword",
        "By using 'nullable' keyword",
        "By using '*' after the property name"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which command is used to compile TypeScript files?",
      options: [
        "tsc",
        "tsrun",
        "tscompile",
        "tsbuild"
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "How can you add a property to an existing interface?",
      options: [
        "By using declaration merging",
        "By using 'extends' keyword",
        "By using 'augment' keyword",
        "By using 'implements' keyword"
      ],
      correctAnswerIndex: 0,
    },
],
},




        // Run the quiz

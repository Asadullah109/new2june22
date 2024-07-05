import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'classBehaviour',
    message: 'Using what can we modify the behaviour of a class?',
    choices: [
      'party decorators',
      'property decorators',
      'class decorators',
      'class modifyer'
    ],
    correctAnswer: 'class decorators'
  },
  {
    type: 'list',
    name: 'tupleExample',
    message: 'Which of these is a tuple?',
    choices: [
      'var employee:(number|string)=123;',
      'var employee:[number,string]=[1,"Steve"]',
      'var employee=[1,\'Bill\'];',
      'none of the above'
    ],
    correctAnswer: 'var employee:[number,string]=[1,"Steve"]'
  },
  // Add the rest of the initial questions here...
  {
    type: 'list',
    name: 'inheritClass',
    message: 'extends keyword to allow a class to inherit from another class.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'setterFunction',
    message: 'setter is a function with the same name with the set keyword at the beginning and a single parameter for the value.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'getterFunction',
    message: 'getter is a function with the property name and the get keyword at the beginning and no parameters.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'accessModifier',
    message: 'our class properties and methods have automatically had access modifier.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'classProperty',
    message: 'Class MyClass{ a:number; func(){ } } Which of following is true?',
    choices: [
      'Property a and method func are public by default',
      'Property a is private and method func is public by default',
      'Property a and method func are protected by default',
      'Property a is public and method func is private by default'
    ],
    correctAnswer: 'Property a and method func are public by default'
  },
  {
    type: 'list',
    name: 'classFeature',
    message: 'Typescript gets class feature from ?',
    choices: [
      'JavaScript',
      'Java',
      'C#',
      'Python'
    ],
    correctAnswer: 'JavaScript'
  },
  {
    type: 'list',
    name: 'commentType',
    message: '/* */ , Choose type of comment ?',
    choices: [
      'Single line comment',
      'Multi-line comment',
      'Documentation comment',
      'None of the above'
    ],
    correctAnswer: 'Multi-line comment'
  },
  {
    type: 'list',
    name: 'optionalSemicolons',
    message: 'Semicolons are optional in Typescript ?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'ignoreSpaces',
    message: 'TS ignores spaces, tabs, and newlines that appear in program ?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'compileMultipleFiles',
    message: 'Can we compile multiple files at once?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'compilerOptions',
    message: 'Compiler options enable you to change the behavior of the compiler during compilation?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'runCompiledFile',
    message: 'When the file is compiled to Test.js , How to run from terminal ?',
    choices: [
      'node Test.js',
      'npm start Test.js',
      'tsc Test.js',
      'run Test.js'
    ],
    correctAnswer: 'node Test.js'
  },
  {
    type: 'list',
    name: 'commentSupport',
    message: 'Select types of comments that typescript supports ?',
    choices: [
      'Single line comments',
      'Multi-line comments',
      'A and B',
      'None of the above'
    ],
    correctAnswer: 'A and B'
  },
  {
    type: 'list',
    name: 'errorStatement',
    message: 'Which statement will throw error in typescript?',
    choices: [
      'var a:string=12;',
      'var a:number=12;',
      'var a:boolean=true;',
      'var a:any=12;'
    ],
    correctAnswer: 'var a:string=12;'
  },
  {
    type: 'list',
    name: 'compileCommand',
    message: 'Which valid command will help to compile typescript file?',
    choices: [
      'tsc abc.ts',
      'tsc -c abc.ts',
      'compile abc.ts',
      'npm compile abc.ts'
    ],
    correctAnswer: 'tsc abc.ts'
  },
  {
    type: 'list',
    name: 'installTSGlobally',
    message: 'How to install Typescript globally ?',
    choices: [
      'npm install -g typescript',
      'npm install typescript',
      'npm install --global typescript',
      'npm install typescript --global'
    ],
    correctAnswer: 'npm install -g typescript'
  },
  {
    type: 'list',
    name: 'optionalParameters',
    message: 'Optional parameters are defined by placing ?',
    choices: [
      'asterisk',
      'ampersand',
      'question mark',
      'exclamation mark'
    ],
    correctAnswer: 'question mark'
  },
  {
    type: 'list',
    name: 'arrowFunction',
    message: 'What is Arrow Function ?',
    choices: [
      'A function expression with a shorter syntax',
      'A function without its own this value',
      'A function defined using the fat arrow (=>) notation',
      'A, B and C',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    type: 'list',
    name: 'logScores',
    message: 'function logScores(...scores) { console.log(scores); } logScores(50, 85, 75); will it work?',
    choices: [
      'Yes',
      'No'
    ],
    correctAnswer: 'Yes'
  },
  {
    type: 'list',
    name: 'restParameter',
    message: 'What is rest parameter ?',
    choices: [
      'A parameter that collects all remaining arguments into an array',
      'A parameter used in async functions',
      'A parameter that allows variable number of arguments',
      'A and C'
    ],
    correctAnswer: 'A and C'
  },
  {
    type: 'list',
    name: 'sayHelloFunction1',
    message: 'function sayHello(name: string) : string { return `Hello ${name}!` } var h3 : number = sayHello( "Daffy Duck ") will it work?',
    choices: [
      'Compile Error',
      'Run-time Error',
      'No Error'
    ],
    correctAnswer: 'Compile Error'
  },
  {
    type: 'list',
    name: 'sayHelloFunction2',
    message: 'function sayHello(name: string) : string { return `Hello ${name}!` } var h2 : string = sayHello(10); will it work?',
    choices: [
      'Compile Error',
      'Run-time Error',
      'No Error'
    ],
    correctAnswer: 'Compile Error'
  },
  {
    type: 'list',
    name: 'sayHelloFunction3',
    message: 'function sayHello(name: string) : string { return `Hello ${name}!` } var h1 : string = sayHello( "Daffy Duck ") will it work?',
    choices: [
      'Yes',
      'No'
    ],
    correctAnswer: 'Yes'
  },
  {
    type: 'list',
    name: 'functionsOrganize',
    message: 'Functions organize the program into logical blocks of code.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'arrayEquivalent',
    message: 'let prices: number[] = [100, 75, 42]; let prices:Array< number > = [100, 75, 42]; Both statements are equivalent?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'arrayOutput',
    message: 'const numbers = [1, 3, 5]; console.log(numbers[0]); console.log(numbers[1]); console.log(numbers[2]); What will be the output?',
    choices: [
      '1, 3, 5',
      '0, 1, 2',
      'undefined, undefined, undefined',
      'Compiler Error'
    ],
    correctAnswer: '1, 3, 5'
  },
  {
    type: 'list',
    name: 'arrayCheck',
    message: 'const numbers: number[] = []; numbers.push(1); numbers.push("Two"); will it work?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'FALSE'
  },
  {
    type: 'list',
    name: 'arrayDefinition',
    message: 'What is Array ?',
    choices: [
      'A collection of elements of the same type',
      'A collection of elements of different types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    type: 'list',
    name: 'typeAlias',
    message: 'Type Scores = [string, ...number[]]; const billyScores: Scores = [ "Billy ", 60, 70, 75] const sallyScores: Scores = [ "Sally ", 60, 70, 75, 70]; will it throw any compilation error ?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'FALSE'
  },
  {
    type: 'list',
    name: 'enumOutput',
    message: 'enum OrderStatus { Paid = 1, Shipped, Completed, Cancelled } let status = OrderStatus.Shipped; console.log(status); What is the output?',
    choices: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '2'
  },
  {
    type: 'list',
    name: 'tupleIteration',
    message: 'Can we iterate through elements in a tuple like an array?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'tupleOutput',
    message: 'let product: [string, number]; product = ["Table", 500]; console.log(product[0]); console.log(product[1]); What will be the output?',
    choices: [
      'Table 500',
      '500 Table',
      'undefined',
      'Compiler Error'
    ],
    correctAnswer: 'Table 500'
  },
  {
    type: 'list',
    name: 'typeMismatch',
    message: 'var num = 2; console.log("value of num " + num); num = "12"; console.log(num); Will it work in typescript?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'FALSE'
  },
  {
    type: 'list',
    name: 'typeAssertion',
    message: 'TypeScript Assertion allows changing a variable from one type to another.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'assignAny',
    message: 'Let x: string = \'stuff\'; var y: boolean = true; let z: number = 33; let a : any = \'hello\'; will it work a = y;?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'outputError',
    message: 'What will be output for let s : string = 25; ?',
    choices: [
      'compile error',
      'run-time error',
      'no error'
    ],
    correctAnswer: 'compile error'
  },
  {
    type: 'list',
    name: 'declareVariable',
    message: 'Which keyword can use to declare a variable:(best practice)?',
    choices: [
      'var',
      'let',
      'const',
      'all of the above'
    ],
    correctAnswer: 'let'
  },
  {
    type: 'list',
    name: 'variableName',
    message: 'Variable name cannot contain spaces and special characters, except the underscore (_) and the dollar ($) sign.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'variableDefinition',
    message: 'A variable is a named space in the memory, that stores values?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'userDefinedType',
    message: 'Select the datatype for classes, interfaces, arrays, and tuples?',
    choices: [
      'Primitive',
      'User-defined',
      'Boolean',
      'None of the above'
    ],
    correctAnswer: 'User-defined'
  },
  {
    type: 'list',
    name: 'nullDefinition',
    message: 'Null means that the variable has been set to an object whose value is undefined?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'undefinedDefinition',
    message: 'A variable initialized with undefined means that the variable has no value or object assigned to it ?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'anyTypeCheck',
    message: 'Using the any type is equivalent to opting out of type checking for a variable.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'anySuperType',
    message: 'The any data type is the super type of all types in TypeScript.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'numberDatatype',
    message: 'Number datatype can be used to represent both, integers and fractions.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'builtInTypes',
    message: 'What are the built-in types in TypeScript ?',
    choices: [
      'Boolean',
      'Number',
      'String',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    type: 'list',
    name: 'typeSystemCheck',
    message: 'The Type System checks the validity of the supplied values, before they are stored or manipulated by the program.?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'oopSupport',
    message: 'TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance ?',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'accessModifierName',
    message: 'Choose the name of Access Modifier ,which allows the member to only be available to interact with inside the class and not on class instances or child classes.?',
    choices: [
      'Private',
      'Public',
      'Protected',
      'Default'
    ],
    correctAnswer: 'Private'
  },
  {
    type: 'list',
    name: 'validTSStatement',
    message: 'Which of the following is valid typescript statement?',
    choices: [
      'var a : string= "Hello";',
      'var a : string= 123;',
      'var a : number= "Hello";',
      'var a : boolean= "false";'
    ],
    correctAnswer: 'var a : string= "Hello";'
  }
];

async function quiz() {
  let score = 0;
  
  for (const question of questions) {
    const { name, message, choices, correctAnswer } = question;
    const answers = await inquirer.prompt([{
      type: 'list',
      name: name,
      message: message,
      choices: choices
    }]);

    if (answers[name] === correctAnswer) {
      score++;
      console.log('Correct!');
    } else {
      console.log(`Wrong! The correct answer is: ${correctAnswer}`);
    }
  }

  console.log(`Quiz complete! Your score: ${score}/${questions.length}`);
}

quiz();

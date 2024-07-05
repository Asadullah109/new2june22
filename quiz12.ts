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
  {
    type: 'list',
    name: 'backportedFeature',
    message: 'Which of these is a backported feature of TypeScript?',
    choices: [
      'classes',
      'modules',
      'methods',
      'arrow'
    ],
    correctAnswer: 'arrow'
  },
  {
    type: 'list',
    name: 'debugTS',
    message: 'TypeScript files cannot be debugged.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'FALSE'
  },
  {
    type: 'list',
    name: 'compileModule',
    message: 'How to compile a module?',
    choices: [
      'tsc-m amd mymodule.ts',
      'tsc--module amd mymodule.ts',
      'both A & B',
      'none of the above'
    ],
    correctAnswer: 'both A & B'
  },
  {
    type: 'list',
    name: 'jsOverloading',
    message: 'JavaScript supports functional overloading.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'FALSE'
  },
  {
    type: 'list',
    name: 'tsSupport',
    message: 'Which of these are supported in TypeScript?',
    choices: [
      'number',
      'boolean',
      'string',
      'all of the above'
    ],
    correctAnswer: 'all of the above'
  },
  {
    type: 'list',
    name: 'outputCode',
    message: 'What is the output of the code: let arr=[10,20,30,40]; for (var val of arr) { console.log(val); }',
    choices: [
      'prints 1,2,3,4',
      'prints 10,20,30,40',
      'prints undefined',
      'compiler error'
    ],
    correctAnswer: 'prints 10,20,30,40'
  },
  {
    type: 'list',
    name: 'tsAppType',
    message: 'Server side and client side applications can be written using TypeScript.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'tsSuperset',
    message: 'TypeScript is the typed superset of',
    choices: [
      'C#',
      'JavaScript',
      'JAVA',
      'ReactJS'
    ],
    correctAnswer: 'JavaScript'
  },
  {
    type: 'list',
    name: 'tsStatements',
    message: 'Which of these statements is true?',
    choices: [
      'TypeScript supports generics',
      'TypeScript supports abstract class',
      'TypeScript supports readonly and static members',
      'all of the above'
    ],
    correctAnswer: 'all of the above'
  },
  {
    type: 'list',
    name: 'enumSupport',
    message: 'Typescript supports enum.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'debugRequirement',
    message: 'What is needed to debug a TypeScript file?',
    choices: [
      '.js source map file',
      '.jsx source map file',
      '.tt source map file',
      '.tsx source map file'
    ],
    correctAnswer: '.js source map file'
  },
  {
    type: 'list',
    name: 'interfaceStatement',
    message: 'Which of these statements is true?',
    choices: [
      'an interface extends a class in TypeScript',
      'an interface extends another interface in TypeScript',
      'an interface cannot give out any JavaScript code',
      'All of the above'
    ],
    correctAnswer: 'an interface extends another interface in TypeScript'
  },
  {
    type: 'list',
    name: 'modulusSupport',
    message: 'TypeScript supports Modulus.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'inheritanceKeyword',
    message: 'Which keyword implements inheritance in TypeScript?',
    choices: [
      'extends',
      'intends',
      'inher',
      'none of the above'
    ],
    correctAnswer: 'extends'
  },
  {
    type: 'list',
    name: 'tsPublic',
    message: 'When was TypeScript made public?',
    choices: [
      '41244',
      '41548',
      '41183',
      '41609'
    ],
    correctAnswer: '41548'
  },
  {
    type: 'list',
    name: 'classConstants',
    message: 'How to implement class constants?',
    choices: [
      'const',
      'readonly',
      'readandwrite',
      'con'
    ],
    correctAnswer: 'readonly'
  },
  {
    type: 'list',
    name: 'notOOPPrinciple',
    message: 'Which of these is NOT an OOP principle?',
    choices: [
      'encapsulation',
      'subtraction',
      'inheritance',
      'polymorphism'
    ],
    correctAnswer: 'subtraction'
  },
  {
    type: 'list',
    name: 'installTS',
    message: '____ is required to install typescript.',
    choices: [
      'npm',
      'nnm',
      'mpn',
      'npp'
    ],
    correctAnswer: 'npm'
  },
  {
    type: 'list',
    name: 'OOPSupport',
    message: 'TypeScript supports all OOP principles.',
    choices: [
      'TRUE',
      'FALSE'
    ],
    correctAnswer: 'TRUE'
  },
  {
    type: 'list',
    name: 'internalModules',
    message: 'Which of these is FALSE about internal modules?',
    choices: [
      'it logically groups classes',
      'it can be exported in another module',
      'functions into one unit',
      'makes coding complicated'
    ],
    correctAnswer: 'makes coding complicated'
  },
  {
    type: 'list',
    name: 'JSXModes',
    message: 'Which of these statements is true about JSX modes?',
    choices: [
      'these modes only affect the emit stage',
      'react mode output have .jsx as their file extension',
      'react mode emits React.AddElement',
      'The preserve option keeps the JSX as part of the output so that it can be absorbed by another transform phase.'
    ],
    correctAnswer: 'The preserve option keeps the JSX as part of the output so that it can be absorbed by another transform phase.'
  },
  {
    type: 'list',
    name: 'moduleKeyword',
    message: 'Which keyword declares a module?',
    choices: [
      'namespace',
      'type',
      'export',
      'declare'
    ],
    correctAnswer: 'namespace'
  },
  {
    type: 'list',
    name: 'restParameter',
    message: 'When is rest parameter used in a function?',
    choices: [
      'the function needs to be executed asynchronously',
      'the function is called recursively',
      'the number of parameters is not known',
      'the type of parameter is not known'
    ],
    correctAnswer: 'the number of parameters is not known'
  }
];

async function runQuiz() {
  let score = 0;

  for (const question of questions) {
    const answer = await inquirer.prompt({
      type: question.type,
      name: question.name,
      message: question.message,
      choices: question.choices
    });

    if (answer[question.name] === question.correctAnswer) {
      score++;
    }
  }

  console.log(`You got ${score} out of ${questions.length} questions correct!`);
}

runQuiz();

import  inquirer from 'inquirer';

type Question = {
    question: string;
    choices: string[];
    answer: string;
};

const questions: Question[] = [
    {
        question: "How do you compile a TypeScript file named `app.ts`?",
        choices: ["tsc app.ts", "ts-node app.ts", "node app.ts", "typescript app.ts"],
        answer: "tsc app.ts"
    },
    {
        question: "How do you specify the output directory for compiled JavaScript files?",
        choices: ["--outDir", "--out", "--output", "--dir"],
        answer: "--outDir"
    },
    {
        question: "Which file is used to configure TypeScript compilation options?",
        choices: ["tsconfig.json", "package.json", "tsconfig.js", "tsconfig.ts"],
        answer: "tsconfig.json"
    },
    {
        question: "What is the command to initialize a TypeScript configuration file?",
        choices: ["tsc --init", "tsc --config", "tsc --new", "tsc --create"],
        answer: "tsc --init"
    },
    {
        question: "How do you watch files for changes and recompile automatically?",
        choices: ["tsc --watch", "tsc --watch-all", "tsc --auto", "tsc --monitor"],
        answer: "tsc --watch"
    },
    {
        question: "Which option is used to include source maps in the compiled output?",
        choices: ["--sourceMap", "--map", "--includeMap", "--source"],
        answer: "--sourceMap"
    },
    {
        question: "How do you specify the root directory of your TypeScript files?",
        choices: ["--rootDir", "--baseDir", "--srcDir", "--root"],
        answer: "--rootDir"
    },
    {
        question: "What is the purpose of the `skipLibCheck` option in `tsconfig.json`?",
        choices: ["To skip type checking of declaration files", "To skip type checking of source files", "To skip type checking of all files", "To skip type checking of JavaScript files"],
        answer: "To skip type checking of declaration files"
    },
    {
        question: "How do you compile TypeScript files without emitting output files?",
        choices: ["--noEmit", "--noOutput", "--emitNone", "--skipEmit"],
        answer: "--noEmit"
    },
    {
        question: "What is the default module system used by TypeScript?",
        choices: ["commonjs", "amd", "es6", "umd"],
        answer: "commonjs"
    },
    {
        question: "How do you enable strict type checking in TypeScript?",
        choices: ["--strict", "--strictTypeChecking", "--strictChecks", "--enableStrict"],
        answer: "--strict"
    },
    {
        question: "Which option is used to include only specific files in the compilation?",
        choices: ["include", "files", "only", "paths"],
        answer: "files"
    },
    {
        question: "How do you compile a project based on a `tsconfig.json` file?",
        choices: ["tsc", "tsc --config", "tsc --project", "tsc --build"],
        answer: "tsc"
    },
    {
        question: "What is the command to compile a TypeScript project and include all files from the `include` array?",
        choices: ["tsc -p .", "tsc -b .", "tsc -i .", "tsc -a ."],
        answer: "tsc -p ."
    },
    {
        question: "How do you specify multiple root directories in `tsconfig.json`?",
        choices: ["'rootDirs' option", "'rootDir' option", "'baseDirs' option", "'srcDirs' option"],
        answer: "rootDirs"
    },
    {
        question: "How do you specify a custom configuration file name?",
        choices: ["tsc --project custom-config.json", "tsc --config custom-config.json", "tsc --file custom-config.json", "tsc --tsconfig custom-config.json"],
        answer: "tsc --project custom-config.json"
    },
    {
        question: "Which compiler option allows for faster incremental builds?",
        choices: ["incremental", "fast", "increment", "quick"],
        answer: "incremental"
    },
    {
        question: "How do you specify the target ECMAScript version for the output?",
        choices: ["--target", "--esversion", "--ecma", "--output-version"],
        answer: "--target"
    },
    {
        question: "Which option is used to exclude specific files or directories from compilation?",
        choices: ["exclude", "ignore", "omit", "skip"],
        answer: "exclude"
    },
    {
        question: "How do you compile TypeScript files and output to a specific file instead of a directory?",
        choices: ["--outFile", "--out", "--outputFile", "--toFile"],
        answer: "--outFile"
    },
    {
        question: "Which option is used to enable experimental decorators in TypeScript?",
        choices: ["--experimentalDecorators", "--decorators", "--enableDecorators", "--expDecorators"],
        answer: "--experimentalDecorators"
    },
    {
        question: "How do you enable strict null checks in TypeScript?",
        choices: ["--strictNullChecks", "--nullChecks", "--strictNull", "--enableNullChecks"],
        answer: "--strictNullChecks"
    },
    {
        question: "Which option is used to specify the maximum compiler memory usage?",
        choices: ["--maxNodeMemory", "--maxMemory", "--memoryLimit", "--maxOldSpaceSize"],
        answer: "--maxOldSpaceSize"
    },
    {
        question: "How do you enable source code compilation tracing?",
        choices: ["--traceResolution", "--trace", "--traceCompile", "--traceSource"],
        answer: "--traceResolution"
    },
    {
        question: "Which option is used to generate declaration files for TypeScript?",
        choices: ["--declaration", "--declare", "--generateDeclarations", "--genDecl"],
        answer: "--declaration"
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

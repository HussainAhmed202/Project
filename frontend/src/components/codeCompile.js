import compiler from 'compilex';
//var compiler = require('compilex');
//const compiler = compilex

var options = { stats: true };
compiler.init(options);


function executeCPP(request) {
    let envDataCPP = { OS: "windows", cmd: "g++", options: { timeout: 1000 } };
    return new Promise((resolve, reject) => {
        if (request.input === "") {
            compiler.compileCPP(envDataCPP, request.code, function (data) {
                resolve(data);
            });
        } else {
            compiler.compileCPPWithInput(envDataCPP, request.code, request.input, function (data) {
                resolve(data);
            });
        }
    });
}

function executeJava(request) {
    let envDataJava = { OS: "windows", cmd: "javac", options: { timeout: 1000 } };

    return new Promise((resolve, reject) => {
        if (request.input === "") {
            compiler.compileJava(envDataJava, request.code, function (data) {
                resolve(data);
            });
        } else {
            compiler.compileJavaWithInput(envDataJava, request.code, request.input, function (data) {
                resolve(data);
            });
        }
    });
}

function executePython(request) {
    let envDataPython = { OS: "windows", cmd: "python3", options: { timeout: 1000 } };

    return new Promise((resolve, reject) => {
        if (request.input === "") {
            compiler.compilePython(envDataPython, request.code, function (data) {
                resolve(data);
            });
        } else {
            compiler.compilePythonWithInput(envDataPython, request.code, request.input, function (data) {
                resolve(data);
            });
        }
    });
}

async function getResult(request) {
    switch (request.language) {
        case 'CPP':
            try {
                return await executeCPP(request);
            } catch (error) {
                console.error(error);
            }
            break;
        case 'Java':
            try {
                return await executeJava(request);
            } catch (error) {
                console.error(error);
            }
            break;
        case 'Python':
            try {
                return await executePython(request);
            } catch (error) {
                console.error(error);
            }
            break;
        default:
            break;
    }
}

let request = {
    "language": "CPP",
    "code": "#include <stdio.h >\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n",
    "input": ""
};

// let request = {
//     "language": "CPP",
//     "code": "#include <iostream>\n\nint main() {\n    std::string userInput;\n    std::cout << \"Enter something: \";\n    std::getline(std::cin, userInput);\n    std::cout << \"You entered: \" << userInput << std::endl;\n    return 0;\n}\n",
//     "input": "Hello world"
// }

// let request = {
//     "language": "Java",
//     "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
//     "input": ""
// }

// let request = {
//     "language": "Java",
//     "code": "// Java program with input\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter something: \");\n        String userInput = scanner.nextLine();\n        System.out.println(\"You entered: \" + userInput);\n    }\n}",
//     "input": "Hello in java"
// }

// let request = {
//     "language": "Python",
//     "code": "print(\"Hello, World!\")",
//     "input": ""
// }

// let request = {
//     "language": "Python",
//     "code": "user_input = input(\"Enter something: \")\nprint(\"You entered:\", user_input)",
//     "input": "Hello in python"
// }

getResult(request)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

var compiler = require('compilex');
//import compiler from 'compilex';

var options = { stats: true };
compiler.init(options);


function executePython(request) {
    var envDataJava = { OS: "windows", cmd: "python3", options: { timeout: 1000 } };

    return new Promise(function (resolve, reject) {
        if (request.input === "") {
            compiler.compilePython(envDataJava, request.code, function (data) {
                resolve(data);
            });
        } else {
            compiler.compilePythonWithInput(envDataJava, request.code, request.input, function (data) {
                resolve(data);
            });
        }
    });
}


async function getResult(request) {
    return await executePython(request);
}

getResult(request)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
        console.error(error);
    });


let request = process.argv[2];



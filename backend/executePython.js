var compiler = require('compilex');
//import compiler from 'compilex';

var options = { stats: true };
compiler.init(options);


// input from terminal
let request = process.argv[2];
request = JSON.parse(request);


function executePython(request) {
    var envDataPy = { OS: "windows", cmd: "python3", options: { timeout: 1000 } };

    return new Promise(function (resolve, reject) {
        if (request.input === "") {
            compiler.compilePython(envDataPy, request.code, function (data) {
                resolve(data);
            });
        } else {
            compiler.compilePythonWithInput(envDataPy, request.code, request.input, function (data) {
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





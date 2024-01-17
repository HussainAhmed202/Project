var compiler = require('compilex');
//import compiler from 'compilex';

var options = { stats: true };
compiler.init(options);

// input from terminal
let request = process.argv[2];
request = JSON.parse(request);

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

async function getResult(request) {
    return await executeCPP(request);

}

getResult(request)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

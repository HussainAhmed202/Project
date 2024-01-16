var compiler = require('compilex');
//import compiler from 'compilex';

var options = { stats: true };
compiler.init(options);


function executeJava(request) {
    var envDataJava = { OS: "windows", cmd: "javac", options: { timeout: 1000 } };

    return new Promise(function (resolve, reject) {
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


async function getResult(request) {
    return await executeJava(request);
}

getResult(request)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
        console.error(error);
    });





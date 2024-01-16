var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);


function executePython(request) {
    var envDataJava = { OS: "windows", cmd: "python3", options: { timeout: 1000 } };
    if (request.input === "") {
        compiler.compilePython(envDataJava, request.code, function (data) {
            return (data);
        });
    } else {
        compiler.compilePythonWithInput(envDataJava, request.code, request.input, function (data) {
            return (data);
        });
    }
};






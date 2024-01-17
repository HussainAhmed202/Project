let request = process.argv[2];
console.log(request); // string
request = JSON.parse(request);

console.log(request.language);
console.log(request.input);
console.log(request.code);

const fs = require('fs');
const pwd = require('./pwd')

module.exports = function(input){ //input=cat fileName = bash.js
    var inputArray = input.split(" ");

    if(inputArray[0] == 'cat') {
        fs.readFile(pwd(inputArray[1]), 'utf8', (err, data) => {
            if (err){
                throw err;
            }
            else{
                process.stdout.write(data);
                process.stdout.write('\nprompt > ');
            }
        })
    }
}
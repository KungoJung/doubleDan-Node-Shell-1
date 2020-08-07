const fs = require('fs');

module.exports = function(input){ //input=cat fileName = bash.js
    const inputArray = input.split(" ");

    if(inputArray[0] == 'cat') {
        //want to access inputArray[1]
        const filePath = process.cwd().concat(`/${inputArray[1]}`);
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err){
                throw err;
            }
            else{
                process.stdout.write(data);
            }
        })
        process.stdout.write('\nprompt > ')
    }
}
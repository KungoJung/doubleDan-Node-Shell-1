const fs = require('fs')

module.exports = function (input) {
  if (input == 'ls') {
    // implement ls;
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('\nprompt > ');
      };
    });
    
  } else {
  process.stdout.write('\nprompt > ');
  };
}
// module.exports = function (input) {
//   if (input == 'ls') {
//     // implement ls;
//     fs.readdir('./', 'utf8', (err, files) => {
//       if (err) {
//         throw err;
//       } else {
//         return files.join('\n');
//       };
//     }); 
//   }
// }

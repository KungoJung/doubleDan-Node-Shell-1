// module.exports = process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   const pwd = process.cwd();

//   

module.exports = function (input) {
  if (input == 'pwd') {
    process.stdout.write(process.cwd());
    
  }
  process.stdout.write('\nprompt > ');
}
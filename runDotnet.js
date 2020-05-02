//node this file when your are in this dictionary
const { execFile } = require('child_process');
const child1 = execFile('dotnet', ['./bin/CoreConsole/CoreConsole.dll'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});



const child2 = execFile('./bin/CoreConsole/CoreConsole', [''], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
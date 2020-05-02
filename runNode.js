//node this file when your are in this dictionary
const { execFile } = require('child_process');
const child = execFile('node', ['app.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

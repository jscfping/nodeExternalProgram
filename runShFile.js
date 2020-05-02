//node this file when your are in this dictionary
const { execFile } = require('child_process');
const child = execFile('sh', ['./sh/hello.sh'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

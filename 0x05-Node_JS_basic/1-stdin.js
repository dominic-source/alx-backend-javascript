const process = require('process');

const text = 'Welcome to Holberton School, what is your name?\n';
process.stdout.write(`${text}`);

process.stdin.on('data', (INPUT) => {
  process.stdout.write(`Your name is: ${INPUT}`);
  if (!process.stdin.isTTY) {
    // console.log();
  } else {
    process.exit();
  }
});
// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
// });

const process = require('node:process');

const text = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${text} \n`);
let flag = true;

if (process.stdin.isTTY) {
  process.stdout.write('Your name is: ');
  flag = false;
}
process.stdin.once('data', (input) => {
  const name2 = input.toString().trim();
  if (flag) {
    process.stdout.write(`Your name is: ${name2} \n`);
  }
  process.stdout.write('This important software is now closing \n');
  process.exit();
});

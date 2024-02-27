const process = require('process');

const text = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${text}\n`);

process.stdin.on('data', (input) => {
  const INPUT = input.toString().trim();
  process.stdout.write(`Your name is: ${INPUT}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

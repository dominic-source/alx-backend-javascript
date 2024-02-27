const process = require('process');

const text = 'Welcome to Holberton School, what is your name?\n';
process.stdout.write(`${text}`);

process.stdin.on('data', (input) => {
  const INPUT = input.toString().trim();
  process.stdout.write(`Your name is: ${INPUT}\n`);
  if (process.stdin.isTTY) {
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

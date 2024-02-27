const process = require('node:process');

const text = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${text}\n`);

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  process.stdout.write(`Your name is: ${input}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

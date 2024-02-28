const fs = require('fs');
const readline = require('readline');
const { Readable } = require('stream');

module.exports = function countStudents(path) {
  let data = null;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  // Create a stream to read from a data in memory
  const stream = new Readable();
  stream.push(data);
  stream.push(null);

  const read = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let count = -1;
  const fields = {};
  // Readline
  read.on('line', (line) => {
    const struct = line.toString().trim();
    if (struct !== '') {
      count += 1;
      const info = struct.split(',');
      try {
        fields[info[3]].push(info[0]);
      } catch (err) {
        fields[info[3]] = [];
        fields[info[3]].push(info[0]);
      }
    }
  });

  read.on('close', () => {
    delete fields.field;
    process.stdout.write(`Number of students: ${count}\n`);
    const keys = Object.keys(fields);
    for (const dat of keys) {
      process.stdout.write(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}\n`);
    }
  });
};

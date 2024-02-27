const fs = require('fs');
const readline = require('readline');
const { Readable } = require('stream');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // Create a stream to read from a data in memory
    const stream = new Readable();
    stream.push(data);
    stream.push(null);

    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    let count = -1;
    const fields = {};
    // Readline
    rl.on('line', (line) => {
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

    rl.on('close', () => {
      delete fields.field;
      console.log('Number of students: ', count);
      const keys = Object.keys(fields);
      for (const dat of keys) {
        console.log(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}`);
      }
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

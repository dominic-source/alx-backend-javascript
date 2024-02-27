const fs = require('fs');
const readline = require('readline');

module.exports = async function countStudents(path) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(path, 'utf-8');
    const rl = readline.createInterface({
      input: stream,
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

    rl.on('error', () => {
      reject(new Error('Cannot load the database'));
    });

    rl.on('close', () => {
      delete fields.field;
      console.log('Number of students:', count);
      const keys = Object.keys(fields);
      for (const dat of keys) {
        console.log(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}`);
      }
      resolve();
    });
  });
};

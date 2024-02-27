const fs = require('fs');
const readline = require('readline');
const process = require('process');

module.exports = async function countStudents(path) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(path, 'utf-8');
    const rl = readline.createInterface({
      input: stream,
    });

    let count = -1;
    const fields = {};
    // Readline
    rl.on('line', async (line) => {
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

    rl.on('error', async () => {
      reject(new Error('Cannot load the database'));
    });

    rl.on('close', async () => {
      delete fields.field;
      process.stdout.write(`Number of students: ${count}\n`);
      const keys = Object.keys(fields);
      for (const dat of keys) {
        process.stdout.write(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}\n`);
      }
      resolve();
    });
  });
};

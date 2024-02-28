const fs = require('fs');
const readline = require('readline');

module.exports = async function countStudents(path) {
  return new Promise((resolve, reject) => {
    let stream = null;
    stream = fs.createReadStream(path, 'utf-8');
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
      reject();
      throw new Error('Error: Cannot load the database');
    });

    rl.on('close', async () => {
      delete fields.field;
      let value = '';
      console.log(`Number of students: ${count}`);
      value += `Number of students: ${count}\n`;
      const keys = Object.keys(fields);
      for (const dat of keys) {
        value += `Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}\n`;
        console.log(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}`);
      }
      resolve(value);
    });
  });
};

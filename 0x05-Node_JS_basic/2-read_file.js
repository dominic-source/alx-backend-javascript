const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const results = data.split('\r\n');

    const fields = {};
    let count = -1;
    for (const struct of results) {
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
    }
    delete fields.field;
    console.log(`Number of students: ${count}`);
    const keys = Object.keys(fields);
    for (const dat of keys) {
      console.log(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

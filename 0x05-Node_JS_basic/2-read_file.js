const fs = require('fs');

function countStudents(path) {
  let data = null;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const results = data.split('\r\n');

  const fields = {};
  for (const struct of results) {
    if (struct !== '') {
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
  console.log(`Number of students: ${results.length - 1}`);
  const keys = Object.keys(fields);
  for (const dat of keys) {
    console.log(`Number of students in ${dat}: ${fields[dat].length}. List: ${fields[dat].join(', ')}`);
  }
}
module.exports = countStudents;

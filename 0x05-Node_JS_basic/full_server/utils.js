const { readFile } = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const result = data.toString().split('\n');
        const fields = {};
        for (const row of result) {
          if (row !== '') {
            const cols = row.split(',');
            if (Object.prototype.hasOwnProperty.call(fields, cols[3])) {
              fields[cols[3]].push(cols[0]);
            } else {
              fields[cols[3]] = [cols[0]];
            }
          }
        }
        delete fields.field;
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;

import readDatabase from "../utils";

class StudentsController {
  static getAllStudents(request, response) {
    let [file] = process.argv.slice(2);
    file = file || 'nofile';

    readDatabase(file).then(val => {
      let info = 'This is the list of our students\n';
      const obj_k = Object.keys(val);
      for (const key of obj_k) {
        info += `Number of students in ${key}: ${val[key].length}. List: ${val[key].join(', ')}\n`
      }
      response.status(200).send(info);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const mj = request.params['major'];

    if (mj === 'CS' || mj === 'SWE') {
      let [file] = process.argv.slice(2);
      file = file || 'nofile';

    readDatabase(file).then(val => {
      const info = `List: ${val[mj].join(', ')}\n`;
      response.status(200).send(info);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
    });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;

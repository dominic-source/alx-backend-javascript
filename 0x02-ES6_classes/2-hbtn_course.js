export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else throw new Error('Name must be a string');

    if (typeof length === 'number') {
      this._length = length;
    } else throw new Error('Length must be a string');

    if (Array.isArray(students)) {
      if (students.every((item) => typeof item === 'string')) {
        this._students = students;
      }
    } else throw new Error('Students must be an array of strings');
  }

  //   getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else throw new Error('Name must be a string');
  }

  //   getter and setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else throw new Error('Length must be a string');
  }

  //   getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      if (students.every((item) => typeof item === 'string')) {
        this._students = students;
      } else throw new Error('Students must be an array of strings');
    } else throw new Error('Students must be an array of strings');
  }
}

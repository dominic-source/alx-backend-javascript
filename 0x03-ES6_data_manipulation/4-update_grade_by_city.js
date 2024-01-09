export default function updateStudentGradeByCity(arr, city, arrGrades) {
  return arr.filter(({ location }) => location === city).map((val) => {
    let grades = 'N/A';
    arrGrades.map((val2) => {
      if (val2.studentId === val.id) grades = val2.grade;
      return grades;
    });
    const newValue = val;
    newValue.grade = grades;
    return newValue;
  });
}

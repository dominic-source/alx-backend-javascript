export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (const i in employeesList) {
        if (i) count += 1;
      }
      return count;
    },
  };
}

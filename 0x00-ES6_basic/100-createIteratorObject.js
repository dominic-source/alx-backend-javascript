export default function createIteratorObject(report) {
  const iter = [];
  for (const data in report.allEmployees) {
    if (data) iter.push(...report.allEmployees[data]);
  }
  return iter;
}

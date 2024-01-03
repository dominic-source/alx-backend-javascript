export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const string of reportWithIterator) {
    if (string) {
      str += `${string} | `;
    }
  }
  if (reportWithIterator) return str.slice(0, -3);
  return str;
}

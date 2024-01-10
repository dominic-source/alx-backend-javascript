export default function cleanSet(set, sString) {
  let newString = '';
  if (typeof sString === 'string') {
    for (const str of set.values()) {
      if (str !== undefined && str.startsWith(sString) && sString.length !== 0) {
        newString += str.slice((sString.length));
        newString += '-';
      }
    }
  }
  return newString.slice(0, -1);
}

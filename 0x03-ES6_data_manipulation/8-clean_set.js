export default function cleanSet(set, sString) {
  let newString = '';
  for (const str of set) {
    if (str.startsWith(sString) && sString) {
      newString += str.slice((sString.length));
      newString += '-';
    }
  }
  return newString.slice(0, -1);
}

export default function cleanSet(set, sString) {
  let newString = '';
  for (const str of set) {
    if (str.startsWith(sString) && sString.length !== 0) {
      newString += str.slice((sString.length));
      newString += '-';
    }
  }
  return newString.slice(0, -1);
}

export default function hasValuesFromArray(set, arr) {
  for (const n of arr) {
    if (!set.has(n)) {
      return false;
    }
  }
  return true;
}

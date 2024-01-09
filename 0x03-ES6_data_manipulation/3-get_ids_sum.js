export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, id) => acc + id.id, 0);
}

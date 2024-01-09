export default function getStudentsByLocation(arr, city) {
  return arr.filter(({ location }) => city === location);
}

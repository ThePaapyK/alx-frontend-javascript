export default function getStudentsByLocation(array, city) {
  return array.filter((currentValue) => currentValue.location === city);
}

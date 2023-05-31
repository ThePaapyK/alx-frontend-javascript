export default function getListStudentIds(array) {
  if (array.constructor === Array) {
    return array.map((element) => element.id);
  }
  return [];
}

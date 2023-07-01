export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  const newStudents = students.map((student) => {
    const single = { ...student };
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    single.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return single;
  });
  return newStudents;
}

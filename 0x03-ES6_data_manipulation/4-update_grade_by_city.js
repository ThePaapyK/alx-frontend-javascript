export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudents = studentList
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });

  console.log(JSON.stringify(updatedStudents, null, 2));
}

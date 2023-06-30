function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(student => student.city === city);

  const updatedStudents = filteredStudents.map(student => {
    const foundGrade = newGrades.find(grade => grade.studentId === student.studentId);
    const grade = foundGrade ? foundGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}

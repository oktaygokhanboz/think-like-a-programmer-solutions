const studentArray = [
  { grade: 87, studentId: 10001, name: "Fred" },
  { grade: 28, studentId: 10002, name: "Tom" },
  { grade: 100, studentId: 10003, name: "Alistair" },
  { grade: 78, studentId: 10004, name: "Sasha" },
  { grade: 84, studentId: 10005, name: "Erin" },
  { grade: 98, studentId: 10006, name: "Belinda" },
  { grade: 75, studentId: 10007, name: "Leslie" },
  { grade: 70, studentId: 10008, name: "Candy" },
  { grade: 81, studentId: 10009, name: "Aretha" },
  { grade: 68, studentId: 10010, name: "Veronica" },
];

function sortByGrade(students) {
  return students.toSorted((a, b) => {
    return a.grade - b.grade;
  });
}

function sortedByStudentId(students) {
  return students.toSorted((a, b) => {
    return a.studentId - b.studentId;
  });
}

console.table(sortByGrade(studentArray));
console.table(sortedByStudentId(studentArray));

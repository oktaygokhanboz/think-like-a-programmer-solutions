// Determine the grade quartiles

const students = [
  { grade: 87, id: 1001, name: "Henry" },
  { grade: 92, id: 1002, name: "Olivia" },
  { grade: 78, id: 1003, name: "Liam" },
  { grade: 85, id: 1004, name: "Sophia" },
  { grade: 90, id: 1005, name: "Noah" },
  { grade: 76, id: 1006, name: "Emma" },
  { grade: 88, id: 1007, name: "James" },
  { grade: 95, id: 1008, name: "Ava" },
  { grade: 81, id: 1009, name: "William" },
  { grade: 89, id: 1010, name: "Isabella" },
];

function determineGradeQuartiles(studentList) {
  const sortedList = studentList.toSorted((a, b) => a.grade - b.grade);

  const getStudentsByPercent = (percent) => {
    const lastIndex = Math.floor(sortedList.length * (percent / 100));
    return sortedList.slice(0, lastIndex);
  };

  const gradeQuartiles = [
    getStudentsByPercent(25).at(-1).grade,
    getStudentsByPercent(50).at(-1).grade,
    getStudentsByPercent(75).at(-1).grade,
  ];

  return gradeQuartiles;
}

const [Q1, Q2, Q3] = determineGradeQuartiles(students);

console.log(
  `
  The grade one would need to score as well as or better than
  25% of the students: ${Q1}
  50% of the students: ${Q2}
  75% of the students: ${Q3}
  `
);

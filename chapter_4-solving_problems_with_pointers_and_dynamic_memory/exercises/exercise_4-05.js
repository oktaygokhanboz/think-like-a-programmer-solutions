// Detele student with id

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

function removeRecord(studentList, id) {
  const student = studentList.find((stu) => stu.id === id);
  if (!student) return "Student not found!";

  console.log(`Student with id ${id} deleted successfully!`);
  return studentList.filter((stu) => stu.id !== id);
}

const result = removeRecord(students, 1001);
console.log(result);

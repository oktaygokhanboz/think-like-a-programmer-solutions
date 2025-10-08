// addRecord, averageRecord functions

const studentRecords = [
  { no: 1001, grade: 78 },
  { no: 1012, grade: 93 },
  { no: 1076, grade: 85 },
];

function addRecord(collection, stuNumber, stuGrade) {
  collection.push({ no: stuNumber, grade: stuGrade });
  return collection;
}

function averageRecord(collection) {
  const sum = collection.reduce((acc, stu) => acc + stu.grade, 0);
  return (sum / collection.length).toFixed(2);
}

console.log(addRecord(studentRecords, 1054, 89));
console.log(averageRecord(studentRecords));

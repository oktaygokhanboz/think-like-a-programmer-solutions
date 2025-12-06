class StudentCollection {
  constructor() {
    this.records = [];
  }

  addRecord(id, name, grade) {
    this.records = [...this.records, { id, name, grade }];
  }

  avarageRecord() {
    const studentNumber = this.records.length;
    let total = 0;
    for (const student of this.records) {
      total += student.grade;
    }
    const result = (total / studentNumber).toFixed(2);
    return result;
  }

  recordsWithinRange(minGrade, maxGrade) {
    if (minGrade < 0 || minGrade > 100 || maxGrade < 0 || maxGrade > 100) {
      throw new Error("Input must be between 0 and 100!");
    }
    if (minGrade >= maxGrade) {
      throw new Error(
        "Mininum parameter should be lesser than maximum parameter"
      );
    }

    return this.records.filter(
      (s) => s.grade >= minGrade && s.grade <= maxGrade
    );
  }

  deleteRecord(id) {
    const exist = this.records.some((s) => s.id === id);

    if (!exist) {
      throw new Error("Student is not found!");
    }

    this.records = this.records.filter((s) => s.id !== id);
  }
}

const sc = new StudentCollection();
sc.addRecord(1, "Henry", 86);
sc.addRecord(14, "Jully", 91);
sc.addRecord(21, "Colah", 68);
console.log(sc.recordsWithinRange(60, 90));

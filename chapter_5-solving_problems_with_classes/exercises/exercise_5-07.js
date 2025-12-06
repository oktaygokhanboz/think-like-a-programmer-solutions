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
sc.deleteRecord(14);
console.log(sc.records);
console.log("Avarage: " + sc.avarageRecord());

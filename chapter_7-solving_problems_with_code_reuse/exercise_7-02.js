// add functions "add record" & "avarage record"

import { students } from "./data.js";

class StudentCollection {
  constructor(students) {
    this.students = students;
  }

  // Private
  #sortByHighestGrade() {
    return this.students.toSorted((a, b) => b.grade - a.grade);
  }
  #sortByLowestId() {
    return this.students.toSorted((a, b) => a.id - b.id);
  }
  #sortByName() {
    return this.students.toSorted((a, b) => a.name.localeCompare(b.name));
  }
  #validate(student) {
    const isTypesValid =
      typeof student.id === "number" &&
      typeof student.name === "string" &&
      typeof student.grade === "string";
    if (!isTypesValid) throw new Error("Types are not valid.");

    const found = this.students.find((s) => s.id === student.id);
    const isIdUnique = !found;
    if (!isIdUnique) throw new Error("ID is exist");

    let isNameValid = true;
    for (const letter of student.name) {
      if (!isNaN(Number(letter))) {
        isNameValid = false;
      }
    }
    if (!isNameValid) throw new Error("Name is not valid");

    const grade = Number(student.grade);
    const isGradeValid = grade >= 0 && grade <= 100;
    if (!isGradeValid) throw new Error("Grade is not valid");
  }

  // Public
  firstStudent(policy) {
    if (!policy) {
      return this.#sortByHighestGrade()[0];
    }

    switch (policy) {
      case "grade": {
        return this.#sortByHighestGrade()[0];
      }
      case "id": {
        return this.#sortByLowestId()[0];
      }
      case "name": {
        return this.#sortByName()[0];
      }
      default:
        return "Policy not found";
    }
  }

  addRecord(student) {
    this.#validate(student);

    this.students.push({
      id: student.id,
      name: student.name,
      grade: student.grade,
    });
  }

  get averageRecord() {
    const gradeSum = this.students.reduce(
      (acc, stu) => acc + Number(stu.grade),
      0,
    );

    return (gradeSum / this.students.length).toFixed(2);
  }
}

const sc = new StudentCollection(students);
sc.addRecord({ id: 1001, name: "Henry", grade: "100" });
console.log(sc.students);

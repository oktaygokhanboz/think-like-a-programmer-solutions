// find the first student by policy (grade, id, name)

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
}

const sc = new StudentCollection(students);
console.log(sc.firstStudent("name"));

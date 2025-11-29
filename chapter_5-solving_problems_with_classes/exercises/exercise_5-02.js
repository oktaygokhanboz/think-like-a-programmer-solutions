class Automobile {
  constructor(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
  }

  // setter methods
  setManufacturer(newManufacturer) {
    this.manufacturer = newManufacturer;
  }
  setModel(newModel) {
    this.model = newModel;
  }
  setYear(newYear) {
    this.year = newYear;
  }

  //support methods
  info() {
    return `${this.year} ${this.manufacturer} ${this.model}`;
  }
  age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car = new Automobile("BMW", "iX3", 2022);
console.log(car.info());
console.log(car.age());

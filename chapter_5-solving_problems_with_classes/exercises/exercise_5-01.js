class Automobile {
  constructor(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
  }

  setManufacturer(newManufacturer) {
    this.manufacturer = newManufacturer;
  }
}

const car = new Automobile("BMW", "iX3", 2022);
console.log(car.manufacturer);

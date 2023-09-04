import { Employee } from "./employee.js";

export class Dev extends Employee {
  #message;
  constructor(id, salary) {
    super(id, salary);
    this.#message = "I am a Dev";
  }

  getJobType() {
    return this.#message;
  }

  static returnArrayOfDevs(...objects) {
    const devArray = [];
    for (const obj of objects) {
      if (obj instanceof Dev) {
        devArray.push(obj);
      }
    }
    return devArray;
  }
}

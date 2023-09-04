import { Employee } from "./employee.js";

export class PM extends Employee {
  #message;
  constructor(id, salary) {
    super(id, salary);
    this.#message = "I am a PM";
  }

  getJobType() {
    return this.#message;
  }
}

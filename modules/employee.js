export class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(EmployeeA, EmployeeB) {
    if (EmployeeA.salary - EmployeeB.salary === 0) {
      return "Salaries are equal";
    } else if (EmployeeA.salary - EmployeeB.salary < 0) {
      return `User with id ${EmployeeB.id} has greater salary`;
    } else {
      return `User with id ${EmployeeA.id} has greater salary`;
    }
  }
}

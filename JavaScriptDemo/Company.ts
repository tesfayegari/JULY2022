import Employee from "./Employee";

export class Company {
  name: string;
  address: string;
  phone: string;

  private employees: Employee [];
  constructor(){
    this.employees = [];
  }

  addEmployee(emp: Employee){
    this.employees.push(emp);
  }

  listEmployees(){
    return JSON.stringify(this.employees);
  }
}
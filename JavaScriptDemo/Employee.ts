import { Company } from "./Company";

export default class Employee {
  private Id: number;
  private fullName: string;
  private dob: Date;
  private company: Company;
  protected testProtected;

  constructor(id: number, name: string, dob: string) {
    
    this.Id = id;
    this.fullName = name;
    this.dob = new Date(dob);
    //TODO write the info to sharePoint 
  }

  getEmployeeInfo(): string {
    
    return JSON.stringify(this);
  }

  // getStudentInfo1=() : string => JSON.stringify(this);

  setCompany(c: Company){
    this.company = c;
  }

  getCompany(c: Company){
    return this.company;
  }

  updateToSharePoint(siteUrl: string, listName: string) {
    //write back to sharepoint ....
  }
}


}



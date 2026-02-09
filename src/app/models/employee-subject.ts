export class EmployeeSubjectModel {
    // Employee Model
    id: number;
    firstName: string;
    lastName: string;
    sal: number;
    gender: string;
    email: string

    constructor(id: number, firstName: string, lastName: string, sal: number, gender: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sal = sal;
        this.gender = gender;
        this.email = email;
    }
}

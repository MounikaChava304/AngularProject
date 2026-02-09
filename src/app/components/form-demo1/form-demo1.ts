import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './form-demo1.html',
  styleUrl: './form-demo1.css',
})
export class FormDemo1 {
  formObj = {
    "firstName": "Virat",
    "lastName": "Kohli",
    "email": "",
    "address": {
      "city": "Bangalore",
      "state": "",
      "pincode": ""
    }
  }

  submitMyForm(signupForm: NgForm) {
    console.log(signupForm);
    console.log(signupForm.value);
  }
}

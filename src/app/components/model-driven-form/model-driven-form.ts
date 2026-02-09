import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule,
    CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  registerForm: any;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl('Bangalore'),
        state: new FormControl(),
        pincode: new FormControl()
      })
    })
  }
}

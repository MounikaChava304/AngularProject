import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
  // styles : ['p{color:red}']
  encapsulation: ViewEncapsulation.Emulated //Writing this does not matter as this is default
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://miro.medium.com/1*jAwFJjRn0DYRA3fnxrR9PQ.jpeg';
  flag: boolean = true;
  user = { name: "Sanjay", address: "Bangalore" };
  num1: number = 10;
  num2: number = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }
  showPassword: boolean = false;
  password = '';

  selectedState = "";

  isVisible: boolean = true;
  paragraphVisibility() {
    this.isVisible = !this.isVisible;
  }

  max_length = 100;
  message1 = '';
  remaining = this.max_length;
  remainingChar() {
    this.remaining = this.max_length - this.message1.length;
  }

  message2 = '';
  characters = 0;
  wordCount = 0;
  typedCharAndWords() {
    this.characters = this.message2.length;
    this.wordCount = this.message2.trim().split(/\s+/).length;
  }

  togglePwdText() {
    this.showPassword = !this.showPassword;
  }

  counter = 0;
  incrementCounter() {
    this.counter++;
  }
  decrementCounter() {
    if (this.counter != 0) {
      this.counter--;
    } else {
      this.counter = 0;
    }
  }
  resetCounter() {
    this.counter = 0;
  }
  addResult: number = 0;
  addition(num3: any, num4: any) {
    this.addResult = num3 + num4;
  }
  
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convert() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
    }
  }

  number1: number = 0;
  number2: number = 0;
  operator: string = '+';
  result: number | string = 0;

  calculate() {
    if (this.operator === '+') {
      this.result = this.number1 + this.number2;
    }
    else if (this.operator === '-') {
      this.result = this.number1 - this.number2;
    }
    else if (this.operator === '*') {
      this.result = this.number1 * this.number2;
    }
    else if (this.operator === '/') {
      if (this.number2 === 0) {
        this.result = "Cannot divide by 0"
      } else {
        this.result = this.number1 / this.number2;
      }
    }
  }

  fontSize: number = 16;
  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2
  }

  backGroundColor: String = '';
}
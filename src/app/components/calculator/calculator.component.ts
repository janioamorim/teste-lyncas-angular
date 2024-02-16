import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput: number = 0;
  calculatedArray: number[] = [];
  showArray: boolean = false;
  showSum: boolean = false;
  showResult: boolean = false;
  sumType: string = '';
  sumResult: number = 0;

  calculateArray() {
    console.log(this.userInput);

    if (this.userInput % 10 === 0 && this.userInput >= 100 && this.userInput <= 1000) {
      console.log("aqui",this.userInput);
      this.calculatedArray = [];
      for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
          this.calculatedArray.push(i * 0.3 * this.userInput);
        } else {
          this.calculatedArray.push(i * 0.1 * this.userInput);
        }
      }
      this.showArray = true;
      this.showSum = true;
    } else {
      alert('Por favor, digite um número múltiplo de 10 entre 100 e 1000.');
      this.showArray = false;
      this.showSum = false;
      this.showResult = false;
    }
  }

  calculateSum() {
    this.showResult = true;
    this.sumResult = 0;
    const indices = this.sumType === 'odd' ? [0, 2, 4, 6, 8] : [1, 3, 5, 7, 9];
    for (const index of indices) {
      this.sumResult += this.calculatedArray[index];
    }
  }

  roundValue(numero: number): number {
    const potenciaDez = Math.pow(10, 2);
    return Math.round(numero * potenciaDez) / potenciaDez;
  }

}

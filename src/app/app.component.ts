import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  operationNumbers: any = [2, 4, 24, 30,];
  result: any;
  firstOperand: number = 0;
  secondperand: number = 0;
  operation: any;

  constructor(private testing: TestService) { }

  drop(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

  }

  dropFirst(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.firstOperand = this.firstOperand + parseInt(data);

  }

  dropSecond(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.secondperand = this.secondperand + parseInt(data);
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any, number: any) {
    console.log(number)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onAdd(value: any) {
    let firstOperand: any = document.getElementById('container2')?.innerText.split(' ');
    firstOperand = firstOperand.reduce((a: any, b: any) => parseInt(a) + parseInt(b), 0)
    isNaN(firstOperand) ? firstOperand = 0 : firstOperand
    let secondperand: any = document.getElementById('container3')?.innerText.split(' ');
    secondperand = secondperand.reduce((a: any, b: any) => parseInt(a) + parseInt(b), 0)
    isNaN(secondperand) ? secondperand = 0 : secondperand
    console.log(value)
    if (value === 'add') {
      this.result = firstOperand + secondperand;
    } else if (value === 'sub') {
      this.result = firstOperand - secondperand;
    }else if (value === 'mul') {
      this.result = firstOperand * secondperand;
    }else if (value === 'div') {
      this.result = firstOperand / secondperand;
    }
  }
}

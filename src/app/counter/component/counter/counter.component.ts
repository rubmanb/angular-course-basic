import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Counter</h3>
  <hr>
  <p>{{counter}}</p>
  <button (click)="increaseCounter(+1)">+1</button>
  <button (click)="resetCounter()">Reset Counter</button>
  <button (click)="increaseCounter(-1)">-1</button>
  `,
})
export class CounterComponent{
  public counter = 10;

  increaseCounter(num: number): void{
    this.counter += num;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}

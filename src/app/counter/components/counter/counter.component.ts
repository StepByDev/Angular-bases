import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public count: number = 10;

  cantidad(valor: number): void {
    this.count += valor;
  }

  reset() {
    this.count = 10;
  }

}

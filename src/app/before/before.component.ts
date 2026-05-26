import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendingMachine } from './vendingmachine';

@Component({
  selector: 'app-before',
  imports: [CommonModule],
  templateUrl: './before.component.html',
  styleUrl: '../shared.css',
})
export class BeforeComponent {
  vm = new VendingMachine();
  log: string[] = [];

  insertCoin() {
    this.log.push(this.vm.insertCoin());
  }

  selectProduct() {
    this.log.push(this.vm.selectProduct());
  }
}
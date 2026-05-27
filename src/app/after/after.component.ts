import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendingMachine } from './vending-machine';
import { Product } from '../product.interface';

@Component({
  selector: 'app-after',
  imports: [CommonModule],
  templateUrl: './after.component.html',
  styleUrl: '../shared.css',
})
export class AfterComponent {
  vm = new VendingMachine();

  insertCoin() {
    this.vm.insertCoin();
  }

  selectProduct(product: Product) {
    this.vm.selectProduct(product);
  }
}
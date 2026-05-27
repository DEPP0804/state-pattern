import { Component, ViewChild, ElementRef, effect } from '@angular/core';
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

  @ViewChild('logContainer') logContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => {
      this.vm.log();
      queueMicrotask(() => {
        if (this.logContainer) {
          const el = this.logContainer.nativeElement;
          el.scrollTop = el.scrollHeight;
        }
      });
    });
  }
}
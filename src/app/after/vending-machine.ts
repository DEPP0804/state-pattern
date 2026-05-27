import { signal } from '@angular/core';
import { State } from './state.abstract';
import { SinMonedaState } from './sin-moneda.state';
import { ConMonedaState } from './con-moneda.state';
import { EntregandoState } from './entregando.state';
import { Product } from '../product.interface';
import productsData from '../products.json';

export class VendingMachine {

  readonly sinMoneda: State = new SinMonedaState(this);
  readonly conMoneda: State = new ConMonedaState(this);
  readonly entregando: State = new EntregandoState(this);

  private state: State = this.sinMoneda;
  
  product = signal<Product[]>(productsData.products);
  selectedProduct: Product | null = null;

  log = signal<string[]>([]);

  setState(state: State) {
    this.state = state;
    this.state.onEnter?.();
  }

  insertCoin(): void {
    const msg = this.state.insertCoin();
    this.addLog(msg);
  }

  selectProduct(product?: Product): void {
    const msg = this.state.selectProduct(product);
    this.addLog(msg);
  }

  addLog(message: string) {
    this.log.update(logs => [...logs, message]);
  }
}
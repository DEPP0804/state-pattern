import { signal } from '@angular/core';
import { State } from './state.abstract';
import { SinMonedaState } from './sin-moneda.state';
import { ConMonedaState } from './con-moneda.state';
import { EntregandoState } from './entregando.state';
import { AgotadoState } from './agotado.state';
import { Product } from '../product.interface';
import productsData from '../products.json';

export class VendingMachine {

  readonly sinMoneda: State = new SinMonedaState(this);
  readonly conMoneda: State = new ConMonedaState(this);
  readonly entregando: State = new EntregandoState(this);
  readonly agotado: State = new AgotadoState(this);

  private state: State = this.sinMoneda;
  
  products = signal<Product[]>(productsData.products);
  selectedProduct: Product | null = null;

  logs = signal<string[]>([]);

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

  allOutOfStock(): boolean {
    return this.product().every(p => p.stock === 0);
  }
  
  evaluateStateAfterDelivery(): void {
    if (this.allOutOfStock()) {
      this.setState(this.agotado);
      this.addLog("Máquina agotada.");
    } else {
      this.setState(this.sinMoneda);
    }
  }

  addLog(message: string) {
    this.logs.update(logs => [...logs, message]);
  }
}
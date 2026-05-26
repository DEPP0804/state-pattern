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
  
  product: Product[] = productsData.products;
  selectedProduct: Product | null = null;

  allOutOfStock(): boolean {
    return this.product.every(p => p.stock === 0);
  }

  setState(state: State) {
    this.state = state;
  }

  insertCoin(): string {
    return this.state.insertCoin();
  }

  selectProduct(product?: Product): string {
    return this.state.selectProduct(product);
  }
}
import { State } from "./state.abstract";
import { Product } from "../product.interface";

export class EntregandoState extends State {
    
    insertCoin(): string {
        return "Espere, estamos entregando su producto";
    }

    selectProduct(product?: Product): string {
        product!.stock--;
        const productName = this.machine.selectedProduct?.name ?? "Producto";
        this.machine.selectedProduct = null;
        this.machine.setState(this.machine.sinMoneda);
        return `Entregando ${productName} - stock restante: ${product!.stock}`;
    }
}
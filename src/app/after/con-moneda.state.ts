import { State } from "./state.abstract";
import { Product } from "../product.interface";

export class ConMonedaState extends State {

    insertCoin(): string {
        return "Ya hay una moneda insertada";
    }

    selectProduct(product?: Product): string {
        if (product && product.stock > 0) {
            this.machine.selectedProduct = product;
            this.machine.setState(this.machine.entregando);
            return "Procesando entrega...";
        }
        return "Producto agotado, por favor seleccione otro producto";
    }
}
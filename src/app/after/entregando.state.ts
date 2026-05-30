import { State } from "./state.abstract";

export class EntregandoState extends State {
    
    insertCoin(): string {
        return "Estamos entregando su producto - Moneda devuelta";
    }

    selectProduct(): string {
        return "Espere, estamos entregando su producto";
    }

    override onEnter(): void {
        setTimeout(() => {
            const product = this.machine.selectedProduct;
            if (product) {
                const updatedStock = product.stock - 1;
                this.machine.products.update(products =>
                    products.map(p =>
                        p === product ? { ...p, stock: updatedStock } : p
                    )
                );
                this.machine.addLog(`Entregando ${product.name} - stock restante: ${updatedStock}`);
            }
            this.machine.selectedProduct = null;
            this.machine.setState(this.machine.sinMoneda);
        }, 2000);
    }
}
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
                this.machine.product.update(products =>
                    products.map(p =>
                        p === product ? { ...p, stock: p.stock - 1 } : p
                    )
                );
                this.machine.addLog(`Entregando ${product.name} - stock restante: ${product.stock}`);
            }
            this.machine.selectedProduct = null;
            this.machine.evaluateStateAfterDelivery();
        }, 2000);
    }
}
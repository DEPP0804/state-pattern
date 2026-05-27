import { State } from "./state.abstract";

export class AgotadoState extends State {
    
    insertCoin(): string {
        return "Maquina sin productos - Moneda devuelta";
    }

    selectProduct(): string {
        return "No hay productos disponibles";
    }
}
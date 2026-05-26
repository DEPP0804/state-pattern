import { State } from "./state.abstract";

export class SinMonedaState extends State {

  insertCoin(): string {
    this.machine.setState(this.machine.conMoneda);
    return "Moneda insertada, elija su producto";
  }

  selectProduct(): string {
    return "No hay moneda insertada";
  }
}
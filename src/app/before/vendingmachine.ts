export class VendingMachine {
  private state: "SIN_MONEDA" | "CON_MONEDA" | "ENTREGANDO" = "SIN_MONEDA";
  stock: number = 3;

  insertCoin(): string {
    if (this.state === "SIN_MONEDA") {
      this.state = "CON_MONEDA";
      return "Moneda insertada.";
    } else if (this.state === "CON_MONEDA") {
      return "Ya hay una moneda insertada.";
    } else {
      return "Espera, entregando producto...";
    }
  }

  selectProduct(): string {
    if (this.state === "SIN_MONEDA") {
      return "Inserta una moneda primero.";
    } else if (this.state === "CON_MONEDA") {
      if (this.stock > 0) {
        this.state = "ENTREGANDO";
        return this.dispense();
      } else {
        return "Sin stock.";
      }
    } else {
      return "Espera, entregando producto...";
    }
  }

  private dispense(): string {
    this.stock--;
    this.state = "SIN_MONEDA";
    return `Producto entregado. Stock restante: ${this.stock}`;
  }
}
import { Product } from "../product.interface";
import { VendingMachine } from "./vending-machine";

export abstract class State {
  constructor(protected machine: VendingMachine) {}

  abstract insertCoin(): string;
  abstract selectProduct(product?: Product): string;

  onEnter?(): void;
}
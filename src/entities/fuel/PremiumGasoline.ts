import { Fuel } from "./Fuel";

export class PremiumGasoline implements Fuel {
  private name = "Premium Gasoline";

  public combust: () => string = () => {
    return `creating energy with ${this.name}`;
  };
}

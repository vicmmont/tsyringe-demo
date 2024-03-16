import { Fuel } from './Fuel';

export class RegularGasoline implements Fuel {
    private name = "regular gasoline";
    constructor() {}

    public combust: () => string = () => `producing energy with ${this.name}`;
}
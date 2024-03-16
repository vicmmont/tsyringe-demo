import "reflect-metadata";

import setupContainer from "./setupContainer";
import { Vehicle } from "./entities/vehicle/Vehicle";
import TYPES from './types';

const container = setupContainer();
const myCar: Vehicle = container.resolve(TYPES.Vehicle);

console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.stop());
console.log(myCar.shutDown());
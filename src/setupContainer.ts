import { container, predicateAwareClassFactory } from "tsyringe";

import { AllSeasonTire } from "./entities/wheel/AllSeasonTire";
import { FourCylinderEngine } from "./entities/engine/FourCylinderEngine";
import { SixCylinderEngine } from "./entities/engine/SixCylinderEngine";
import { RegularGasoline } from "./entities/fuel/RegularGasoline";
import { PremiumGasoline } from "./entities/fuel/PremiumGasoline";
import { Sedan } from "./entities/vehicle/Sedan";
import { Engine } from "./entities/engine/Engine";
import { Fuel } from "./entities/fuel/Fuel";
import TYPES from "./types";

const getRandomInt = () => Math.floor(Math.random() * 2);

const setupContainer = () => {
  container.register(TYPES.Fuel, {
    useFactory: predicateAwareClassFactory<Fuel>(
      () => !!getRandomInt(),
      RegularGasoline,
      PremiumGasoline,
    ),
  });
  container.register(TYPES.Engine, {
    useFactory: predicateAwareClassFactory<Engine>(
      () => !!getRandomInt(),
      FourCylinderEngine,
      SixCylinderEngine,
    ),
  });
  container.register(TYPES.Wheel, {
    useClass: AllSeasonTire,
  });

  container.register(TYPES.Vehicle, {
    useClass: Sedan,
  });

  return container;
};

export default setupContainer;

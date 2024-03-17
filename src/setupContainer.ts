import { container, predicateAwareClassFactory } from "tsyringe";

import { AllSeasonTire } from "./entities/wheel";
import { Fuel, RegularGasoline, PremiumGasoline } from "./entities/fuel";
import { Sedan } from "./entities/vehicle";
import {
  Engine,
  FourCylinderEngine,
  SixCylinderEngine
} from "./entities/engine";
import TYPES from "./types";

const getRandomInt = () => Math.floor(Math.random() * 2);

const setupContainer = () => {
  container.register(TYPES.Fuel, {
    useFactory: predicateAwareClassFactory<Fuel>(
      () => !!getRandomInt(),
      RegularGasoline,
      PremiumGasoline
    )
  });
  container.register(TYPES.Engine, {
    useFactory: predicateAwareClassFactory<Engine>(
      () => !!getRandomInt(),
      FourCylinderEngine,
      SixCylinderEngine
    )
  });
  container.register(TYPES.Wheel, {
    useClass: AllSeasonTire
  });

  container.register(TYPES.Vehicle, {
    useClass: Sedan
  });

  return container;
};

export default setupContainer;

import "reflect-metadata";
import { mock } from "jest-mock-extended";

import { FourCylinderEngine } from "./FourCylinderEngine";
import { Fuel } from "../fuel";

describe("four cylinder engine tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockFuel = mock<Fuel>();

  it("combusts the fuel when the engine starts", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    mockEngine.start();

    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("combusts the fuel when the engine runs", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    mockEngine.run();

    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("does not combust the fuel when the engine shuts down", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    mockEngine.shutDown();

    expect(mockFuel.combust).not.toHaveBeenCalled();
  });
});

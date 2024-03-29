import "reflect-metadata";
import { mock } from "jest-mock-extended";

import { FourCylinderEngine } from ".";
import { Fuel } from "../fuel";

describe("four cylinder engine tests", () => {
  const mockFuel = mock<Fuel>();
  const mockCombust = "combusting!!!";
  mockFuel.combust.mockReturnValue(mockCombust);

  it("combusts the fuel when the engine starts", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    const result = mockEngine.start();

    expect(result).toEqual(`4CL Engine is ${mockCombust}`);
    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("combusts the fuel when the engine runs", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    const result = mockEngine.run();

    expect(result).toEqual(`4CL Engine is ${mockCombust}`);
    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("does not combust the fuel when the engine shuts down", () => {
    const mockEngine = new FourCylinderEngine(mockFuel);

    const result = mockEngine.shutDown();

    expect(result).toEqual(`Shutting down 4CL Engine`);
    expect(mockFuel.combust).not.toHaveBeenCalled();
  });
});

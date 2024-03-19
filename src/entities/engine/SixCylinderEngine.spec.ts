import "reflect-metadata";
import { mock } from "jest-mock-extended";

import { SixCylinderEngine } from ".";
import { Fuel } from "../fuel";

describe("six cylinder engine tests", () => {
  const mockFuel = mock<Fuel>();
  const mockCombust = "combusting!";
  mockFuel.combust.mockReturnValue(mockCombust);

  it("combusts the fuel when the engine starts", () => {
    const mockEngine = new SixCylinderEngine(mockFuel);

    const result = mockEngine.start();

    expect(result).toEqual(`6CL Engine is ${mockCombust}`);
    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("combusts the fuel when the engine runs", () => {
    const mockEngine = new SixCylinderEngine(mockFuel);

    const result = mockEngine.run();

    expect(result).toEqual(`6CL Engine is ${mockCombust}`);
    expect(mockFuel.combust).toHaveBeenCalledTimes(1);
  });

  it("does not combust the fuel when the engine shuts down", () => {
    const mockEngine = new SixCylinderEngine(mockFuel);

    const result = mockEngine.shutDown();

    expect(result).toEqual(`Shutting down the 6CL Engine`);
    expect(mockFuel.combust).not.toHaveBeenCalled();
  });
});

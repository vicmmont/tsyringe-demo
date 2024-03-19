import "reflect-metadata";
import { mock } from "jest-mock-extended";
import { Sedan } from ".";
import { Wheel } from "../wheel";
import { Engine } from "../engine";

describe("sedan tests", () => {
  const mockWheel = mock<Wheel>();
  mockWheel.move.mockReturnValue("I moved!");
  mockWheel.stop.mockReturnValue("I stopped!");

  const mockEngine = mock<Engine>();
  mockEngine.start.mockReturnValue("I started!");
  mockEngine.run.mockReturnValue("I am running");
  mockEngine.shutDown.mockReturnValue("Hasta la vista, baby!");

  const mySedan = new Sedan(mockEngine, mockWheel);

  it("starts the vehicle", () => {
    const result = mySedan.start();

    expect(result).toEqual("I started!");
    expect(mockEngine.start).toHaveBeenCalledTimes(1);
  });

  it("drives the vehicle", () => {
    const result = mySedan.drive();

    expect(result).toEqual("I moved!");
    expect(mockEngine.run).toHaveBeenCalledTimes(1);
    expect(mockWheel.move).toHaveBeenCalledWith("I am running");
  });

  it("stops the vehicle", () => {
    const result = mySedan.stop();

    expect(result).toEqual("I stopped!");
    expect(mockWheel.stop).toHaveBeenCalledTimes(1);
  });

  it("shuts down vehicle", () => {
    const result = mySedan.shutDown();

    expect(result).toEqual("Hasta la vista, baby!");
    expect(mockEngine.shutDown).toHaveBeenCalledTimes(1);
  });
});

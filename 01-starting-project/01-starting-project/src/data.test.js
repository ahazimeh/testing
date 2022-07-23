// vi is called jest when using jest
// import {jest} from "@jest/globals"
import { it, describe, expect, vi } from "vitest";
import { generateReportData } from "./data";
// this is us using spies
describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    // const logger = vi.fn();
    const logger = vi.fn(() => {});

    //video 69
    // maybe you don't want to add mocking in general or in __mocks__ but only for some tests
    // mockImplementationOnce
    // logger.mockImplementation(() => {});

    generateReportData(logger);
    expect(logger).toHaveBeenCalled(); //.toBeCalled(); //both works
    // toBeCalledTimes(1); // .toBeCalledWith
    //this will make the test pass if logger was called
    //so we are testing whether the fn passed is being called
  });
});

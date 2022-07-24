import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

// it will find this module and replace all the fns in there with empty spy fns
vi.mock("fs");
// replace the default import
vi.mock("path", () => {
  return {
    default: {
      //   join() {}
      // gether all args of join into 1 array
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the write file method", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  writeData(testData, testFileName);
  // the first expectation works now because we forced writeData to return a function in __mocks__
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  writeData(testData, testFileName);
  // the first expectation works now because we forced writeData to return a function in __mocks__
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalled();
  //   expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;
/**
 * hooks works for every suite
 * for concurrent you can use it on the suite to add it to all tests
 * usually concurrent works by default between files but adding it this way
 * will insure tests will run together in the same file
 * the only downside is that perform clashing (global) state
 * manipulations may interfere with each other.
 */
beforeAll(() => {});
beforeEach(() => {
  user = new User(testEmail);
});
afterEach(() => {});
afterAll(() => {});

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  }
);

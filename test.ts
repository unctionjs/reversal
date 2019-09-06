

import reversal from "./index.ts";

test("reversal with positive", () => {
  expect(reversal((value) => value === "0")("0"))
    .toBe(false);
});
test("reversal with negative", () => {
  expect(reversal((value) => value !== "0")("0"))
    .toBe(true);
});

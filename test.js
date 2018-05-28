/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import reversal from "./index"

test("reversal with positive", () => {
  expect(reversal((value) => value === "0")("0"))
    .toBe(false)
})
test("reversal with negative", () => {
  expect(reversal((value) => value !== "0")("0"))
    .toBe(true)
})

// sum.test.js
import sum from "../sum";

test('the addition of 1 and 2', () => {
  expect(sum(1, 2)).toBe(3);
});
// sumOf.test.js
// import sumOf from "../sumOf";
  
// it("calculates all numbers", () => {
//   const array = [1, 2, 3, 4, 5];
//   expect(sumOf(array)).toBe(15);
// }); 

// sumOf.test.js
import sum from "../sum";
import sumOf from "../sumOf";

// test suite
describe("sum", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});

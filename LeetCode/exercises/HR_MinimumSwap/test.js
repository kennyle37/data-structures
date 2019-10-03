const minimumSwaps = require("./index");

test("minimumSwaps([7,1,3,2,4,5,6]) returns 5", () => {
  expect(minimumSwaps([7,1,3,2,4,5,6])).toEqual(5);
});

test("minimumSwaps([4,3,1,2]) returns 3", () => {
  expect(minimumSwaps([4,3,1,2])).toEqual(3);
});

test("minimumSwaps([2,3,4,1,5]) returns 3", () => {
  expect(minimumSwaps([2,3,4,1,5])).toEqual(3);
});

test("minimumSwaps([1,3,5,2,4,6,7]) returns 3", () => {
  expect(minimumSwaps([1,3,5,2,4,6,7])).toEqual(3);
});

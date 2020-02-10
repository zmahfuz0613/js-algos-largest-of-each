let algos = require("../largestOfEach.js");

//LARGEST OF EACH ARRAY
//return the largest integer in each array

test("returns an array of the largest integer in each array", () => {
  expect(algos.largestOfEach([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toMatchObject([ 5, 27, 39, 1001 ]);
});

  
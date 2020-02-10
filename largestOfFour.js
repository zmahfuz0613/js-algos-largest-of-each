//"groups the arrays into an array of arrays of given length, any remainding go in last array"

//return the largest integer in each array
const largestOfFour = arr => {
  var maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let currentElement = arr[i][j];
      if (currentElement >= tempMax) {
        tempMax = currentElement;
      }
    }
    maxes.push(tempMax);
  }
  return maxes;
};
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

module.exports = {
  largestOfFour
};

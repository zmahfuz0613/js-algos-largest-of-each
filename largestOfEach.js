//LARGEST OF EACH ARRAY

const largestOfEach = arr => {

  var result = arr.reduce(function(newArr, nestedArray){
    newArr.push(nestedArray.reduce(function(maxValue, value){
      return maxValue > value ? maxValue : value;
    }));
    return newArr;
  },[]);
  return result;
};

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

module.exports = {
  largestOfEach
};

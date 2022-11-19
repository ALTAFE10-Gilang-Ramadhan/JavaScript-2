function pairSum(arr, target) {
  let len = arr.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] + arr[i + j] == target) {
        result.push(i);
        result.push(i + j);
        return result;
      }
    }
  }
}

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]

module.exports = pairSum;

function findMaxSumSubArray(k, arr) {
  let len = arr.length;
  if (len < k) {
    console.log('Invalid');
    return -1;
  }

  let res = 0;
  for (let i = 0; i < k; i++) res += arr[i];

  let curr_sum = res;
  for (let i = k; i < len; i++) {
    curr_sum += arr[i] - arr[i - k];
    res = Math.max(res, curr_sum);
  }

  return res;
}
console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

module.exports = findMaxSumSubArray;

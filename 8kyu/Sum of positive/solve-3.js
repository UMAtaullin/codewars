function positiveSum(arr) {
  return arr
    .filter(el => el > 0)
    .reduce((acc, curr) => acc + curr, 0)
}

console.log(positiveSum([1, 2, 3, -5, 4, 5])); // 15
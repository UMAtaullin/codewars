function positiveSum(arr) {
  return arr.filter(num=>num >0).reduce((total, num) => total + num, 0)
}

console.log(positiveSum([1, 2, 3, -5, 4, 5])); // 15
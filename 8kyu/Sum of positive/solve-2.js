function positiveSum(arr) {
  return arr.reduce( 
    (total, num) => total = (num > 0 ? total + num : total), 0)
}

console.log(positiveSum([1, 2, 3, -5, 4, 5])); // 15
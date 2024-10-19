function rowWeights(arr: number[]) {
  let [evenSum, oddSum] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return [evenSum, oddSum]
}

console.log(rowWeights([50, 60, 70, 80])) // Output: (120, 140)
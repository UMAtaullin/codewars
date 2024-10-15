function processArray(arr, callback) {
  return arr.map(el => callback(el))
}

const double = num => num * 2

console.log(processArray([1, 2, 3, 4], double)) // [2, 4, 6, 8]
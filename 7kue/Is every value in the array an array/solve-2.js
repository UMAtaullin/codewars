const arrCheck = value => value.every(Array.isArray)

console.log(arrCheck([[1, 2, 3], [4, 5, 6], 7])) // Output: false
console.log(arrCheck([[1, 2, 3], [4, 5, 6]])) // Output: true
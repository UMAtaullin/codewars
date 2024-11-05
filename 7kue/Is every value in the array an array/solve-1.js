const arrCheck = value => {
  for (let i of value) {
    if (!Array.isArray(i)) {
      return false;
    } 
  }
  return true;
}

console.log(arrCheck([[1, 2, 3], [4, 5, 6], 7])) // Output: false
console.log(arrCheck([[1, 2, 3], [4, 5, 6]])) // Output: true
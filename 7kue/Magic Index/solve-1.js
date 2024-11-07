function findMagic(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}

console.log(findMagic([0, 1, 2, 3, 4])); // 0
console.log(findMagic([1, 2, 3, 4, 5])); // -1
console.log(findMagic([1, 2, 3, 3, 5])); // 3
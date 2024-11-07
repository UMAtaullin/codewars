function findMagic(arr) {
  let magicNumber = arr.find((el, i) => el === i);
  return magicNumber === undefined ? -1 : magicNumber;
}

console.log(findMagic([0, 1, 2, 3, 4])); // 0
console.log(findMagic([1, 2, 3, 4, 5])); // -1
console.log(findMagic([1, 3, 2, 3, 5])); // 2
console.log(findMagic([1, 3, 56, 5, 4])); // 4
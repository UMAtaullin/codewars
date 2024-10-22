const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  let sum1 = arr1.reduce((acc, el) => acc + el, 0);
  let sum2 = arr2.reduce((acc, el) => acc + el, 0);
  return sum1 + sum2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Output: 21
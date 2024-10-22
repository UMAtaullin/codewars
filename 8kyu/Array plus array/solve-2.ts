export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((acc, el) => acc + el, 0);
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Output: 21
export function capitals(word: string): number[] {
  let arr = []
  const isUpper = word.match(/[A-Z]/g);
  for (let i = 0; i < word.length; i++) {
    // if (word[i] === word[i].toUpperCase()) {
    if (isUpper && isUpper.includes(word[i])) {
      arr.push(i)
    }
  }
  return arr;
}

console.log(capitals("MyNameIsJohnDoe")); // Output: [ 0, 2, 6, 8, 12 ]
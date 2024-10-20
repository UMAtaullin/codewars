export const reverseSeq = (n: number): number[] => {
  let reversList = [];
  for (let i = n; i > 0; i--) {
    reversList.push(i);
  }
  return reversList;
};

console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]
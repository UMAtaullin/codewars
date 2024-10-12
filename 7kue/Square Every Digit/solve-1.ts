export class Kata {
  static squareDigits(num: number): number {
    const numString = String(num); // Declare with const
    let newString = ''; // Declare with let
    for (let i of numString) {
      newString += Math.pow(+i, 2); // Using Math.pow for clarity
    }
    return +newString; // Convert string back to number
  }
}

console.log(Kata.squareDigits(9119)); // Output: 811181
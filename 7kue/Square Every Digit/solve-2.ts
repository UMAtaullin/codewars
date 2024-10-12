class Kata {
  static squareDigits(num: number): number {
    return (
      +num.toString()
        .split('')
        .map(el => Math.pow(+el, 2))
        .join('')
    );
  }
}

console.log(Kata.squareDigits(9119)); // Output: 811181
function squareDigits(num) {
  numString = String(num)
  newString = ''
  for (let i of numString) {
    newString += ((+i)**2)
  }
  return +newString
}

console.log(squareDigits(9119)) // 811181
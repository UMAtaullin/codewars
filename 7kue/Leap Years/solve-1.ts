function isLeap(year: number):boolean {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

console.log(isLeap(2000))  // True
console.log(isLeap(1604))  // True
console.log(isLeap(1600))  // True
console.log(isLeap(2015))  // False
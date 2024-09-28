function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

console.log(isLeapYear(2000))  // True
console.log(isLeapYear(1604))  // True
console.log(isLeapYear(1600))  // True
console.log(isLeapYear(2015))  // False
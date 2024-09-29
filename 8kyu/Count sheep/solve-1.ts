function countSheep(num: number): string {
  let count = ''
  for (let i = 1; i <= num; i++) {
    count += `${i} sheep...`
  }
  return count
}

console.log(countSheep(3))
console.log(countSheep(0))  
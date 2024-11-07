function smartSum(...args) {
  let totalSum = 0
  for (let arg of args) {
    if (typeof arg === 'number' && Number.isInteger(arg)) {
      totalSum += arg
    } else if (Array.isArray(arg)) {
      totalSum += smartSum(...arg)
    }
  }
  return totalSum
}

console.log(smartSum(1, 2, 3, [4, 5], 6)) // 21
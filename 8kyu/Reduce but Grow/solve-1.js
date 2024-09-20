function grow(x) {
  let p = 1
  for (let i of x) {
    p *= i
  }
  return p
}

let arr = [1, 2, 3, 4]

console.log(grow(arr))
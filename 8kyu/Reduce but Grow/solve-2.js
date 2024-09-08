function grow(x) {
  return x.reduce((acc, el) => acc * el, 1)
}

console.log(grow([1, 2, 3, 4]))
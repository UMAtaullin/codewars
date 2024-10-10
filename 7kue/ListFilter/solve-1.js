function filter_list(l) {
  newL = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      newL.push(l[i])
    }
  }
  return newL
}

console.log(filter_list([1, 2, "a", "b", 3, 4, "c", 5])); // [1, 2, 3, 4, 5]
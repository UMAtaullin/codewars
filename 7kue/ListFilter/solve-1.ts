function filter_list(l: Array<any>): Array<number> {
  return l.filter(el => typeof el === 'number')
}

console.log(filter_list([1, 2, 'a', 'b']));  // Output: [1, 2]
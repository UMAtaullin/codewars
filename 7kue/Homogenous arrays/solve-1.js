function filterHomogenous(arrays) {
  let new_arrays = []
  for (let arr of arrays) {
    if (!arr.length) continue
    let first_type = typeof arr[0]
    let homogenous = true
    for (let item of arr) {
      if (typeof item !== first_type) homogenous = false 
    }
    if (homogenous) new_arrays.push(arr)
  }
  return new_arrays;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])); // [[1, 5, 4], ['b']]
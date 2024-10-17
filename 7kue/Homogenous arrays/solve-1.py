def filter_homogenous(arrays):
  new_arrays = []
  for arr in arrays:
    if len(arr) == 0:
      continue
    first_item = arr[0]
    homogenous = True
    for item in arr:
      if type(item) != type(first_item):
        homogenous = False
      
    if homogenous:
      new_arrays.append(arr)
      
  return new_arrays



# Пример использования
arrays = [[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]
print(filter_homogenous(arrays))  # Вывод: [[1, 5, 4], ['b']]

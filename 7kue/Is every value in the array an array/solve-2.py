def arr_check(arr):
  return all(isinstance(el, list) for el in arr)


print(arr_check([[1, 2, 3], [4, 5, 6], 7]))  # Output: False
print(arr_check([[1, 2, 3], [4, 5, 6]]))  # Output: True

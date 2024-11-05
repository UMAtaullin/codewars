def arr_check(arr):
  for i in arr:
    if type(i) != list:
      return False
  return True


print(arr_check([[1, 2, 3], [4, 5, 6], 7]))  # Output: False
print(arr_check([[1, 2, 3], [4, 5, 6]]))  # Output: True
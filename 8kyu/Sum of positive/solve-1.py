def positive_sum(arr):
  sum = 0
  for num in arr:
    if num > 0:
        sum += num
  return sum


print(positive_sum([1, 2, 3, -10, 4, 5]))  # 15
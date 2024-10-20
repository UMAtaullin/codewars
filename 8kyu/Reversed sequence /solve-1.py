def reverse_seq(n):
  reverse_list = []
  for i in range(n, 0, -1):
    reverse_list.append(i)
  return reverse_list

  
print(reverse_seq(5))


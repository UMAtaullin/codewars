def filter_list(l):
  new_list = []
  for i in l:
    if isinstance(i, int):
      new_list.append(i)
  return new_list
    
print(filter_list([1, 2, 'a', 3, 'b', 4, 'c', 5]))
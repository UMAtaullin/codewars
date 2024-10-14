def capitals(word):
  """
  This function takes a string and returns a string with all capital letters at the beginning of each word.
  """
  capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  arr = []
  for i in range(len(word)):
    if word[i] in capitals:
      arr.append(i)
  return arr
    

print(capitals('ApplE'))  # Output: [0, 4]
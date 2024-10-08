def find_short(s):
  lst = s.split()
  shortest = len(lst[0])
  for word in lst:
    if len(word) <= shortest:
      shortest = len(word)
  return shortest

print(find_short("bitcoin take over the world maybe who knows perhaps"))  # Output: 3
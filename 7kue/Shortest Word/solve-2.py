def find_short(s):
    return min(len(word) for word in s.split())
  
print(find_short("bitcoin take over the world maybe who knows perhaps"))  # Output: 3

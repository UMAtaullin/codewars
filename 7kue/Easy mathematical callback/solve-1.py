def process_array(arr, callback):
  new_arr = []
  for i in arr:
    new_arr.append(callback(i))
  return new_arr
      

def get_something(a):
    return a * 2

arr = [4, 8, 2, 7, 5]
print(process_array(arr, get_something))

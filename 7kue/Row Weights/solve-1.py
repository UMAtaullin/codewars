def row_weights(array):
    even_sum, odd_sum = 0, 0  
    for i in range(len(array)):
        if i % 2 == 0:
            even_sum += array[i]
        else:
            odd_sum += array[i]
    return even_sum, odd_sum

print(row_weights([50, 60, 70, 80]))  # Output: (120, 140)
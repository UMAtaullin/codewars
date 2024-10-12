def square_digits(num):
    """
    Given a number, square every digit of a number and concatenate them.

    Args:
        num (int): The input number.

    Returns:
        int: The sum of the squares of the digits.

    Examples:
        >>> square_digits(9119)
        81-1-1-81 = 811181
        >>> square_digits(765)
        49-36-25 = 493625
    """

    str_num = str(num)
    str_new = ''
    for i in str_num:
      str_new += str(int(i) ** 2)
      
    return int(str_new)

print(square_digits(9119))  # Output: 811181

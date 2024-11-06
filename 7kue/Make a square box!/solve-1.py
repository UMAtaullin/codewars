def create_box(n):
    if n < 2 or n > 30:
        raise ValueError("n must be between 2 and 30.")

    top_bottom = "-" * n

    middle_row = "-" + " " * (n - 2) + "-"

    box = [top_bottom] + [middle_row] * (n - 2) + [top_bottom]

    return box


print(create_box(5))
print(create_box(3))

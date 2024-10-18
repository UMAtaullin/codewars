def scrolling_text(text):
    upper_text = text.upper()
    arr = []
    for i in range(len(upper_text)):
        arr.append(upper_text[i:] + upper_text[:i])
    return arr

print(
    scrolling_text("codewars")
)  # Output: ['CODEWARS', 'ODEWARSC', 'DEWARSCO', 'EWARSCOD', 'WARSCODE', 'ARSCODEW', 'RSCODEWA', 'SCODEWAR']

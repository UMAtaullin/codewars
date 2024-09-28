def is_leap_year(year):
    return year % 4 == 0 and year % 100 != 0 or year % 400 == 0 


print(is_leap_year(2000))  # True
print(is_leap_year(1604))  # True
print(is_leap_year(1600))  # True
print(is_leap_year(2015))  # False

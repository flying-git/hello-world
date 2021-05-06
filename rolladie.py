import random
import array as arr

numbers_list = [0, 2, 4, 6, 8, 100]
numbers_array = arr.array('i', numbers_list)

n = random.randint(0,5)
print(numbers_array[n])
m = random.randint(0,5)
print(numbers_array[m])


def qsort(arr):
  if len(arr) <= 1:
    return arr
  else:
    min = arr[0]
    return qsort([x for x in arr[1:] if x < min]) + [min] + qsort([x for x in arr[1:] if x >= min])

test_arr = [10, 2, 55, 100, 0, 6]

print(qsort(test_arr))

print(qsort([1, 0]))

print(qsort([0]))

print(qsort([]))
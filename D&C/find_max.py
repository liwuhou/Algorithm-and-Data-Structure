
# 找出列表中最大的数字
def find_max(arr):
  if len(arr) == 0:
    return None
  elif len(arr) == 1:
    return arr[0]
  elif len(arr) == 2:
    return arr[0] if arr[0] > arr[1] else arr[1]
  else:
    return find_max([find_max(arr[:2]), find_max(arr[2:])])

test_arr0 = []
print(find_max(test_arr0))
test_arr1 = [100]
print(find_max(test_arr1))
test_arr2 = [0, 1, 2, 10, 4, 5, 6, 7, 9]
print(find_max(test_arr2))
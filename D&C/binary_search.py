
# 利用 D&C 实现二分查找
def binary_search(arr, val):
  if len(arr) == 0:
    return None
  else:
    mid = len(arr) // 2
    if arr[mid] == val:
      return arr[mid]
    elif arr[mid] > val:
      return binary_search(arr[:mid], val)
    else:
      return binary_search(arr[mid + 1:], val)

test_arr = [1, 2, 3, 4, 5, 8, 9, 11, 16, 200]
print(binary_search(test_arr, 1))
print(binary_search(test_arr, 200))
print(binary_search(test_arr, 55))
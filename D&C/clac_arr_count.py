
# 编写一个递归函数来计算列表包含的元素数

def calc_len(arr):
  if len(arr) == 0:
    return 0
  
  return 1 + calc_len(arr[1:])

test_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '10']

print(calc_len(test_arr))
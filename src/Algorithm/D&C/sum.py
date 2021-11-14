# D&C 即分而治之的算法，将问题拆分为一个个小问题逐个攻克

# 使用D&C思想实现一个累加方法
# 第一步，找出简单的基线条件
# 第二步，确定如何缩小问题的规模，使其符合基线条件
def sum(arr):
  # 基线条件
  if len(arr) == 0:
    return 0
  if len(arr) == 1:
    return arr[0]

  # 缩小问题的规模
  return arr[0] + sum(arr[1:])

# test
test_arr = [1, 2, 3, 4]
print(sum(test_arr))

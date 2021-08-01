快排是一种非常常见的排序算法，比选择排序要快上很多。在C语言中，其标准函数库 `qsort` 实现的就是快速排序算法。快排也使用了 `D&C`。

来拆解一下，快速排序的基线条件和递归条件是啥。

其一，基线条件就是把数组拆到不用排序的情况。如下

```python
def qsort(arr):
  if len(arr) == 0:
    return []
  elif len(arr) == 1:
    return arr

# 即
def qsort(arr):
  if len(arr) <= 1:
    return arr
```

上面这两种情况是不用排序的，直接返回就可以了。

然后我们需要不断地逼近这两个基线条件
将数组越逼越小，直到达到基线条件

```python
def qsort(arr):
  if len(arr) <= 1:
    return arr
  else:
    min = arr[0]
    return qsort([x for x in arr[1:] if x < min]) + [min] + qsort([x for x in arr[1:] if x >= min])
```


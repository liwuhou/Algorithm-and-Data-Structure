# 使用贪心算法解决集合覆盖问题

'''
假设想要办一个广播节目，让全美50个州的听众都收听得到。
为此，你需要决定在哪些广播台播出。在每个广播台播出都需要支付费用，因此你力图在尽可能少的广播台播出。
'''

# 现在有如下需要覆盖的州
states_needed = set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

# 现有广播台名单如下，使用散列表表示
stations = {}
stations['kone'] = set(['id', 'nv', 'ut'])
stations['ktwo'] = set(['wa', 'id', 'mt'])
stations['kthree'] = set(['or', 'nv', 'ca'])
stations['kfour'] = set(['nv', 'tu'])
stations['kfive'] = set(['ca', 'az'])

# 其中键为广播台的名称，值为广播覆盖的州

# 定义一个集合用来存放最终选择的州
final_stations = set()

'''
如果一一列出每个可能的广播台集合，可能的集合有 2 的 n 次方个，然后在这些集合中找出各州中最小的集合。
由于存在可能的子集有 2 的 n 次方个，所以运行的时间是 O(2 的 n 次方)，这样计算的效率就太低了
我们可以利用贪婪算法，近似地获得非常接近的值
操作思路如下：
第一，选择这些电台中，覆盖了最多未覆盖州的电台。即便这些电台已经覆盖了一些已经覆盖了的州也没关系
重复以上操作，直到覆盖了所有的州
'''

# 计算答案

# 还未覆盖的州，遍历完
while states_needed:
  # 暂存最佳的站点
  best_station = None
  # 站点所广播的州
  states_covered = set()
  # 遍历广播站列表
  for station, states in stations.items():
    # 取广播站与还未覆盖的州的交集
    covered = states_needed & states
    # 筛出最大的集合
    if len(covered) > len(states_covered):
      best_station = station
      states_covered = covered
  # 追加到站点集合
  final_stations.add(best_station)
  # 取剩余未覆盖的州与广播中包含最大站点的差集
  states_needed -= states_covered

print(final_stations)

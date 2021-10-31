
# 加权图结构
graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

# 可以这么获取到 start 节点的邻居
# print(graph['start'].keys())

graph['a'] = {}
graph['a']['fin'] = 1

graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5

graph['fin'] = {}

# 创建开销表
infinity = float('inf')
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

# 还需要一个存储父节点的散列表
parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = None

# 用来记录已处理过的数组
processed = []

# 处理逻辑
'''
1. 只要还有要处理的节点
2. 获取离起点最近的节点
3. 更新其邻居的开销
4. 如果有邻居的开销被更新，同时更新其父节点
5. 将该节点标记为处理过，重复以上步骤
'''

# 代码实现
# 寻找未处理的节点中，找出开销最小的节点
def find_lowest_cost_node(costs):
  lowest_cost = float('inf')
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node

def find_lowest_cost_path():
  node = find_lowest_cost_node(costs)
  while node is not None:
    cost = costs[node]
    neighbors = graph[node]
    for n in neighbors:
      new_cost = cost + neighbors[n]
      if costs[n] > new_cost:
        costs[n] = new_cost
        parents[n] = node
    processed.append(node)
    node = find_lowest_cost_node(costs)
  
find_lowest_cost_path()

def print_path(parents):
  res = 'fin'
  node = parents['fin']
  while node is not None:
    res = node + ' -> ' + res
    node = parents.get(node, None)
  return res

print(costs)
print(parents)
print(print_path(parents))
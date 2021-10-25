
graph = {}
graph['start'] = {}
graph['start']['a'] = 5
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['c'] = 4
graph['a']['d'] = 2

graph['b'] = {}
graph['b']['d'] = 7

graph['c'] = {}
graph['c']['d'] = 6
graph['c']['fin'] = 3

graph['d'] = {}
graph['d']['fin'] = 1

graph['fin'] = {}

infinite = float('inf')
costs = {}
costs['a'] = 5
costs['b'] = 2
costs['c'] = infinite
costs['d'] = infinite
costs['fin'] = infinite 

parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['c'] = None
parents['d'] = None
parents['fin'] = None

processed = []

def find_lowest_node(costs):
  lowest_cost = float('inf')
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if node not in processed and cost < lowest_cost:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node

def find_lowest_path():
  node = find_lowest_node(costs)
  while node is not None:
    cost = costs[node]
    neighbor = graph[node]
    for n in neighbor:
      new_cost = cost + neighbor[n]
      if costs[n] > new_cost:
        costs[n] = new_cost
        parents[n] = node
    processed.append(node)
    node = find_lowest_node(costs)

def print_path(parents):
  res = 'fin'
  node = parents['fin']
  while node is not None:
    res = node + ' -> ' + res
    node = parents.get(node, None)
  return res

find_lowest_path()
print(parents)
print(costs)
print(print_path(parents))
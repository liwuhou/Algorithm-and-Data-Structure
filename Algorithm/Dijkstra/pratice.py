
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

infinite = float('inf')
costs = {}
costs['a'] = 5
costs['b'] = 2
costs['fin'] = infinite 

parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
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
    new_cost = costs[node]
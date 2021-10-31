from collections import deque

graph = {}

graph['me'] = ['bob', 'alice', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['bob'] = []
graph['thom'] = []
graph['jonny'] = []

# 用以模拟找目标节点的方法
def person_is_seller(name):
  return name[-1] == 'm'

def search(name):
    searched = []
    search_queue = deque()
    search_queue += graph[name]

    while(search_queue):
        person = search_queue.popleft()
        if person not in searched:
            if person_is_seller(person):
                print('%s is seller' % person)
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False

# test
res = search('me')
print(res)
        

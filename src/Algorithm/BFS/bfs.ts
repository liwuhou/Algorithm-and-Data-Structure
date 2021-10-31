import Queue from '../../Structure/queue/queue'
import Tree, { TreeNode } from '../../Structure/tree/tree'

// 广度优先遍历树的方法

function walkBFS<T>(root: TreeNode<T>, iterator) {
  const queue = new Queue<TreeNode<T>>()
  queue.enqueue(root)

  while (!queue.isEmpty) {
    const currentNode = queue.dequeue()
    iterator?.(currentNode)
    if (currentNode.left) {
      queue.enqueue(currentNode.left)
    }
    if (currentNode.right) {
      queue.enqueue(currentNode.right)
    }
  }
}

{
  // test
  const root = new Tree<number>(1)
  root.left = new Tree(2)
  root.right = new Tree(3)
  root.left.left = new Tree(4)
  root.left.right = new Tree(5)

  console.log(root)

  walkBFS(root, (item) => {
    console.log(item)
  })
}

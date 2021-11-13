import Queue from '../../Structure/queue/queue'
import Tree, { TreeNode } from '../../Structure/tree/tree'

// 广度优先遍历树的方法

export function walkBFS<T>(root: TreeNode<T>, iterator) {
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

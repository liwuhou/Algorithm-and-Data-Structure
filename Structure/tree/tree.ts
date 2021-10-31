
export interface TreeNode<T> {
  value?: T 
  left?: TreeNode<T>
  right?: TreeNode<T>
}


export default class Tree<T> implements TreeNode<T> {
  public value: T
  public left: TreeNode<T>
  public right: TreeNode<T>

  constructor(value: T) {
    this.value = value
  }
}

const root = new Tree<number>(1)
root.left = new Tree(2)
root.right = new Tree(3)

console.log(root)
// Tree { value: 1, left: Tree { value: 2 }, right: Tree { value: 3 } }


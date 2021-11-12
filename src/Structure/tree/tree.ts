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

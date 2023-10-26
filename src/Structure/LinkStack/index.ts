export interface IStack<T = any> {
  isEmpty: boolean
  push(v: T): void
  pop(): T | void
  peek(): T | void
}

export class LinkStack<T> implements IStack<T> {
  isEmpty: boolean
  constructor() {
    this.isEmpty = true
  }

  push(value: T) {}

  pop(): T | void {
    if (this.isEmpty) return
  }

  peek(): T | void {}
}

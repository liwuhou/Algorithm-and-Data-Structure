export const OverflowError = new Error('StructArray overflow')
export const UnderflowError = new Error('StructArray underflow')
export const InvalidIndex = new Error('StructArray InvalidIndex')

abstract class IStaticArray<T> {
  /** the length of array */
  abstract length: number
  /** stored data */
  abstract data: { [key in string]: T }
  /** get a item in array */
  abstract get: (index: number) => T | void | never
  /** push a item on tail of array, O(1) time complex */
  abstract push: (item: T) => void | never
  /** pop a item on tail of array O(1) time complex */
  abstract pop: () => T | never
  /** insert a item in index position of array, O(n) time complex */
  abstract insert: (index: number, item: T) => void | never
  /** remove a item in array, O(n) time complex */
  abstract remove: (item: T) => boolean

  constructor(capacity: number) {}
}

class StaticArray<T> implements IStaticArray<T> {
  public length: number
  private readonly capacity: number
  public data: { [key in string]: T }

  constructor(capacity: number) {
    this.length = 0
    this.capacity = capacity
  }

  private checkMaxSize(): boolean {
    return this.length >= this.capacity
  }

  get(index: number): T | void | never {
    if (index < 0) throw InvalidIndex

    return this.data[index]
  }

  push(item: T): void | never {
    if (this.checkMaxSize()) throw OverflowError
    this.data[this.length - 1] = item
    this.length++
  }

  pop(): T | never {
    if (this.length === 0) throw UnderflowError

    const last = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return last
  }

  insert(index: number, item: T): void | never {
    if (index > this.capacity - 1 || index < 0) throw InvalidIndex
    if (this.checkMaxSize()) throw OverflowError

    let cur = this.length
    while (cur >= index) {
      this.data[cur + 1] = this.data[cur]
    }
    this.data[index] = item
  }

  remove(item: T): boolean {
    let flag = false
    let cur = 0
    while (cur < this.length) {
      if (item === this.data[cur]) {
        flag = true
        break
      }
      cur++
    }

    if (flag) {
      delete this.data[cur]
      while (cur < this.length - 1) {
        this.data[cur] = this.data[cur + 1]
        cur++
      }
      delete this.data[this.length - 1]
    }

    return flag
  }
}

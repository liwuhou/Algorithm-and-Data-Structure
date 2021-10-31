
export interface IQueue<T> {
  enqueue: (value: T) => void
  dequeue: () => T | null
  clear: () => void
  isEmpty: boolean
}

export default class Queue<T> implements IQueue<T> {
  private queue: T[]

  constructor() {
    this.queue = []
  }

  get isEmpty() {
    return this.queue.length === 0
  }
  
  enqueue(value: T) {
    this.queue.push(value)
  }
  dequeue(): T | null {
    if (this.queue.length > 0) {
      return this.queue.shift()
    } else {
      return null
    }
  }
  clear(): void {
    this.queue = []
  }
}

{
  // test
  const queue = new Queue<number>()

  queue.enqueue(1)
  queue.enqueue(2)
  console.log(queue)
  console.log(queue.dequeue())
  console.log(queue.dequeue())
  console.log(queue.dequeue())
  queue.enqueue(3)
  console.log(queue)
  queue.clear()
  console.log(queue)

}
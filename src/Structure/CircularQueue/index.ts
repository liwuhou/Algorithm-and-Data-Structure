export interface QueueNode<T> {
  front: number
  rear: number
  data: {
    [key in string]: T
  }
}

export const CircularQueueTypeError = new Error(
  "CircularQueue's max size must be a number type data",
)
export const OverflowError = new Error('CircularQueue overflow')
export const UnderflowError = new Error('CircularQueue underflow')

export class CircularQueue<T> {
  /** 队列长度 */
  maxSize: number
  /** 队列数据 */
  queue: QueueNode<T> = {
    front: 0,
    rear: 0,
    data: {},
  }

  constructor(maxSize: number) {
    if (typeof maxSize !== 'number') throw CircularQueueTypeError
    this.maxSize = maxSize
  }

  private getQueue(index: number): T {
    return this.queue.data[String(index)]
  }

  enqueue(data: T): boolean | never {
    if ((this.queue.rear + 1) % this.maxSize === this.queue.front) {
      /** 上溢 */
      throw OverflowError
    }
    this.queue.data[String(this.queue.rear)] = data
    this.queue.rear = (this.queue.rear + 1) % this.maxSize
    return true
  }

  dequeue(): T | never {
    if (this.queue.rear === this.queue.front) {
      /** 下溢 */
      throw UnderflowError
    }
    const data = this.getQueue(this.queue.front)
    delete this.queue.data[this.queue.front]
    this.queue.front++

    return data
  }

  clear(): void {
    // while (this.queue.front !== this.queue.rear) {
    //   delete this.queue.data[String(this.queue.front)]
    //   this.queue.front = ++this.queue.front % this.maxSize
    // }
    this.queue.data = {}
    this.queue.front = this.queue.rear = 0
  }
}

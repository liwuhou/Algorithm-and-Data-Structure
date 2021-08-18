
interface QueueNode<T> {
  front: number
  rear: number
  data: {
    [key in string]: T
  }
}

class CircularQueue<T> {
  /** 队列长度 */
  maxSize: number
  /** 队列数据 */
  queue: QueueNode<T> = {
    front: 0,
    rear: 0,
    data: {}
  }

  constructor(maxSize: number) {
    if (typeof maxSize !== 'number') throw new Error('CircularQueue\'s max size must be a number type data')
    this.maxSize = maxSize
  }

  private getQueue(index: number): T{
    return this.queue.data[String(index)]
  }

  enqueue(data: T): boolean | never{
    if ((this.queue.rear + 1) % this.maxSize === this.queue.front) {
      /** 上溢 */
      throw new Error('CircularQueue overflow')
    }
    this.queue.data[String(this.queue.rear)] = data
    this.queue.rear = ++this.queue.rear % this.maxSize
    return true
  }

  dequeue(): T | never{
    if(this.queue.rear === this.queue.front) {
      /** 下溢 */
      throw new Error('CircularQueue underflow')
    }
    const data = this.getQueue(this.queue.front)
    this.queue.front = ++this.queue.front % this.maxSize
    return data
  }

  clear(): void{
    while(this.queue.front !== this.queue.rear) {
      delete this.queue.data[String(this.queue.front)]
      this.queue.front = ++this.queue.front % this.maxSize
    }
    this.queue.front = this.queue.rear = 0
  }
}

// test
const q = new CircularQueue<number>(2)

q.enqueue(0)
// q.enqueue(1) // overflow
const a = q.dequeue()
console.log(a)
// q.dequeue() // underflow
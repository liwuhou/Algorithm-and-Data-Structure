import CircularQueue, {
  CircularQueueTypeError,
  OverflowError,
  UnderflowError,
} from './circular_queue'

const q = new CircularQueue<number>(2)

test('invalid type of Circular queue max size', () => {
  const t = () => new CircularQueue('string' as unknown as number)
  expect(t).toThrow(CircularQueueTypeError)
})

test('make a circular queue that has 2 max size', () => {
  expect(q.maxSize).toBe(2)
})

test('enqueue a number in circular queue', () => {
  q.enqueue(0)
  expect(q).toEqual({
    queue: { front: 0, rear: 1, data: { 0: 0 } },
    maxSize: 2,
  })
})

test('test overflow case', () => {
  q.enqueue(1)
  const t = () => q.enqueue(2)
  expect(t).toThrow(OverflowError)
})

test('dequeue a number in circular queue', () => {
  expect(q.dequeue()).toBe(1)
})

test('test clear the queue', () => {
  q.clear()
  console.log(q.queue)
  expect(q.queue).toEqual({
    front: 0,
    rear: 0,
    data: {},
  })
})

test('test underflow case', () => {
  const t = () => q.dequeue()
  expect(t).toThrow(UnderflowError)
})

console.log('circular queue done')

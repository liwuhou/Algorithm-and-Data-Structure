import StaticArray, {
  OverflowError,
  UnderflowError,
  InvalidIndex,
} from './static_array'

const arr = new StaticArray<number>(100)
const test_arr = Array.from({ length: 100 }, (_, idx) => idx)

test('test underflow case', () => {
  const t = () => arr.pop()
  expect(t).toThrow(UnderflowError)
})

test('make a Static Array that has 100 items capacity', () => {
  expect(arr.data).toEqual({})
})

test('push 100 items in arr', () => {
  test_arr.forEach((item) => arr.push(item))
  expect(arr.data).toEqual(
    test_arr.reduce((total, item) => ({ ...total, [item]: item }), {}),
  )
})

test('test iterator method', () => {
  let flag = true

  arr.iterator((item, index) => {
    if (item !== test_arr[index]) {
      flag = false
    }
  })

  expect(flag).toBe(true)
})

test('test overflow err', () => {
  const t = () => arr.push(100)
  expect(t).toThrow(OverflowError)
})

test('array pop all items', () => {
  let flag = true
  while (arr.length > 0) {
    if (test_arr.pop() !== arr.pop()) {
      flag = false
    }
  }

  expect(flag).toBe(true)
})

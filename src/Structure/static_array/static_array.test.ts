import StaticArray, {
  OverflowError,
  UnderflowError,
  InvalidIndex,
} from './static_array'

const arr = new StaticArray<number>(100)
const test_arr = Array.from({ length: 100 }, (_, idx) => idx)

test('make a Static Array that has 100 items capacity', () => {
  expect(arr.data).toEqual({})
})

test('static array get index in error case', () => {
  const t = () => arr.get(-1)
  const e = () => arr.get(100)
  const r = () => arr.insert(100, 1)
  expect(t).toThrow(InvalidIndex)
  expect(e).toThrow(InvalidIndex)
  expect(r).toThrow(InvalidIndex)
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

test('test underflow case', () => {
  const t = () => arr.pop()
  expect(t).toThrow(UnderflowError)
})

test('static array test insert method', () => {
  arr.push(0)
  arr.push(2)

  arr.insert(1, 1)
  expect(arr.data).toEqual({ 0: 0, 1: 1, 2: 2 })
})

test('static array remove the item that is 1', () => {
  let res_bool = arr.remove(1)

  expect(res_bool).toBe(true)
  expect(arr.data).toEqual({ 0: 0, 1: 2 })
})

test('static array remove the not exist item', () => {
  let res_bool = arr.remove(1000)

  expect(res_bool).toBe(false)
})

import { bubbleSort } from '.'

test('test bubbleSort', () => {
  const arr = [7, 2, 9, 1, 5, 3, 8, 4, 6, 10]

  expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

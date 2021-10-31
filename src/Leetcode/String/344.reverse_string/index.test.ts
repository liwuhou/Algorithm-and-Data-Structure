import { reverseString } from './index'

test('input ["H","a","n","n","a","h"] to be ["h","a","n","n","a","H"]', () => {
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H',
  ])
})

test('input ["h", "e", "l", "l", "o"] to be ["o", "l", "l", "e", "h"]', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ])
})

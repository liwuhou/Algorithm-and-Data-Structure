import { letterCombinations } from './index'

test('letter combinations of a phone number test, input ""', () => {
  expect(letterCombinations('')).toEqual([])
})

test('letter combinations of a phone number test, input "2"', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})

test('letter combinations of a phone number test, input "23"', () => {
  expect(letterCombinations('23')).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ])
})

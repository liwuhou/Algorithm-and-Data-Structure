/**
 * Implement a function that receive decimal number into a binary number.
 * And we can use the Stack structure to implement it.
 */

import { Stack } from '../../../Structure'

export const decimal2Binary = (num: number): string => {
  if (num === 0) return '0'
  const tmpStack = new Stack<number>()

  while (num !== 0) {
    tmpStack.push(num % 2)
    num = Math.floor(num / 2)
  }

  let res = ''
  while (!tmpStack.isEmpty) {
    res += tmpStack.pop()
  }
  return res
}
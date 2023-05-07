import { isValidParentheses } from '.'

describe('Is valid parentheses', () => {
  const q = '([{()}])'
  const w = '({])}'

  it('test valid case', () => {
    expect(isValidParentheses(q)).toBeTruthy()
  })
  it('test invalid case', () => {
    expect(isValidParentheses(w)).toBeFalsy()
  })
})

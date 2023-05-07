import { generateRandom, generateRandomGroup } from '.'

describe('generateRandom', () => {
  it('0 ~ 1', () => {
    const results = generateRandomGroup()
    expect(results.every((result) => result >= 0 && result <= 1)).toBeTruthy()
  })

  it('1 ~ 100', () => {
    const results = generateRandomGroup(1000, 1, 100)
    expect(results.every((item) => item >= 0 && item <= 100))
  })
})

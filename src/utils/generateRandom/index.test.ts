import { generateRandom } from '.'

const generateGroupRandomArr = (count = 100, low = undefined, high = undefined) =>
  Array.from(new Array(count), _ => generateRandom(low, high))

describe('generateRandom', () => {
  it('0 ~ 1', () => {
    const results = generateGroupRandomArr()
    expect(results.every((result) => result >= 0 && result <= 1)).toBeTruthy()
  })

  it('1 ~ 100', () => {
    const results = generateGroupRandomArr(1000, 1, 100)
    expect(results.every((item) => item >= 0 && item <= 100))
  })
})

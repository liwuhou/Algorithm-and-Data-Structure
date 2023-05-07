
export const generateRandom = (low = 0, high = 1) => {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

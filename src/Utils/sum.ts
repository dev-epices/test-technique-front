/**
 * Flo: Calculate the sum of a given array of number.
 *
 * @returns A number.
 */
export const sum = (numbers: number[]) =>
  numbers.reduce((a, b) => {
    return a + b
  })

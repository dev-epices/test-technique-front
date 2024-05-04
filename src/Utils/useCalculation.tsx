// import { DataPoint, Site } from '../data/types'

/**
 * Flo: ratio calculation (generic percent between 2 numbers)
 * @param numerator number, the value that we want to get in percent
 * @param denominator number, the relative 100
 * @returns a number which is the numerator in a percent ratio
 */
export const ratio = (numerator: number, denominator: number) => {
  let percentCalc = (numerator * 100) / denominator

  return percentCalc
}

/**
 * Flo : Status calculation, take two arrays of numbers to calc both sums and return the ratio (percent)
 * @param allProdsThisDay array of productions
 * @param allRefsThisDay array of references
 * @returns number (taux de production)
 */
export const statusCalculation = function (allProdsThisDay: number[], allRefsThisDay: number[]) {
  const cumulProds =
    allProdsThisDay !== undefined
      ? allProdsThisDay.reduce((a, b) => {
          return a + b
        })
      : null

  const cumulRefs =
    allRefsThisDay !== undefined
      ? allRefsThisDay.reduce((a, b) => {
          return a + b
        })
      : null

  let ratioProdRef = 0
  ratioProdRef = ratio(cumulProds!, cumulRefs!)

  return ratioProdRef
}

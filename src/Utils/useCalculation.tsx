// import { DataPoint, Site } from '../data/types'

/**
 * Flo: production ratio calculation (or generic percent between 2 numbers)
 * @param totalProds number, the value that we want to get in percent
 * @param totalRefs number, the relative 100
 * @returns number
 */
export const tauxProd = (totalProds: number, totalRefs: number) => {
  let tauxProdCalc = (totalProds * 100) / totalRefs

  return tauxProdCalc
}

/**
 * Flo : Taux de Production calculation, take two arrays of numbers to calc both sums and return the ratio (percent)
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

  let ratio = 0
  ratio = tauxProd(cumulProds!, cumulRefs!)

  return ratio
}

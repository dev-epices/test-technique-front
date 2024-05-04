import { fetchDataForDay } from '../data/fetch'
import { ratio } from './useCalculation'

export const fetchAllProds = async (id: number, date: Date) => {
  const all = {
    productionPercentage: 0,
  }
  let result = await Promise.all([
    (await fetchDataForDay(id, date)).map((e) => e.production),
    (await fetchDataForDay(id, date)).map((e) => e.reference),
    // (await fetchDataForDay(id, date)).map((e) => {const obj = { "production": e.production, "reference": e.reference}}),
  ])
    .then((values) => {
      console.log(`prods: ${values[0]}`)
      console.log(`prodsSum: ${values[0].reduce((a, b) => a + b)}`)
      // console.log(`obj ${values[2]}`)
      const prodSum = values[0].reduce((a, b) => a + b)
      const refSum = values[1].reduce((a, b) => a + b)
      const percentProd = ratio(prodSum, refSum)
      all.productionPercentage = percentProd

      console.log(`all.prod : ${all.productionPercentage}`)
    })
    .catch((error) => console.log(error))

  return all
}

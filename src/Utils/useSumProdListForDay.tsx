import { useEffect, useState } from 'react'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { DataPoint, Site } from '../data/types'
import { sum } from '../Utils/sum'
/**
 * Flo: Calculate the prod for a given id and a given day
 *
 * @returns A number.
 */
export const useSumProdListForDay = (site_id: number, date: Date) => {
  // const [prods, setProds] = useState<DataPoint[]>([])
  const [prodslist, setProdsList] = useState<number[]>([])
  const [prodSum, setProdSum] = useState<number>()

  useEffect(() => {
    const fetchProds = async () => {
      try {
        // const res = await fetchDataForDay(1234, new Date(2024, 3, 1, 9))
        const res = await fetchDataForDay(site_id, date)
        setProdsList(res.map((e) => e.production))
        const addition = sum(prodslist)
        setProdSum(addition)
      } catch (err) {
        alert('error')
      }
    }
    fetchProds()
  }, [])
  // const addProds = sum(prodslist)

  // const sum = (numbers: number[]) =>
  //   numbers.reduce((a, b) => {
  //     return a + b
  //   })

  return prodSum
}

// export const addProds = (site_id: number, date: Date) => {
//   const getList = useSumProdListForDay(site_id, date)
//   const listSum = sum(getList)
//   return listSum
// }

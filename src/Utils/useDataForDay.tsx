import { useEffect, useState } from 'react'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { DataPoint, Site } from '../data/types'

const useDataForDay = (site_id: number, date: Date) => {
  // const [prods, setProds] = useState<DataPoint[]>([])
  const [prods, setProds] = useState<number[]>([])

  useEffect(() => {
    const fetchProds = async () => {
      try {
        // const res = await fetchDataForDay(1234, new Date(2024, 3, 1, 9))
        const res = await fetchDataForDay(site_id, date)
        setProds(res.map((e) => e.production))
      } catch (err) {
        alert('error')
      }
      // pass dynamic arguments to fetchDataForDay
      // const result = await fetchDataForDay(1234, new Date(2024, 3, 1, 9))
      // .then((res)=>{
      //   setProds(res.map((e)=>e.production))
      // })
      // setProds(result)
    }
    fetchProds()
  }, [])
  return prods
}

export default useDataForDay

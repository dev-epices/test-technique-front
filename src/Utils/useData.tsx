import { useEffect, useState } from 'react'
import { fetchDataForDay } from '../data/fetch'
import { DataPoint } from '../data/types'

const useData = (site_id: number, date: Date) => {
  const [prods, setProds] = useState<DataPoint[]>([])
  // const [query, setQuery] = useState({ date })
  // const [prods, setProds] = useState<number[]>([])

  useEffect(() => {
    const fetchProds = async () => {
      try {
        // const res = await fetchDataForDay(1234, new Date(2024, 3, 1, 9))
        const res = await fetchDataForDay(site_id, date)
        setProds(res)
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
  return (
    <>
      <ul className="flex space-x-2">
        <li className=" w-24 ">Prooduction :</li>
        {prods.map((e, index) => (
          <li key={index}>{e.production}</li>
        ))}

        {/* {fetchDatas.map((e, index) => (
          <li key={index}>{e.production}</li>
        ))}{' '} */}
      </ul>
      <ul className="flex space-x-2">
        <li className="w-24 ">Réféérence :</li>
        {prods.map((e, index) => (
          <li key={index}>{e.reference}</li>
        ))}
        {/* {fetchDatas.map((e, index) => (
          <li key={index}>{e.reference}</li>
        ))} */}
      </ul>
    </>
  )
}
export const getSites_ids = (site_id: number[], date: Date) => {
  const id = site_id
  const datas_date = date
  const message = `getSites_ids result = ${id.toString()} - date = ${datas_date.toJSON()}`
  return message
}

export default useData

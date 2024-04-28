// import useData from '../Utils/useData'
import { useEffect, useState } from 'react'
import { useUiContext } from '../Utils/UiContext'
import useData from '../Utils/useData'
import { DataPoint, Site } from '../data/types'
import { fetchSites, fetchDataForDay } from '../data/fetch'

type SiteCardsProps = {
  id: number
  // calDate: Date
}

const SiteCardDatas = ({ id }: SiteCardsProps) => {
  const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  // console.log(`STCdatas calendarDate : ${calendarDate.datetime}`)
  const [date, setDate] = useState<Date>()

  const [prods, setProds] = useState<DataPoint[]>([])

  // console.log(`STCdatas newData : ${calendarDate.datetime}`)
  let fetchDatas: DataPoint[] = []

  useEffect(() => {
    const newDate = { ...calendarDate }
    setDate(newDate)

    // console.log(`## STCDatas rd1 [newDatas] ${date}`)
    return () => {
      // fetchDatas = useData(id, calendarDate.datetime)
      // console.log(`## STCDatas rd2 [newDatas] ${date}`)
    }
  }, [calendarDate])

  const get = async () => {
    try {
      const res = await fetchDataForDay(id, calendarDate.datetime)
      setProds(res)
    } catch (error) {
      alert('error in sitecard data')
    }
  }

  //   useEffect(() => {
  //     const fetchProds = async () => {
  //       try {
  //         // const res = await fetchDataForDay(1234, new Date(2024, 3, 1, 9))
  //         const res = await fetchDataForDay(id, calendarDate.datetime)
  //         setProds(res)
  //       } catch (err) {
  //         alert('error')
  //       }

  //     }
  //     fetchProds()
  //   }, [])
  //   return prods
  // }

  // const datassToMap = useData(id, calendarDate.datetime)
  // const datasToMap = () => {}

  // const datas = datasForSiteCardData(id, calendarDate.datetime)

  return (
    <>
      <div className="mt-4 w-full text-xs">
        <ul className="flex space-x-2 border-b pb-1 mb-1">
          <span className="w-24 ">changeDate :</span>{' '}
          <span>
            {calendarDate.datetime.toLocaleString('fr-FR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: 'numeric',
            })}
          </span>
        </ul>
      </div>
    </>
  )
}

export default SiteCardDatas

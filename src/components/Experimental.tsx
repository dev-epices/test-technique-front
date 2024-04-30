import { useCallback, useEffect, useState } from 'react'

import { DataPoint } from '../data/types'
import { Production, Reference, Datetime } from './DatasLi'
import { fetchDataForDay } from '../data/fetch'
import { v4 as uuidv4 } from 'uuid'

type DayToShow = {
  site_id: number
  datetime: Date
}
export const Experimental = ({ site_id, datetime }: DayToShow) => {
  // const [dayToShow, setDayToShow] = useState(datetime)
  const [dataPoint, setDataPoint] = useState<DataPoint[]>()
  // const [newDatetime, setNewdatetime] = useState(datetime)

  /**
   * listen if datetime prop change , fetch with datetime value
   */
  useEffect(() => {
    fetchData(site_id, datetime)
  }, [datetime])

  /**
   * memoize fetch function to allow the call in somewhere useEffect
   * update DataPoint state
   */
  const fetchData = useCallback(async (id: number, date: Date) => {
    const data = await fetchDataForDay(id, date)
    setDataPoint(data)
  }, [])

  /** listen dataPoint state
   *
   * @returns if it exist, return Production component
   */
  const productionData = function () {
    return dataPoint?.map((prod) => (
      <>
        <ul key={uuidv4()} className="text-slate-500 dark:text-slate-300 *:pb-1">
          <Datetime
            // key={uuidv4()}
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
          <Production
            // key={uuidv4()}
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
          <Reference
            // key={uuidv4()}
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
        </ul>
      </>
    ))
  }

  return (
    <>
      <div className=" bg-gray-200 dark:bg-slate-800 dark:text-slate-400 px-2 py-1 w-full text-slate-800 pb-1 mb-1 text-xs font-bold">
        {/* <span className=" font-medium text-slate-500">↓</span> */}
        <span>{datetime.toLocaleDateString('fr-FR', { dateStyle: 'long' })}</span>{' '}
      </div>
      <div className="w-full flex justify-between text-xs px-2">
        <ul className="text-slate-400 *:pb-1">
          <li>Hour</li>
          <li>Prod. (kw/h?)</li>
          <li>Réf. (kw/h?)</li>
        </ul>

        {productionData()}
      </div>
    </>
  )
}

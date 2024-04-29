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
        <ul key={uuidv4()} className="text-slate-500">
          <Datetime
            key={uuidv4()}
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
          <Production
            key={uuidv4()}
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
          <Reference
            key={uuidv4()}
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
      <div className=" w-full text-slate-800 border-b pb-1 mb-1">
        → {datetime.toLocaleDateString()}
      </div>
      <div key={uuidv4()} className="flex justify-between gap-8">
        <ul key={uuidv4()}>
          <li>Hour</li>
          <li>Prod. (kw/h?)</li>
          <li>Réf. (kw/h?)</li>
        </ul>

        {productionData()}
      </div>
    </>
  )
}

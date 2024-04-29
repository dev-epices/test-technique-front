import React, { useCallback, useEffect, useState } from 'react'

import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'
import Production from './Production'
import Reference from './Reference'
import Datetime from './Datetime'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { result } from 'lodash'
import { useStatus } from '../Utils/useStatus'

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
    return dataPoint?.map((prod, index) => (
      <>
        <ul key={site_id + index} className="text-slate-500">
          <Datetime datetime={prod.datetime} />
          <Production
            production={prod.production}
            reference={prod.reference}
            datetime={prod.datetime}
          />
          <Reference reference={prod.reference} />
        </ul>
      </>
    ))
  }

  return (
    <>
      <div className=" w-full text-slate-800 border-b pb-1 mb-1">
        → {datetime.toLocaleDateString()}
      </div>
      <div className="flex justify-between gap-8">
        <ul>
          <li>Hour</li>
          <li>Prod. (kw/h?)</li>
          <li>Réf. (kw/h?)</li>
        </ul>

        {productionData()}
      </div>{' '}
    </>
  )
}

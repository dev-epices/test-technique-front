import { useCallback, useEffect, useState } from 'react'

import { DataPoint } from '../data/types'
import { fetchDataForDay } from '../data/fetch'
import { useUiDateContext } from '../Utils/UiContext'

type CardDatasProps = {
  site_id: number
  // datetime: Date
}
export const CardDatas = ({ site_id }: CardDatasProps) => {
  const selectionDate = useUiDateContext()

  const [dataPoint, setDataPoint] = useState<DataPoint[]>()

  /**
   * listen if selectionDate context value change , fetch with selectionDate context value
   */
  useEffect(() => {
    fetchData(site_id, selectionDate)
  }, [selectionDate])

  /**
   * memoize fetch function to allow the call in somewhere useEffect
   * update DataPoint state
   */
  const fetchData = useCallback(async (id: number, date: Date) => {
    const data = await fetchDataForDay(id, date)
    setDataPoint(data)
  }, [])

  return (
    <>
      <div className="w-full flex flex-col text-xs px-2 justify-center gap-1">
        <ul className="inline-flex justify-between *:min-w-12 dark:text-slate-400">
          <li className="text-slate-400">Hour</li>
          {dataPoint?.map((e, index) => (
            <li key={index}>{e.datetime.getHours()} h</li>
          ))}
        </ul>
        <ul className="inline-flex justify-between  *:min-w-12 *:font-semibold">
          <li className="text-slate-400">Prod.</li>
          {dataPoint?.map((e, index) => (
            <li key={index}>{e.production}</li>
          ))}
        </ul>
        <ul className="inline-flex justify-between  *:min-w-12 dark:text-slate-400">
          <li className="text-slate-400">Réf.</li>
          {dataPoint?.map((e, index) => (
            <li key={index}>{e.reference}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

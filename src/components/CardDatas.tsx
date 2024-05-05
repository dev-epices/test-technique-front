import { useCallback, useEffect, useState } from 'react'

import { DataPoint } from '../data/types'
import { Production, Reference, Datetime } from './DatasLi'
import { fetchDataForDay } from '../data/fetch'
import { v4 as uuidv4 } from 'uuid'
import { ratio } from '../Utils/useCalculation'
import { fetchAllProds } from '../Utils/rr'
import { useUiDateContext } from '../Utils/UiContext'

type CardDatasProps = {
  site_id: number
  // datetime: Date
}
export const CardDatas = ({ site_id }: CardDatasProps) => {
  const selectionDate = useUiDateContext()

  // const [dayToShow, setDayToShow] = useState(datetime)
  const [dataPoint, setDataPoint] = useState<DataPoint[]>()
  // const [newDatetime, setNewdatetime] = useState(datetime)
  // const [prods, setProds] = useState([0])

  /**
   * listen if datetime prop change , fetch with datetime value
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
  // TEST
  useEffect(() => {
    fetchAllProds(site_id, selectionDate)
  }, [])
  /** listen dataPoint state
   *
   * @returns if it exist, return Production component
   */

  return (
    <>
      {/* <div className=" bg-gray-200 dark:bg-slate-800 dark:text-slate-400 px-2 py-1 text-slate-800 pb-1 mb-1 text-xs font-bold">
        <span>{selectionDate.toLocaleDateString('fr-FR', { dateStyle: 'long' })}</span>{' '}
      </div> */}
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

        {/* {productionData()} */}
      </div>
    </>
  )
}

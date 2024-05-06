import { useEffect, useState, useCallback } from 'react'
import { DataPoint } from '../data/types'
// import useData from '../Utils/useData'
// import { UiContext, useUiContext } from '../Utils/UiContext'
// import { useStatus } from '../Utils/useStatus'
import { fetchDataForDay } from '../data/fetch'
// import { BsDisplay } from 'react-icons/bs'
import { StatusSelector } from './StatusSelector'
import { statusCalculation } from '../Utils/useCalculation'
import { useUiDateContext } from '../Utils/UiContext'

type DayToShow = {
  site_id: number
  // datetime: Date
}

const Status = ({ site_id }: DayToShow) => {
  const selectionDate = useUiDateContext()
  const [isLoading, setIsLoading] = useState(false)
  const [dataPoint, setDataPoint] = useState<DataPoint[]>()

  useEffect(() => {
    setIsLoading(true)
    fetchData(site_id, selectionDate).then(() => {
      setIsLoading(false)
    }) // fetch datas and update dataPoint state
  }, [selectionDate])

  const fetchData = useCallback(async (id: number, date: Date) => {
    const data = await fetchDataForDay(id, date) // fetch datas
    setDataPoint(data) // update dataPoint state
  }, [])

  /**
   * prods and refs extractions to send to statusCalculation
   * @returns number, "Taux de production" in percent
   */
  const statusCalc = function () {
    // const allprodsaday = dataPoint?.find((e) => e.datetime === date)
    let allProdsThisDay = [0]
    let allRefsThisDay = [0]
    dataPoint !== undefined ? dataPoint.map((e) => allProdsThisDay.push(e.production)) : null
    dataPoint !== undefined ? dataPoint.map((e) => allRefsThisDay.push(e.reference)) : null

    let ratioB = 0

    ratioB = statusCalculation(allProdsThisDay, allRefsThisDay)

    return ratioB
  }
  const spinner = () => {
    return (
      <div className="flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    )
  }

  return (
    <>
      {isLoading ? (
        spinner()
      ) : (
        <>
          <div className="space-x-2 font-extralight text-3xl ">
            <div className="flex items-center justify-center">
              {isNaN(statusCalc()) ? null : (
                <div>
                  <span>{statusCalc().toFixed(1)}</span>
                  <span className="text-xs font-semibold">%</span>
                </div>
              )}
            </div>
          </div>
          <div style={StatusSelector(statusCalc()).rgbBgColor} className="py-2 px-3 rounded-md">
            <div className="h-full w-14 flex justify-center items-center">
              {isLoading ? (
                <div className=" text-xs font-normal opacity-60">Loading...</div>
              ) : (
                <div className="text-xs font-normal opacity-100 dark:text-black text-white">
                  {StatusSelector(statusCalc()).message}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Status

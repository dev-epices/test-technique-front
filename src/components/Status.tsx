import { useEffect, useState, useCallback } from 'react'
import { DataPoint } from '../data/types'
// import useData from '../Utils/useData'
// import { UiContext, useUiContext } from '../Utils/UiContext'
// import { useStatus } from '../Utils/useStatus'
import { fetchDataForDay } from '../data/fetch'
// import { BsDisplay } from 'react-icons/bs'
import { StatusSelector } from './StatusSelector'
import { statusCalculation } from '../Utils/useCalculation'

type DayToShow = {
  site_id: number
  datetime: Date
}

const Status = ({ site_id, datetime }: DayToShow) => {
  // const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  const [isLoading, setIsLoading] = useState(false)
  const [dataPoint, setDataPoint] = useState<DataPoint[]>()

  useEffect(() => {
    setIsLoading(true)
    fetchData(site_id, datetime).then(() => {
      setIsLoading(false)
    }) // fetch datas and update dataPoint state
  }, [datetime])

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

  return (
    <>
      <div className=" w-full my-4 bg-slate-100 rounded-2xl">
        <div className="border bg-white  rounded-2xl p-4  hover:transition-all">
          <div className=" grid grid-cols-3 gap-4 items-center py-2">
            <div
              style={StatusSelector(statusCalc()).rgbColor}
              className="col-span-2 sm:col-span-3 lg:col-span-2 2xl:col-span-3 space-x-2 font-thin text-5xl "
            >
              {/* <span>{txProd(site.max_power, 500).toFixed(1)}</span> */}
              <div className="flex gap-6 items-center">
                <div>
                  <span>{statusCalc().toFixed(1)}</span>
                  <span className="text-xs font-semibold">%</span>
                </div>
                <div className="hidden sm:flex flex-col text-xs">
                  <span className="uppercase font-bold">Tx. de production</span>
                  <span className=" line-clamp-1 ">( Prods × Prods ref ) / 100 </span>
                </div>
              </div>
            </div>
            <div
              style={StatusSelector(statusCalc()).rgbBgColor}
              className="col-span-3 sm:col-span-3 lg:col-span-1 2xl:col-span-3 py-2 px-4 rounded-xl h-[4.2rem]"
            >
              <div className="h-full flex justify-center items-center tracking-wider">
                {isLoading ? (
                  <div className=" text-base font-light opacity-60">Loading...</div>
                ) : (
                  <div className=" text-lg font-light leading-none opacity-100">
                    {StatusSelector(statusCalc()).message}
                  </div>
                )}
                {/* <span className=" text-lg font-light">{StatusSelector(statusCalc()).message}</span> */}
              </div>
            </div>

            {/* <div className="col-span-1 sm:col-span-3 lg:col-span-1 2xl:col-span-3  min-h-12 flex flex-col justify-center">
              {isLoading ? (
                <div style={stylesRoots} className="border bg-slate-400">
                  Loading...
                </div>
              ) : (
                statusChoose(statusCalc())
              )}
            </div> */}
          </div>
        </div>
      </div>

      {/* <div>{statusChoose(statusCalc())}</div> */}
    </>
  )
}

export default Status

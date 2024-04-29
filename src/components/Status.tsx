import React, { useContext, useEffect, useState, useCallback } from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'
import { UiContext, useUiContext } from '../Utils/UiContext'
import { useStatus } from '../Utils/useStatus'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { BsDisplay } from 'react-icons/bs'

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

  const tauxProd = (totalProds: number, totalRefs: number) => {
    let tauxProdCalc = (totalProds * 100) / totalRefs

    return tauxProdCalc
  }

  const statusCalc = function () {
    // const allprodsaday = dataPoint?.find((e) => e.datetime === date)
    let allProdsThisDay = [0]
    let allRefsThisDay = [0]
    dataPoint !== undefined ? dataPoint.map((e) => allProdsThisDay.push(e.production)) : null
    dataPoint !== undefined ? dataPoint.map((e) => allRefsThisDay.push(e.reference)) : null
    // const allProdsThisDay = dataPoint?.map((e) => e.production)
    // const allRefsThisDay = dataPoint?.map((e) => e.reference)

    const cumulProds =
      allProdsThisDay !== undefined
        ? allProdsThisDay.reduce((a, b) => {
            return a + b
          })
        : 77777

    const cumulRefs =
      allRefsThisDay !== undefined
        ? allRefsThisDay.reduce((a, b) => {
            return a + b
          })
        : 77777

    let ratio = 0

    ratio = tauxProd(cumulProds, cumulRefs)

    return ratio
  }
  // console.log(`taux prod ${statusCalc(site_id, datetime)}`)

  // initialize message to return
  const stylesRoots = {
    padding: '0.5rem 1rem',
    borderRadius: '0.75rem',
    color: 'white',
    height: '100%',
  }
  let message = (
    <div style={stylesRoots} className="bg-lime-700 min-h-3">
      NULL
    </div>
  )

  const statusChoose = function (ratio: number) {
    const dataLength = dataPoint?.length
    console.log(`datalenght : ${dataLength}`)
    if (ratio === 0) {
      message = (
        <div style={stylesRoots} className=" bg-gray-400 min-h-3 ">
          A L’ARRÊT
        </div>
      )
    } else if (ratio >= 1 && ratio < 69) {
      message = (
        <div style={stylesRoots} className=" bg-teal-600 min-h-3">
          STATUS DÉGRADÉ
        </div>
      )
    } else if (dataLength === 0) {
      message = (
        <div style={stylesRoots} className=" bg-red-500 min-h-3">
          PAS DE DONNÉES
        </div>
      )
    } else {
      message = (
        <div style={stylesRoots} className=" bg-lime-700 min-h-3">
          STATUS OK
        </div>
      )
    }
    return message
  }

  return (
    <>
      <div className=" w-full my-4 bg-slate-100 rounded-2xl">
        <div className=" bg-white  rounded-2xl p-4  hover:transition-all">
          <div className="grid grid-cols-3 gap-4 items-center py-2">
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 2xl:col-span-3 text-lime-700 space-x-2 font-thin text-5xl ">
              {/* <span>{txProd(site.max_power, 500).toFixed(1)}</span> */}
              <div className="flex gap-6 items-center">
                <div>
                  <span>{statusCalc().toFixed(1)}</span>
                  <span className="text-xs font-semibold">%</span>
                </div>
                <div className="flex flex-col text-xs">
                  <span className=" uppercase font-bold">Tx. de production</span>
                  <span className=" line-clamp-1 ">( Prods × Prods ref ) / 100 </span>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 lg:col-span-1 2xl:col-span-3  min-h-12 flex flex-col justify-center">
              {isLoading ? (
                <div style={stylesRoots} className="border bg-slate-400">
                  Loading...
                </div>
              ) : (
                statusChoose(statusCalc())
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div>{statusChoose(statusCalc())}</div> */}
    </>
  )
}

export default Status

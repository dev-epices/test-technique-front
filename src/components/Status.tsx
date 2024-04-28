import React, { useContext, useEffect, useState, useCallback } from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'
import { UiContext, useUiContext } from '../Utils/UiContext'
import { useStatus } from '../Utils/useStatus'
import { fetchSites, fetchDataForDay } from '../data/fetch'

type DayToShow = {
  site_id: number
  datetime: Date
}

const Status = ({ site_id, datetime }: DayToShow) => {
  // const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  const [dataPoint, setDataPoint] = useState<DataPoint[]>()

  useEffect(() => {
    fetchData(site_id, datetime) // fetch datas and update dataPoint state
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
  let message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">NULL</p>

  const statusChoose = function (ratio: number) {
    const dataLength = dataPoint?.length
    const stylesRoots = { padding: '0.5rem 1rem', borderRadius: '0.75rem', color: 'white' }
    console.log(`datalenght : ${dataLength}`)
    if (ratio === 0) {
      message = (
        <p style={stylesRoots} className=" bg-gray-400 ">
          A L’ARRÊT {ratio}
        </p>
      )
    } else if (ratio >= 1 && ratio < 69) {
      message = (
        <p style={stylesRoots} className=" bg-teal-600">
          STATUS DÉGRADÉ {ratio.toFixed(1)}
        </p>
      )
    } else if (dataLength === 0) {
      message = (
        <p style={stylesRoots} className=" bg-red-500">
          PAS DE DONNÉES {ratio.toFixed(1)}
        </p>
      )
    } else {
      message = (
        <p style={stylesRoots} className=" bg-lime-700">
          STATUS OK : {ratio.toFixed(1)}
        </p>
      )
    }
    return message
  }

  return (
    <>
      <div>{statusChoose(statusCalc())}</div>
      {/* <div>cumulProd {statusCalc()}</div> */}
      {/* {useStatus(site_id, datetime)} */}
    </>
  )
}

export default Status

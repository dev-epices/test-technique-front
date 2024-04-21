// import React from 'react'
import { DataPoint, Site } from '../data/types'
import UlDatas from '../components/UlDatas'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { useState, useEffect } from 'react'
import { sum } from '../Utils/sum'
import useDataForDay from '../Utils/useDataForDay'
import { useSumProdListForDay } from '../Utils/useSumProdListForDay'
import useData from '../Utils/useData'
import useSite from '../Utils/useSite'
import SitesList from './SitesList'

const DatasList = () => {
  //------- get prod for site at a day
  // const dayProdExtract = useDataForDay(1234, new Date(2024, 3, 1, 9))
  //-----

  const getData = useData(1234, new Date(2024, 3, 1, 9))
  console.log(`getData. : ${getData.map((e) => e.production)}`)

  const staticDatas: Array<{ site_id: number; data: Array<DataPoint> }> = [
    {
      site_id: 1234,
      data: [
        {
          datetime: new Date(2024, 3, 1, 9),
          production: 20,
          reference: 20,
        },
        {
          datetime: new Date(2024, 3, 1, 12),
          production: 80,
          reference: 100,
        },
        {
          datetime: new Date(2024, 3, 1, 15),
          production: 44,
          reference: 100,
        },
        {
          datetime: new Date(2024, 3, 1, 18),
          production: 20,
          reference: 20,
        },
      ],
    },

    {
      site_id: 310,
      data: [
        {
          datetime: new Date(2024, 3, 1, 9),
          production: 0,
          reference: 120,
        },
        {
          datetime: new Date(2024, 3, 1, 12),
          production: 0,
          reference: 1000,
        },
        {
          datetime: new Date(2024, 3, 1, 15),
          production: 0,
          reference: 800,
        },
        {
          datetime: new Date(2024, 3, 1, 18),
          production: 0,
          reference: 120,
        },
      ],
    },

    {
      site_id: 8563,
      data: [
        {
          datetime: new Date(2024, 3, 1, 9),
          production: 110,
          reference: 120,
        },

        {
          datetime: new Date(2024, 3, 2, 9),
          production: 8,
          reference: 20,
        },
        {
          datetime: new Date(2024, 3, 2, 12),
          production: 410,
          reference: 500,
        },
      ],
    },
  ]

  const cumulProd = (): React.ReactNode => {
    // const cumulProd = staticDatas.filter(function (prod) {
    //   return prod.site_id === 1234
    // })

    /**
     * Calculate the sum of a all sites productions (static datas) .
     *
     * @returns A number.
     */
    const cumulProdforeEachSite = (datas: Array<{ site_id: number; data: Array<DataPoint> }>) => {
      let arrayToCalculate = []
      for (let i = 0; i < datas.length; i++) {
        console.log(datas[i])
        arrayToCalculate.push(
          datas[i].data
            .map((e) => e.production)
            .reduce((a, b) => {
              return a + b
            })
        )
        // console.log(`arraytocalculate : ${arrayToCalculate}`)
        // console.log(`sum(arraytocalculate) : ${sum(arrayToCalculate)}`)
      }
      return sum(arrayToCalculate)
    }

    return cumulProdforeEachSite(staticDatas)
  }

  return (
    <div className="" /** parent to made sticky work */>
      <div className="sticky top-0 z-10" /** sticky container */>
        <div /** grid layout  */
          className="rounded-xl mb-4 grid lg:grid-cols-3 *:border gap-4 *:rounded-xl  *:bg-white  h-60 bg-gradient-to-b from-slate-200 via-slate-100"
        >
          <div className=" flex flex-col border  p-4">
            <span className="text-xs">Somme de la production cumulée sur l’ensemble des sites</span>
            <div className="flex gap-1 text-lime-700">
              <span className="font-thin text-5xl">{cumulProd()}</span>
              <span className="text-xs font-semibold">unit</span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 p-4">
            <p>Site 1234 | new Date(2024, 3, 1, 9)</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 2xl:grid-cols-2 gap-4">
        <SitesList />
      </div>
      {/* <div className="  rounded-xl">
        <UlDatas staticDatas={staticDatas} />
      </div> */}
    </div>
  )
}

export default DatasList

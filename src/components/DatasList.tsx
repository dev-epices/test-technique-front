// import React from 'react'
import { DataPoint, Site } from '../data/types'
import { sum } from '../Utils/sum'
import SitesList from './SitesList'

type DayToShow = {
  site_id: number
  datetime: Date
}

const DatasList = ({ site_id, datetime }: DayToShow) => {
  //------- get prod for site at a day
  // const getData = useData(1234, new Date(2024, 3, 1, 9))

  // Hard datas uses to calculate sum of all sites production
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
    /**
     * Calculate the sum of a all sites productions (static datas) .
     *
     * @returns A number.
     */
    const cumulProdforeEachSite = (datas: Array<{ site_id: number; data: Array<DataPoint> }>) => {
      let arrayToCalculate = []
      for (let i = 0; i < datas.length; i++) {
        // console.log(datas[i])
        arrayToCalculate.push(
          datas[i].data
            .map((e) => e.production)
            .reduce((a, b) => {
              return a + b
            })
        )
      }
      return sum(arrayToCalculate)
    }

    return cumulProdforeEachSite(staticDatas)
    // return cumulProdforeEachSite(getData)
  }

  return (
    <div /** parent div to made sticky work */>
      <div className="sticky top-0 z-10" /** sticky container */>
        <div
          /** first bloc grid layout - 1 column on mobile devices
           *
           */
          className="rounded-xl mb-4 grid lg:grid-cols-3 *:border gap-4 *:rounded-xl  *:bg-white  h-60 bg-gradient-to-b from-slate-200 via-slate-100"
        >
          <div
            /** first column, full width on mobile devices
             * */ className=" flex flex-col border  p-4"
          >
            <div className="flex gap-1 text-lime-700 ">
              <span className="font-thin text-5xl">{cumulProd()}</span>
              <span className="text-xs font-semibold">unit</span>
            </div>
            <span className="text-xs text-slate-500">
              Somme de la production cumulée sur l’ensemble des sites
            </span>
          </div>
          <div
            /** secondary column - full width on mobile devices
             *
             */
            className="col-span-1 lg:col-span-2 p-4 text-slate-400 text-xs"
          >
            <p>
              <span className="font-bold">site_id :</span> <span>{site_id}</span>
            </p>
            <p>
              <span className="font-bold">datetime :</span> {datetime.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div
        /** grid layout for sites column
         * */ className="grid sm:grid-cols-1 2xl:grid-cols-2 gap-4"
      >
        <SitesList />
      </div>
    </div>
  )
}

export default DatasList

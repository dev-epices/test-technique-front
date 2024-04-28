import React, { useContext, useEffect, useState } from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'
import { UiContext, useUiContext } from '../Utils/UiContext'
import { useStatus } from '../Utils/useStatus'
import Status from '../components/Status'
import SiteCardDatas from './SiteCardDatas'
import { Experimental } from './Experimental'

interface SiteCardProps {
  site: Site
  // date: Date
}

const SiteCard = ({ site }: SiteCardProps) => {
  const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined
  const changeDate = calendarDate
  // console.log(`calendarDate ${calendarDate}`)

  // calcul du taux de production
  //=> (toutes les productions × toutes les reférences)/100
  const txProd = (totalProds: number, totalRefs: number) => {
    let txProdCalc = (totalProds * 100) / totalRefs
    return txProdCalc
  }

  return (
    <>
      <a
        href="#"
        className="flex bg-white rounded overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
      >
        <div className=" transition-all aspect-square flex-none w-24 md:w-48 lg:w-60 xl:w-80">
          <img src={site.picture} className=" w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto w-[25%] text-lg font-semibold text-slate-900">{site.name}</h1>
            <div className="text-xs text-slate-400">{site.id}</div>
            <div className="w-full flex-none text-xs font-medium text-slate-400 border-b pb-4">
              <p className=" line-clamp-1"> {site.address}</p>
            </div>
            <div className="border-b pb-2 flex space-x-2 justify-between w-full py-2 text-xs font-medium text-slate-400">
              <p className="">Max Power: {site.max_power}</p>
              <p>Start date | {site.start_date.toLocaleDateString()}</p>
            </div>
            <div className=" bg-white w-full mb-2 flex flex-col mt-2 rounded-2xl p-4  hover:transition-all">
              <div className="flex flex-wrap  gap-4 items-center py-2">
                <div className="text-lime-700 space-x-2 font-thin text-5xl">
                  <span>{txProd(site.max_power, 500).toFixed(1)}</span>
                  <span className="text-xs font-semibold">%</span>
                </div>
                <div className="flex flex-col text-xs">
                  <span className=" uppercase font-bold">Taux de production</span>
                  <span className="">( Prods × Prods ref ) / 100 </span>
                </div>
              </div>
            </div>
            <Status site_id={site.id} datetime={calendarDate.datetime} />
            <SiteCardDatas id={site.id} />
            <ul className="text-xs text-slate-400">
              <Experimental site_id={site.id} datetime={calendarDate.datetime} />
            </ul>
          </div>
        </div>
      </a>
    </>
  )
}

export default SiteCard

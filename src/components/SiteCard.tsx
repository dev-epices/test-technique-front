// import React, { useContext, useEffect, useState } from 'react'
import { Site } from '../data/types'
import { useUiContext } from '../Utils/UiContext'
import Status from '../components/Status'
import { Experimental } from './Experimental'
import { v4 as uuidv4 } from 'uuid'

interface SiteCardProps {
  site: Site
  // date: Date
}

const SiteCard = ({ site }: SiteCardProps) => {
  const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  return (
    <>
      <a
        key={uuidv4()}
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

            <Status key={uuidv4()} site_id={site.id} datetime={calendarDate.datetime} />
            <ul className="text-xs text-slate-400 w-full">
              <Experimental key={uuidv4()} site_id={site.id} datetime={calendarDate.datetime} />
            </ul>
          </div>
        </div>
      </a>
    </>
  )
}

export default SiteCard

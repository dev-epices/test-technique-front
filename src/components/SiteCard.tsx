// import React, { useContext, useEffect, useState } from 'react'
import { Site } from '../data/types'
import { useUiContext } from '../Utils/UiContext'
import Status from '../components/Status'
import { Experimental } from './Experimental'
// import { v4 as uuidv4 } from 'uuid'

interface SiteCardProps {
  site: Site
  // date: Date
}

const SiteCard = ({ site }: SiteCardProps) => {
  const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  return (
    <>
      <a
        // key={uuidv4()}
        href="#"
        className="flex flex-col sm:flex-row 2xl:flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
      >
        <div className=" transition-all sm:aspect-square 2xl:aspect-auto flex-none w-full sm:w-24 md:w-48 lg:w-60 2xl:w-full">
          <img
            src={site.picture}
            className=" w-full h-40 sm:h-full 2xl:h-40 object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto w-[25%] text-lg font-semibold text-slate-900 dark:text-slate-300">
              {site.name}
            </h1>
            <div className="text-xs text-slate-400">{site.id}</div>
            <div className="w-full flex-none text-xs font-medium text-slate-400 pb-4">
              <p className=" line-clamp-1"> {site.address}</p>
            </div>
            <Status site_id={site.id} datetime={calendarDate.datetime} />
            <div className=" px-2  mb-1 flex space-x-2 justify-between w-full py-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <p className="">
                {site.max_power}{' '}
                <span className="font-normal text-slate-400 text-xs">Max Power</span>
              </p>
              <p>
                <span className="font-normal text-slate-400 text-xs">Started on</span>{' '}
                {site.start_date.toLocaleDateString('fr-FR', { dateStyle: 'medium' })}
              </p>
            </div>

            <Experimental site_id={site.id} datetime={calendarDate.datetime} />
          </div>
        </div>
      </a>
    </>
  )
}

export default SiteCard

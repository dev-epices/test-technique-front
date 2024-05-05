import React from 'react'
import { Site } from '../data/types'

interface cardProps {
  site: Site
  // date: Date
}

export const CardMini = ({ site }: cardProps) => {
  const { id, name, picture, address, max_power } = site
  return (
    <>
      {/* <div className="border border-red-500"> */}
      <a
        href="#"
        // className="p-4 flex flex-col sm:flex-row 2xl:flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
        className="p-4 flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:hover:transition-all"
      >
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={picture} alt={`image` + name} />
              </div>
              {/* <div className="flex-1 min-w-0 ms-4"> */}
              <div className=" ms-4  w-1/2">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{name}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{address}</p>
              </div>
              {/* <div className="border inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> */}
              <div className="w-full  border items-center justify-center text-base font-semibold text-gray-900 dark:text-white">
                <p> {max_power}</p>
                <p>bnbn</p>
              </div>
            </div>
          </li>
        </ul>
      </a>
      {/* </div> */}
    </>
  )
}

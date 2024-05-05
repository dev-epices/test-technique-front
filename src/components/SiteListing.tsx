import React from 'react'
import { ShowDate } from './ShowDate'
import useSite from '../Utils/useSite'
import { CardMini } from './CardMini'

export const SiteListing = () => {
  const sites = useSite()
  return (
    <>
      {/* <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"> */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Sites</h5>
        <div className="text-sm text-gray-500 truncate dark:text-gray-400">
          <ShowDate />
        </div>
      </div>
      {/* <div className="flex flex-col sm:flex-row gap-3 flex-wrap"> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
      </div>
      {/* <SiteCard site={site} /> */}
      {/* </div> */}
    </>
  )
}

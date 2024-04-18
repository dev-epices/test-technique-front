// import React from 'react'
import { DataPoint, Site } from '../data/types'

interface ListUlProps {
  sites: Site[]
}

const DataSitesUl = ({ sites }: ListUlProps) => {
  const txProd = (prodC: number, prodRef: number) => {
    let txProdCalc = (prodC * 100) / prodRef
    return txProdCalc
  }
  console.log('====================================')
  console.log(txProd(50, 200))
  console.log('====================================')

  return (
    <>
      {sites.map((site, index) => (
        <div key={index} className="flex bg-white rounded overflow-hidden">
          <div className=" transition-all flex-none w-24 sm:w-48 relative">
            <img
              src={site.picture}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">{site.name}</h1>
              <div className="text-xs text-slate-400">{site.id}</div>
              <div className="w-full flex-none text-xs font-medium text-slate-400 border-b pb-4">
                {site.address}
              </div>
              <div className="mt-2">
                <div className="flex text-lime-700 gap-4 items-center rounded py-2">
                  <div className="flex flex-col text-xs">
                    <span className=" uppercase font-bold">max power</span>
                    <span className="">{site.start_date.toLocaleDateString()}</span>
                  </div>
                  <div className=" space-x-2 font-thin text-5xl">
                    <span>{site.max_power}</span>
                    <span className="text-xs font-semibold">kwh</span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className=" uppercase font-bold">Taux de production</span>
                    <span className="">Max Power × Prod ref % 100 </span>
                  </div>
                  <div className=" space-x-2 font-thin text-5xl">
                    <span>{txProd(site.max_power, 500)}</span>
                    <span className="text-xs font-semibold">%</span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className=" uppercase font-bold">Status</span>
                  </div>
                  <div className=" space-x-2 font-thin text-5xl">
                    <span>{txProd(site.max_power, 500)}</span>
                    <span className="text-xs font-semibold">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default DataSitesUl

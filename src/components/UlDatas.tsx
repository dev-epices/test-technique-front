// import React from 'react'
import { DataPoint, Site } from '../data/types'

// type StaticDatas = {
//   site_id: number
//   data: DataPoint[]
// }

type UlDatasProps = {
  // staticDatas: StaticDatas[]
  staticDatas: {
    site_id: number
    data: DataPoint[]
  }[]
}

// const DataSitesUl = ({ staticDatas }: UlDatasProps) => {
const DataSitesUl = ({ staticDatas }: UlDatasProps) => {
  return (
    <>
      <div className=" font-mono underline">DataSitesUl component</div>
      {staticDatas.map((n, index) => (
        <div
          key={index}
          className="bg-slate-100 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8"
        >
          site id : {n.site_id}
          {staticDatas.map((e) =>
            e.data.map((dat, datIndex) => (
              <div
                key={datIndex}
                className="flex items-center overflow-hidden h-32 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px] rounded"
              >
                <div className="bg-slate-400 h-full w-32 aspect-square"></div>
                <div className=" p-4">
                  <ul>
                    <li>date : {dat.datetime.toLocaleString()}</li>
                    <li> production : {dat.production}</li>
                    <li>référence : {dat.reference}</li>
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      ))}

      {/* {staticDatas.map((staticData, index) => (
        <div key={index} style={{ border: '1px solid black', padding: '1rem' }}>
          site id : {staticData.site_id}
          keys:
          <div>{staticData.data=>)</div>
        </div>
      ))} */}
    </>
  )
}

export default DataSitesUl

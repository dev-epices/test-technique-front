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
      <div>DataSitesUl component</div>
      {staticDatas.map((n, index) => (
        <div key={index} style={{ border: 'solid red 1px', padding: '0.5rem' }}>
          site id : {n.site_id}
          {staticDatas.map((e) =>
            e.data.map((dat, datIndex) => (
              <ul key={datIndex} style={{ listStyle: 'none' }}>
                <li>date : {dat.datetime.toLocaleString()}</li>
                <li> production : {dat.production}</li>
                <li>référence : {dat.reference}</li>
              </ul>
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

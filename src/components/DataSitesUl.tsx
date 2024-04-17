// import React from 'react'
import { DataPoint, Site } from '../data/types'

interface ListUlProps {
  sites: Site[]
}

const DataSitesUl = ({ sites }: ListUlProps) => {
  return (
    <>
      <div>DataSitesUl component</div>
      {sites.map((site, index) => (
        <div key={index} className="p-10 border">
          <img src={site.picture} className="w-[10rem]" />
          <p>{site.name}</p>
          <ul>
            <li>{site.address}</li>
            <li>{site.max_power}</li>
            <li>{site.start_date.toLocaleDateString()}</li>
            <li>{site.id}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default DataSitesUl

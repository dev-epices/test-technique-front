// import { fetchSites } from '../data/fetch'
// import { DataPoint, Site } from '../data/types'
// import DataSitesUl from './DataSitesUl'
// import { useEffect, useState } from 'react'
// import useData from '../Utils/useData'
import useSite from '../Utils/useSite'
import SiteCard from './SiteCard'
// import { UiContext, useUiContext } from '../Utils/UiContext'

function SitesList() {
  const sites = useSite()
  return (
    <>
      {sites.map((site, index) => (
        <div key={index}>
          <SiteCard site={site} />
        </div>
      ))}
    </>
  )
}

export default SitesList

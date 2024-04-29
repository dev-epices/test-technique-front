// import { fetchSites } from '../data/fetch'
// import { DataPoint, Site } from '../data/types'
// import DataSitesUl from './DataSitesUl'
// import { useEffect, useState } from 'react'
// import useData from '../Utils/useData'
import useSite from '../Utils/useSite'
import SiteCard from './SiteCard'
import { v4 as uuidv4 } from 'uuid'

// import { UiContext, useUiContext } from '../Utils/UiContext'

function SitesList() {
  const sites = useSite()
  return (
    <>
      {sites.map((site) => (
        <div key={uuidv4()}>
          <SiteCard key={uuidv4()} site={site} />
        </div>
      ))}
    </>
  )
}

export default SitesList

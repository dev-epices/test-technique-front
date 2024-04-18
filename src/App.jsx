import { SITES } from "./data/data";
import {fetchSites, fetchDataForDay} from "./data/fetch"
// import {DataPoint, Site} from './data/types'
import SiteList from "./components/SitesList"
// import {SiteList} from "./components/SitesList"

import { useState, useEffect } from 'react'
import SitesList from "./components/SitesList";
import DataList from "./components/DatasList"
import DatasList from "./components/DatasList";


function App() {

  return (
    <>
    <p>TODO</p>
      <section className="border p-20">
        <div className="border bg-slate-100 grid sm:grid-cols-2 md:grid-cols-2 gap-4">

        <SitesList/>
        </div>
      </section>

      <section>
        <DatasList/>
      </section>
    </>
  )
}

export default App

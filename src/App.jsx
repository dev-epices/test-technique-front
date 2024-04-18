import { SITES } from "./data/data";
import {fetchSites, fetchDataForDay} from "./data/fetch"
// import {DataPoint, Site} from './data/types'
import SiteList from "./components/SitesList"
// import {SiteList} from "./components/SitesList"

import { useState, useEffect } from 'react'
import SitesList from "./components/SitesList";
import DataList from "./components/DatasList"
import DatasList from "./components/DatasList";
import Calendar from "./components/Calendar"


function App() {

  return (
    <>
    <section className="">
      <div className="md:container md:mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 *:border *:p-4">
            <div>
              <Calendar/>
            </div>
            <div className="flex flex-col">
            <p>TODO</p>
            <div className="todo *:py-2">
              <p className="font-bold">Pour chaque jour :</p>
              <ul>
                <li>Somme de la Production cumulé sur l'ensemble des sites</li>
                <li>Nombre de sites dans chaques status</li>
              </ul>
              <ul>
              <p className="font-bold">Status du site</p>
                <li>Pas de données (a une date donnée)</li>
                <li>À l’arrêt (prod nullle)</li>
                <li>Dégradé (inférieur à 50%)</li>
                <li>Ok (else)</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-slate-50">
        <div className="md:container md:mx-auto py-10">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        <SitesList/>
        </div>
        </div>
      </section>

      <section>
        <DatasList/>
      </section>
    </>
  )
}

export default App

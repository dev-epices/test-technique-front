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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 *:border *:p-4 text-xs text-slate-500">

            <p><span className="font-bold">ÉPICE ENERGIE</span><br/>test technique</p>
              <ul>
              <p className="font-bold">Pour chaque jour :</p>
                <li>🟥 Somme de la Production cumulé sur l'ensemble des sites</li>
                <li>🟥 Nombre de sites dans chaques status</li>
              </ul>
              <ul>
                <p className="font-bold">Pour un site sélectionné :</p>
                <li>✅ la photo et les différentes informations du site (disponibles dans l'objet Site)</li>
                <li>✅ la production cumulée du site</li>
                <li>✅ le taux de production = le pourcentage de la production cumulée par rapport à la production de référence cumulée</li>
              </ul>
              <ul>
              <p className="font-bold">Status du site</p>
                <li>✅ Pas de données (a une date donnée)</li>
                <li>✅ À l’arrêt (prod nullle)</li>
                <li>✅ Dégradé (inférieur à 50%)</li>
                <li>✅ Ok (else)</li>
              </ul>
          </div>
        </div>
      </section>

      {/* <section className=" bg-slate-50">
        <div className="md:container md:mx-auto py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">

        <SitesList/>
        </div>
        </div>
      </section> */}

      <section className="bg-slate-200">
        <div className="md:container md:mx-auto py-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sticky top-0 bg-white z-50 h-full">
                <Calendar/>
              </div>
              <DatasList/>
            </div>
          </div>
      </section>


    </>
  )
}

export default App

import { SITES } from "./data/data";
import {fetchSites, fetchDataForDay} from "./data/fetch"
// import {DataPoint, Site} from './data/types'
import SiteList from "./components/SitesList"
// import {SiteList} from "./components/SitesList"

import { useState, useEffect } from 'react'
import SitesList from "./components/SitesList";
import DataList from "./components/DatasList"
import DatasList from "./components/DatasList";
// SITES: Array<Site> = [
  // {
  //   id: 1234,
  //   name: 'Ferme des Petits Bisons',
  //   address: '456 rue de la Grande Montée\n45630 Curry',
  //   max_power: 63.54,
  //   start_date: new Date(2020, 10, 10),
  //   picture: 'https://cdn.stocksnap.io/img-thumbs/960w/old-barn_HD6KC1OP4K.jpg',
  // }

//export const DATA_POINTS: Array<{ site_id: number; data: Array<DataPoint> }> = [
  // {
  //   site_id: 1234,
  //   data: [
  //     {
  //       datetime: new Date(2024, 3, 1, 9),
  //       production: 20,
  //       reference: 20,
  //     },
  //     {
  //       datetime: new Date(2024, 3, 1, 12),
  //       production: 80,
  //       reference: 100,
  //     },



function App() {
  // const listSites = async () => {
  //   const sites = await fetchSites();
  //   const noms = sites.map((d)=> <li key={d.id}>{d.name}</li>);
  //   console.log('====================================');
  //   console.log(`NOMS ${noms}`);
  //   console.log(`Objet ${sites.map((d)=> d.noms)}`)
  //   console.log('====================================');
  //   return sites

  // };
  //  const sites = listSites();


  return (
    <>
    <p>TODO</p>
    <SitesList/>
    <DatasList/>


    {/* <SiteList/> */}
    {/* <SiteList/> */}
    {/* {SITES.map((site, index)=><li key={index}>{site}</li>)} */}

    </>
  )
}

export default App

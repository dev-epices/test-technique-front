// import React from 'react'
import { fetchSites } from '../data/fetch'
import { DataPoint, Site } from '../data/types'
import DataSitesUl from './DataSitesUl'

function SitesList() {
  // const sites = await fetchSites()

  console.log('====================================')
  // console.log(sites)
  console.log('====================================')

  const staticSites: Array<Site> = [
    {
      id: 1234,
      name: 'Ferme des Petits Bisons',
      address: '456 rue de la Grande Montée\n45630 Curry',
      max_power: 63.54,
      start_date: new Date(2020, 10, 10),
      picture: 'https://cdn.stocksnap.io/img-thumbs/960w/old-barn_HD6KC1OP4K.jpg',
    },
    {
      id: 310,
      name: 'Église des Bois Rouges',
      address: '2 route Jeanne Dufour\n85000 Origan',
      max_power: 300.45,
      start_date: new Date(2021, 5, 12),
      picture: 'https://cdn.stocksnap.io/img-thumbs/960w/architecture-building_ZYHP8Z8UXZ.jpg',
    },
    {
      id: 8563,
      name: 'Aux Trois Arbres',
      address: '9253 chemin des Trois Arbres\n52100 Paprika',
      max_power: 23.4,
      start_date: new Date(2019, 12, 12),
      picture: 'https://cdn.stocksnap.io/img-thumbs/960w/solar-panels_EFYB8VJXNT.jpg',
    },
  ]

  return (
    <>
      <h1>SiteList component (staticSites)</h1>
      <DataSitesUl sites={staticSites} />
    </>
  )
}

export default SitesList

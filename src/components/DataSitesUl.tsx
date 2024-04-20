// import React from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'

interface ListUlProps {
  sites: Site[]
}

const DataSitesUl = ({ sites }: ListUlProps) => {
  const txProd = (prodC: number, prodRef: number) => {
    let txProdCalc = (prodC * 100) / prodRef
    return txProdCalc
  }
  console.log('====================================')
  console.log(txProd(50, 200))
  console.log('====================================')

  //---- get datas
  const getData = useData(1234, new Date(2024, 3, 1, 9))
  console.log(`getData. in site : ${getData.map((e) => e.production)}`)

  //----
  // const cumulProd = getData
  //   .map((e) => e.production)
  //   .reduce((a, b) => {
  //     return a + b
  //   })

  const listenProds = () => {
    // initialize message to return
    let message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">NULL</p>

    const sumOfProds =
      getData.length > 0
        ? getData
            .map((e) => e.production)
            .reduce((a, b) => {
              return a + b
            })
        : 0
    // // add all prods
    // const sumOfProds = getData
    //   .map((e) => e.production)
    //   .reduce((a, b) => {
    //     return a + b
    //   })
    const isProd = getData.length
    // add all refs
    const sumOfRef = getData
      .map((e) => e.reference)
      .reduce((a, b) => {
        return a + b
      })
    // percentage calculation
    const ratio = txProd(sumOfProds, sumOfRef)

    if (isProd === 0) {
      message = <p className="px-4 py-2 bg-red-700 rounded-xl text-white">A L’ARRÊT</p>
    } else if (ratio < 50) {
      message = <p className="px-4 py-2 bg-lime-700/50 rounded-xl text-white">STATUS DÉGRADÉ</p>
    } else {
      message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">STATUS OK</p>
    }

    // return sumOfProds === 0 ? 0 : sumOfProds
    return message
  }

  // console.log(`addprods----: ${addProds()}`)

  // const messageNoData = getData.length === 0 ? <p>No item found</p> : null
  const messageStatus = () => {
    let message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">NULL</p>

    if (getData.length === 0) {
      message = <p className="px-4 py-2 bg-red-700 rounded-xl text-white">NO DATA</p>
    } else if (getData.length > 1) {
      message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">STATUS OK</p>
    } else {
      message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">STATUS OK</p>
    }
    return message
  }

  return (
    <>
      {sites.map((site, index) => (
        // <a
        //   href="#"
        //   key={index}
        //   className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 hover:transition-all ease-in-out delay-150 duration-300 hover:bg-gray-100 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row"
        // >
        //   <img
        //     className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
        //     src={site.picture}
        //     alt=""
        //   />
        //   <div className="flex flex-col justify-start p-6">
        //     <h5 className="mb-2 text-xl font-medium">{site.name}</h5>
        //     <p className="mb-4 text-base">
        //       This is a wider card with supporting text below as a natural lead-in to additional
        //       content. This content is a little bit longer.
        //     </p>
        //     <p className="text-xs text-surface/75 dark:text-neutral-300">{site.address}</p>
        //   </div>
        // </a>

        <a
          href="#"
          key={index}
          className="flex bg-white rounded overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
        >
          <div className=" transition-all aspect-square flex-none w-24 md:w-48 lg:w-60 xl:w-80">
            <img src={site.picture} className=" w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto w-[25%] text-lg font-semibold text-slate-900">
                {site.name}
              </h1>
              <div className="text-xs text-slate-400">{site.id}</div>
              <div className="w-full flex-none text-xs font-medium text-slate-400 border-b pb-4">
                {site.address}
              </div>
              <div className="border-b pb-2 flex space-x-2 justify-between w-full py-2 text-xs font-medium text-slate-400">
                <p className="">Max Power: {site.max_power}</p>
                <p>Start date | {site.start_date.toLocaleDateString()}</p>
              </div>
              <div className=" bg-white w-full mb-2 flex flex-col mt-2 rounded-2xl p-4  hover:transition-all">
                <div className="flex flex-wrap  gap-4 items-center py-2">
                  <div className="text-lime-700 space-x-2 font-thin text-5xl">
                    <span>{txProd(site.max_power, 500)}</span>
                    <span className="text-xs font-semibold">%</span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className=" uppercase font-bold">Taux de production</span>
                    <span className="">( Max Power × Prod ref ) / 100 </span>
                  </div>
                </div>
              </div>
              {messageStatus()}
              {/* <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">status OK</p> */}
              <div className="border w-full">
                <ul className="flex space-x-2">
                  <p>Date :</p>
                  {getData.map((e, index) => (
                    <li key={index}>
                      {e.datetime.toLocaleDateString('fr-FR', {
                        // month: '2-digit',
                        // weekday: 'short',
                        month: 'short',
                        day: '2-digit',
                        hour: 'numeric',
                        // hour: '2-digit',
                      })}
                    </li>
                  ))}
                </ul>
                <ul className="flex space-x-2">
                  <li>Production :</li>
                  {getData.map((e, index) => (
                    <li key={index}>{e.production}</li>
                  ))}
                </ul>
                <ul className="flex space-x-2">
                  <li>Référence :</li>
                  {getData.map((e, index) => (
                    <li key={index}>{e.reference}</li>
                  ))}
                </ul>
                <div>Production cumulée : {listenProds()}</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}

export default DataSitesUl

import React from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'

interface SiteCardProps {
  site: Site
}

const SiteCard = ({ site }: SiteCardProps) => {
  // calcul du taux de production
  //=> (toutes les productions × toutes les reférences)/100
  const txProd = (totalProds: number, totalRefs: number) => {
    let txProdCalc = (totalProds * 100) / totalRefs
    return txProdCalc
  }
  //--
  /**
   * Flo: Fetch datas with site.id and a static date
   *
   * @returns DataPoint[]
   */
  const siteDatas = useData(site.id, new Date(2024, 3, 1, 9))
  //--

  /**
   * Flo: Status evaluation
   *
   * @returns JSX
   */
  const listenProds = () => {
    // initialize message to return
    let message = <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">NULL</p>

    const sumOfProds =
      siteDatas.length > 0
        ? siteDatas
            .map((e) => e.production)
            .reduce((a, b) => {
              return a + b
            })
        : 0
    const sumOfRef =
      siteDatas.length > 0
        ? siteDatas
            .map((e) => e.reference)
            .reduce((a, b) => {
              return a + b
            })
        : 0

    const isProd = siteDatas.length

    // percentage calculation
    const ratio = txProd(sumOfProds, sumOfRef)

    if (ratio === 0) {
      message = (
        <p className="px-4 py-2 bg-gray-400 rounded-xl text-white">A L’ARRÊT {ratio.toFixed(1)}</p>
      )
    } else if (ratio >= 1 && ratio < 69) {
      message = (
        <p className="px-4 py-2 bg-teal-600 rounded-xl text-white">
          STATUS DÉGRADÉ {ratio.toFixed(1)}
        </p>
      )
    } else if (isProd === 0) {
      message = (
        <p className="px-4 py-2 bg-red-500 rounded-xl text-white">NO DATA {ratio.toFixed(1)}</p>
      )
    } else {
      message = (
        <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">
          STATUS OK : {ratio.toFixed(1)}
        </p>
      )
    }

    // return sumOfProds === 0 ? 0 : sumOfProds
    return message
  }
  //--

  return (
    <>
      <a
        href="#"
        className="flex bg-white rounded overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
      >
        <div className=" transition-all aspect-square flex-none w-24 md:w-48 lg:w-60 xl:w-80">
          <img src={site.picture} className=" w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto w-[25%] text-lg font-semibold text-slate-900">{site.name}</h1>
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
                  <span>{txProd(site.max_power, 500).toFixed(1)}</span>
                  <span className="text-xs font-semibold">%</span>
                </div>
                <div className="flex flex-col text-xs">
                  <span className=" uppercase font-bold">Taux de production</span>
                  <span className="">( Prods × Prods ref ) / 100 </span>
                </div>
              </div>
            </div>
            {/* {messageStatus()} */}
            {listenProds()}
            {/* <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">status OK</p> */}
            <div className="mt-4 w-full text-xs">
              <ul className="flex space-x-2">
                <p>Date :</p>
                {siteDatas.map((e, index) => (
                  <li key={index}>
                    {e.datetime.toLocaleDateString('fr-FR', {
                      month: 'short',
                      day: '2-digit',
                      hour: 'numeric',
                    })}
                  </li>
                ))}
              </ul>
              <ul className="flex space-x-2">
                <li>Production :</li>
                {siteDatas.map((e, index) => (
                  <li key={index}>{e.production}</li>
                ))}
              </ul>
              <ul className="flex space-x-2">
                <li>Référence :</li>
                {siteDatas.map((e, index) => (
                  <li key={index}>{e.reference}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default SiteCard

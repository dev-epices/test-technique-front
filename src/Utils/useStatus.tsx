import { useEffect, useState } from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'

/**
 * Flo: Status evaluation
 *
 * @returns JSX
 */

// export const listenProds = (siteDatas: DataPoint[]) => {
export const useStatus = (id: number, changeDate: Date) => {
  const siteDatas = useData(id, changeDate)

  const txProd = (totalProds: number, totalRefs: number) => {
    let txProdCalc = (totalProds * 100) / totalRefs
    return txProdCalc
  }

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
      <p className="px-4 py-2 bg-red-500 rounded-xl text-white">PAS DE DONÉES {ratio.toFixed(1)}</p>
    )
  } else {
    message = (
      <p className="px-4 py-2 bg-lime-700 rounded-xl text-white">STATUS OK : {ratio.toFixed(1)}</p>
    )
  }

  // return sumOfProds === 0 ? 0 : sumOfProds
  return message
}

import React from 'react'

export const StatusSelector = function (ratio: number) {
  //  const dataLength = dataPoint?.length
  //  console.log(`datalenght : ${dataLength}`)
  let status = {
    message: '',
    twColor: '',
    rgbColor: {},
    rgbBgColor: {},
  }

  let message = <div className="bg-lime-700 min-h-3">NULL</div>

  if (ratio === 0) {
    status.message = 'A L’ARRÊT'
    status.twColor = 'bg-gray-400'
    status.rgbColor = { color: 'rgb(156 163 175)' }
    status.rgbBgColor = { backgroundColor: 'rgb(156 163 175)' }
    // message = <div className=" bg-gray-400 min-h-3 ">A L’ARRÊT</div>
  } else if (ratio >= 1 && ratio <= 50) {
    status.message = 'DÉGRADÉ'
    status.twColor = 'bg-teal-600'
    status.rgbColor = { color: 'rgb(13 148 136)' }
    status.rgbBgColor = { backgroundColor: 'rgb(13 148 136)' }
    // message = <div className=" bg-teal-600 min-h-3">STATUS DÉGRADÉ</div>
  } else if (Number.isNaN(ratio)) {
    status.message = 'PAS DE DONNÉES'
    status.twColor = 'bg-red-400'
    status.rgbColor = { color: 'rgb(248 113 113)' }
    status.rgbBgColor = { backgroundColor: 'rgb(248 113 113)' }
    // message = <div className=" bg-red-400 min-h-3">PAS DE DONNÉES</div>
  } else {
    status.message = 'OK'
    status.twColor = 'bg-lime-700'
    status.rgbColor = { color: 'rgb(77 124 15)' }
    status.rgbBgColor = { backgroundColor: 'rgb(77 124 15)' }
    // message = <div className=" bg-lime-700 min-h-3">STATUS OK</div>
  }
  return status
}

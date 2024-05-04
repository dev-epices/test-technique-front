import { useCallback, useEffect, useState } from 'react'
import { Site } from '../data/types'
// import { sum } from '../Utils/sum'
import SitesList from './SitesList'
import { fetchSites } from '../data/fetch'

// import { Experimental } from './Experimental'
// import { v4 as uuidv4 } from 'uuid'
import { ModeToggle } from './mode-toggle'
import useDataForDay from '../Utils/xxx-useDataForDay'

type DayToShow = {
  // site_id: number
  datetime: Date
}

const DatasList = ({ datetime }: DayToShow) => {
  // const [dataPoint, setDataPoint] = useState<DataPoint[]>()
  const [dataSite, setDataSite] = useState<Site[]>()
  const [sitesLength, setSitesLength] = useState(1)

  useEffect(() => {
    // fetchData(site_id, datetime)
    fetchSitesForIds()
  }, [datetime])
  // console.log(site_id)

  // const fetchData = useCallback(async (id: number, date: Date) => {
  //   const data = await fetchDataForDay(id, date)
  //   setDataPoint(data)
  // }, [])

  const fetchSitesForIds = useCallback(async () => {
    const dataSitesLength = (await fetchSites()).length
    const getDataSites = await fetchSites()
    setSitesLength(dataSitesLength)
    setDataSite(getDataSites)
  }, [])

  // recupère tous les ids
  // const allIds = dataSite?.map((e) => e.id)

  // const allProdsForId = async (id: number) => {
  //   const res = await fetchData(id, datetime)
  // }

  const cumulProd = (): React.ReactNode => {
    /**
     * Calculate the sum of a all sites productions (static datas) .
     *
     * @returns A number.
     */
    const cumulProdforeEachSite = () => {
      // let arrayToCalculate = [0]
      let maxPowers = [0]
      // const selectByDate = dataPoint?.filter((e) => e.datetime.getDate() === datetime.getDate())
      // const allProdsByDate = selectByDate?.map((e) => e.production)
      // console.log(`allProdsBydate ===== ${allProdsByDate}`)
      dataSite !== undefined ? (maxPowers = dataSite.map((e) => e.max_power)) : null
      // const maxProds: number[] | undefined = dataSite?.map(e=>e.max_power)
      // let lengthNow = sitesLength
      // for (let i = 0; i < datas.length; i++) {
      for (let i = 0; i < sitesLength; i++) {
        // console.log(datas[i])
        // arrayToCalculate.push(
        //   datas[i].data
        //     .map((e) => e.production)
        //     .reduce((a, b) => {
        //       return a + b
        //     })
        // )
      }
      // return sum(arrayToCalculate)
      return maxPowers.reduce((a, b) => a + b)
    }

    return cumulProdforeEachSite()
    // return cumulProdforeEachSite(getData)
  }

  return (
    <div /** parent div to made sticky work */>
      <div className="sticky top-0 z-10" /** sticky container */>
        <div
          /** first bloc grid layout - 1 column on mobile devices
           *
           */
          className="px-3 sm:px-0 rounded-xl mb-4 grid lg:grid-cols-3 *:border *:dark:border-0 gap-4 *:rounded-xl  *:bg-white *:dark:bg-slate-900 bg-gradient-to-b from-slate-100 via-slate-100 dark:from-black dark:via-black"
        >
          <div
            /** first column, full width on mobile devices
             * */ className=" flex flex-col border  p-4 justify-between"
          >
            <div className="text-xs text-slate-400">
              <p className="">
                <span className="dark:text-slate-300 text-slate-600 font-bold">
                  Production cumulée
                </span>
              </p>
              <div>prod: (1234, datetime) :{useDataForDay(1234, datetime)}</div>
              <p>
                Le{' '}
                <span className="dark:text-slate-300 text-slate-600">
                  {datetime.toLocaleDateString('fr-FR', { dateStyle: 'long' })}
                </span>{' '}
                sur l'ensemble des sites
              </p>
            </div>
            <div className="flex gap-1 text-lime-700 ">
              <span className="font-thin text-5xl">{cumulProd()}</span>
              <span className="text-xs font-semibold">unit</span>
            </div>
          </div>
          <div
            /** secondary column - full width on mobile devices
             *
             */
            className="col-span-1 lg:col-span-2 p-4 text-slate-400 text-xs"
          >
            <div className="flex gap-4 justify-between">
              <div className="font-bold ">
                <p>
                  <span className="dark:text-slate-300 text-slate-600">
                    Nombres <br />
                    de sites
                  </span>
                </p>
                <p className="font-normal">
                  <span className="dark:text-slate-300 text-slate-600">
                    {' '}
                    {datetime.toLocaleDateString('fr-FR', { dateStyle: 'long' })}
                  </span>
                  <br />
                  par status
                </p>
              </div>
              <div id="parent" className="grid grid-cols-4 gap-2 *:rounded-lg">
                <a
                  href="#"
                  className=" bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex flex-col justify-center items-center gap-2 p-4">
                    <span className="text-5xl font-thin">250</span>
                    <span className=" bg-lime-600 text-white px-2 py-1 rounded-md">OK</span>
                  </div>
                </a>
                <a
                  href="#"
                  className=" bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex flex-col justify-center items-center gap-2 p-4">
                    <span className="text-5xl font-thin">25</span>
                    <span className=" bg-emerald-600 text-white px-2 py-1 rounded-md">DÉGRADÉ</span>
                  </div>
                </a>
                <a
                  href="#"
                  className=" bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex flex-col justify-center items-center  gap-2 p-4">
                    <span className="text-5xl font-thin">8</span>
                    <span className=" bg-gray-500 text-amber-400 px-2 py-1 rounded-md">ARRÊT</span>
                  </div>
                </a>
                <a
                  href="#"
                  className=" bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex flex-col justify-center items-center  gap-2 p-4">
                    <span className="text-5xl font-thin">3</span>
                    <span className=" bg-slate-400 text-white px-2 py-1 rounded-md">NO DATA</span>
                  </div>
                </a>
              </div>
              <div className="mb-4">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        /** grid layout for sites column
         * */ className="px-3 sm:px-0 grid sm:grid-cols-1 2xl:grid-cols-2 gap-4 mt-16 lg:mt-0"
      >
        <SitesList />
      </div>
    </div>
  )
}

export default DatasList

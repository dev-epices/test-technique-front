// import React from 'react'
import DatasList from './DatasList'
import Calendar from './Calendar'
import { DataPoint } from '../data/types'
import { useEffect, useState } from 'react'
import { UiContext } from '../Utils/UiContext'
// import { ModeToggle } from './mode-toggle'
// import useData from '../Utils/useData'

const Ui = () => {
  const siteToShow: { site_id: number } = {
    // site_id: 1234,
    // site_id: 310,
    site_id: 8563,
  }
  // console.log(`UI siteToShow ${siteToShow.site_id}`)

  // general state of dates selected, default 1/04/2024
  const [selectedDay, setSelectedDay] = useState<Date>(new Date(2024, 3, 1))
  // console.log(`UI [selectedDay] ${selectedDay}`)

  // default state for site data
  const [site_Data, setSite_data] = useState<DataPoint>({
    datetime: new Date(2024, 3, 1),
    production: 100,
    reference: 100,
  })
  // console.log(`UI [site_data] ${site_Data.datetime}`)

  // handle calendar date
  const handleSelectedDate = (selectedDay: Date) => {
    // console.log(`handleSelectedDate : ${selectedDay}`)
    setSelectedDay(selectedDay)
  }

  // ECOUTE SELECTED DAY -> use to change date in sites after selecting day
  // to do : fetch right datapoints when state change
  useEffect(() => {
    const site_DataCopyDate = { ...site_Data, datetime: selectedDay }
    setSite_data(site_DataCopyDate)
    // console.log(`-- UI rendu1 site_DataCopyDate : ${site_DataCopyDate.datetime}`)
    // console.log(`-- UI rendu1 [site_data] ${site_Data.datetime}`)

    return () => {
      // console.log(`-- UI rendu2 site_DataCopyDate : ${site_DataCopyDate.datetime}`)
      // console.log(`-- UI rendu2 [site_data] ${site_Data.datetime}`)
    }
  }, [selectedDay])
  // ECOUTE SITE DATA
  useEffect(() => {
    // console.log(`.. UI rendu1 rendu [site_data] : ${site_Data.datetime}`)

    return () => {
      // console.log(`.. UI rendu1 rendu [site_data] : ${site_Data.datetime}`)
    }
  }, [site_Data])

  return (
    // <UiContext.Provider value={selectedDay}>
    <UiContext.Provider value={site_Data}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sticky top-0  z-50 h-full bg-white dark:bg-slate-900">
          <Calendar onSelectDate={handleSelectedDate} />
        </div>
        <DatasList site_id={siteToShow.site_id} datetime={selectedDay} />
      </div>
    </UiContext.Provider>
  )
}

export default Ui

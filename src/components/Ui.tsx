// import React from 'react'
import DatasList from './DatasList'
import Calendar from './Calendar'
import { DataPoint } from '../data/types'
import { useEffect, useState } from 'react'
import { UiContext } from '../Utils/UiContext'

const Ui = () => {
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

  // handle calendar date and set selectedDay state
  const handleSelectedDate = (selectedDay: Date) => {
    // console.log(`handleSelectedDate : ${selectedDay}`)
    setSelectedDay(selectedDay)
  }

  // ECOUTE SELECTED DAY -> use to change date in sites after selecting day
  // to do : fetch right datapoints when state change
  useEffect(() => {
    const site_DataCopyDate = { ...site_Data, datetime: selectedDay }
    setSite_data(site_DataCopyDate)
  }, [selectedDay])

  return (
    // <UiContext.Provider value={selectedDay}>
    <UiContext.Provider value={site_Data}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sticky top-0  z-50 h-full bg-white dark:bg-slate-900">
          <Calendar onSelectDate={handleSelectedDate} />
        </div>
        <DatasList datetime={selectedDay} />
      </div>
    </UiContext.Provider>
  )
}

export default Ui

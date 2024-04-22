// import React from 'react'
import DatasList from './DatasList'
import Calendar from './Calendar'
import { DataPoint, Site } from '../data/types'
import { createContext, useEffect, useState } from 'react'
import { UiContext } from '../Utils/UiContext'
import useData from '../Utils/useData'

const Ui = () => {
  const siteToShow: { site_id: number } = {
    // site_id: 1234,
    // site_id: 310,
    site_id: 8563,
  }

  // general state of dates selected, default 1/04/2024
  const [selectedDay, setSelectedDay] = useState<Date>(new Date(2024, 3, 1))

  // default state for site data
  const [site_Data, setSite_data] = useState<DataPoint>({
    datetime: new Date(2024, 3, 1),
    production: 100,
    reference: 100,
  })

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
    console.log(`-- UIpremier rendu selected date : ${site_DataCopyDate.datetime.toJSON()}`)

    return () => {
      console.log(`-- UI date : ${selectedDay.toJSON()}`)
    }
  }, [selectedDay])
  // ECOUTE SITE DATA
  useEffect(() => {
    console.log(`.. UI premier rendu sITE DATA : ${site_Data.datetime.toJSON()}`)

    return () => {
      console.log(`.. UI second rendu selected date : ${selectedDay.toJSON()}`)
    }
  }, [site_Data])

  return (
    // <UiContext.Provider value={selectedDay}>
    <UiContext.Provider value={site_Data}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sticky top-0 bg-white z-50 h-full">
          <Calendar onSelectDate={handleSelectedDate} />
        </div>
        <DatasList site_id={siteToShow.site_id} datetime={selectedDay} />
      </div>
    </UiContext.Provider>
  )
}

export default Ui

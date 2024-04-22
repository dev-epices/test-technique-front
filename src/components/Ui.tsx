// import React from 'react'
import DatasList from './DatasList'
import Calendar from './Calendar'
import { DataPoint, Site } from '../data/types'
import { createContext, useEffect, useState } from 'react'
import { UiContext } from '../Utils/UiContext'

const Ui = () => {
  const siteToShow: { site_id: number } = {
    // site_id: 1234,
    // site_id: 310,
    site_id: 8563,
  }

  const [selectedDay, setSelectedDay] = useState<Date>(new Date(2024, 3, 1))

  const handleSelectedDate = (selectedDay: Date) => {
    // console.log(`handleSelectedDate : ${selectedDay}`)
    setSelectedDay(selectedDay)
  }

  return (
    <UiContext.Provider value={selectedDay}>
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

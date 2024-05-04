// import React from 'react'
import { UiContext } from '../../Utils/UiContext'
import { useState } from 'react'
// import { Calendar } from '@/components/ui/calendar'
import { Calendar } from '../ui/calendar'

const UiLayout = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    // <UiContext.Provider value={site_Data}>
    <>
      <div>UiLayout</div>
      <p>
        Date :{' '}
        {date !== undefined
          ? date.toLocaleString('fr-FR', { dateStyle: 'full' })
          : new Date().toLocaleString('fr-FR', { dateStyle: 'full' })}
      </p>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </>
    // </UiContext.Provider>
  )
}

export default UiLayout

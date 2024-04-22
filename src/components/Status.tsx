import React, { useContext, useEffect, useState } from 'react'
import { DataPoint, Site } from '../data/types'
import useData from '../Utils/useData'
import { UiContext, useUiContext } from '../Utils/UiContext'
import { useStatus } from '../Utils/useStatus'

type StatusProps = {
  id: number
  calDate: Date
}

const Status = ({ id, calDate }: StatusProps) => {
  // const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined

  const [date, setDate] = useState(calDate)

  useEffect(() => {
    console.log('calDate :', date)

    // return () => console.log('clean up')
  }, [calDate])

  return <>{useStatus(id, calDate)}</>
}

export default Status

// import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import { useState } from 'react'
import 'react-day-picker/dist/style.css'

type Props = {
  onSelectDate: (selectedDay: Date) => void
}

export default function Calendar({ onSelectDate }: Props) {
  const [selectedDay, setSelectedDay] = useState<Date>()
  const handleDayClick = (day: Date) => {
    setSelectedDay(day)
    onSelectDate(day)
  }

  const footer = selectedDay ? (
    <p>You selected {selectedDay.toDateString()}.</p>
  ) : (
    <p>Please pick a day.</p>
  )

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
      onDayClick={handleDayClick}
      // style={{ caption: { color: 'red' } }}
    />
  )
}

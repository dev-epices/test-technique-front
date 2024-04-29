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

  const disabledDays = [
    // new Date(2024, 5, 10),
    // new Date(2024, 5, 12),
    // new Date(2024, 5, 20),
    { from: new Date(2024, 3, 5), to: new Date(2024, 3, 30) },
  ]

  const footer = selectedDay ? (
    <p>You selected {selectedDay.toDateString()}.</p>
  ) : (
    <p>Please pick a day.</p>
  )

  return (
    <DayPicker
      mode="single"
      defaultMonth={new Date(2024, 3)}
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
      onDayClick={handleDayClick}
      disabled={disabledDays}
      // style={{ caption: { color: 'red' } }}
    />
  )
}

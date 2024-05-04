// import React from 'react'
import { UiContext, UiDateContext } from '../../Utils/UiContext'
import { useState } from 'react'
// import { Calendar } from '@/components/ui/calendar'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DatePicker } from '../ui/DatePicker'
import { useEffect } from 'react'
import { TestComponent } from '../TestComponent'

import { cn } from '../../lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { SiteListing } from '../SiteListing'

const UiLayout = () => {
  const [date, setDate] = useState<Date | undefined>(new Date()) // force new date for never have undefined value

  return (
    <UiDateContext.Provider value={date}>
      <div className="grid grid-cols-2">
        <div>
          <p>UiLayout </p>
          <p>
            Date :{' '}
            {date !== undefined
              ? date.toLocaleString('fr-FR', { dateStyle: 'full' })
              : new Date().toLocaleString('fr-FR', { dateStyle: 'full' })}
          </p>
          {/* <DatePicker /> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              {/* <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                initialFocus
              /> */}
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <SiteListing />
        </div>
      </div>
      <div className="h-[200px] border my-4">
        <p>My content</p>
      </div>
    </UiDateContext.Provider>
  )
}

export default UiLayout

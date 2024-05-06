// import React from 'react'
import { UiDateContext } from '../../Utils/UiContext'
import { useState } from 'react'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

import { cn } from '../../lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { SiteListing } from '../SiteListing'
import { ModeToggle } from '../mode-toggle'

const UiLayout = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2024, 3, 1)) // force new date for never have undefined value

  return (
    <UiDateContext.Provider value={date}>
      <div role="allowSticky" className="">
        <div className=" border-b z-50 sticky top-0 flex justify-between p-8 rounded-lg bg-white/70 dark:bg-black/70 backdrop-blur-2xl     ">
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
            </PopoverContent>
          </Popover>
          <ModeToggle />
        </div>
        <div className=" px-2 sm:px-8 sm:py-8">
          <SiteListing />
        </div>
      </div>
    </UiDateContext.Provider>
  )
}

export default UiLayout

import { createContext, useContext } from 'react'
import { DataPoint } from '../data/types'

// export const UiContext = createContext(undefined)
export const UiContext = createContext<DataPoint | undefined>(undefined)
export const UiDateContext = createContext<Date | undefined>(undefined)

export function useUiContext() {
  const calendarDate = useContext(UiContext)

  if (calendarDate === undefined) {
    throw new Error('FLO : useUiContext must be used with a <UiContext.Provider> as parent')
  }

  // const [calDate, setCalDate] = useState(calendarDate)

  // useEffect(() => {
  //   console.log('calDate vaut :', calDate)
  //   return () => console.log('caldate clean up')
  // }, [calDate])

  return calendarDate
}

export function useUiDateContext() {
  const selectionDate = useContext(UiDateContext)
  if (selectionDate === undefined) {
    throw new Error('FLO : useUiDateContext must be used with a <UiDateContext.Provider> as parent')
  }
  return selectionDate
}

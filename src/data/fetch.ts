import _ from 'lodash'
import { DATA_POINTS, SITES } from './data'
import { DataPoint, Site } from './types'

function delayed<T>(content: () => T, delayMs = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(content()), delayMs)
  })
}

const sameDay = (a: Date, b: Date) =>
  a.getDate() === b.getDate() &&
  a.getMonth() === b.getMonth() &&
  a.getFullYear() === b.getFullYear()

/**
 * Fetch all existing sites.
 */
export const fetchSites = (): Promise<Array<Site>> => delayed(() => _.cloneDeep(SITES))

/**
 * Fetch the hourly data for the site of the given siteId at the given day.
 *
 * @returns An array of data points for every hour, in chronological order.
 */
export const fetchDataForDay = (siteId: number, day: Date): Promise<Array<DataPoint>> =>
  delayed(() => {
    const siteData = DATA_POINTS.find((h) => h.site_id == siteId)
    if (!siteData) {
      return []
    }

    const result = siteData.data.filter((d) => sameDay(day, new Date(d.datetime)))
    return _.cloneDeep(result)
  })

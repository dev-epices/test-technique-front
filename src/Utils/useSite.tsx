import { useEffect, useState } from 'react'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { DataPoint, Site } from '../data/types'

const useSite = () => {
  const [site, setSite] = useState<Site[]>([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchSites()
        setSite(res)
      } catch (err) {
        alert('error')
      }
    }
    fetch()
  }, [])
  return site
}

export default useSite

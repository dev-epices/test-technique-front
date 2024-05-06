import { useEffect, useState } from 'react'
import { fetchSites } from '../data/fetch'
import { Site } from '../data/types'

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

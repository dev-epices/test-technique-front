import React, { useEffect, useState } from 'react'
import { fetchSites, fetchDataForDay } from '../data/fetch'
import { DataPoint, Site } from '../data/types'

function datasHook(siteId: number, day: Date) {
  // const [data, setData] = useState({ hits: [] })
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios('https://hn.algolia.com/api/v1/search?query=redux')
      const result = await (await fetchDataForDay(siteId, day)).map((e) => e)

      setData(result)
    }

    fetchData()
  }, [])

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default datasHook

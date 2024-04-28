import React from 'react'
import { DataPoint } from '../data/types'

interface Props {
  // id: number
  datetime: Date
  production: number
  reference: number
}
const Production = ({ production }: Props) => {
  return (
    <>
      <li className="flex flex-col">
        {/* <span>{datetime.getHours()}h</span> */}
        <span className="">{production}</span>
        {/* <span>{reference} kw/h?</span> */}
      </li>
    </>
  )
}

export default Production

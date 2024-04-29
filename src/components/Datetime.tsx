// import React from 'react'
// import { DataPoint } from '../data/types'

interface Props {
  // id: number
  datetime: Date
  // production: number
  // reference: number
}
const Production = ({ datetime }: Props) => {
  return (
    <>
      <li>
        <span>{datetime.getHours()}h</span>
        {/* <span>{production} kw/h?</span> */}
        {/* <span>{reference} kw/h?</span> */}
      </li>
    </>
  )
}

export default Production

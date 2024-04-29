// import React from 'react'
// import { DataPoint } from '../data/types'

interface Props {
  // id: number
  // datetime: Date
  // production: number
  reference: number
}
const Production = ({ reference }: Props) => {
  return (
    <>
      <li>
        <span>{reference}</span>
      </li>
    </>
  )
}

export default Production

// import React from 'react'
// import { DataPoint } from '../data/types'

interface Props {
  // id: number
  datetime: Date
  production: number
  reference: number
}
export const Production = ({ production }: Props) => {
  return (
    <>
      <li className="flex flex-col">
        {/* <span>{datetime.getHours()}h</span> */}
        <span className=" font-bold">{production}</span>
        {/* <span>{reference} kw/h?</span> */}
      </li>
    </>
  )
}
export const Reference = ({ reference }: Props) => {
  return (
    <>
      <li>
        <span className="">{reference}</span>
      </li>
    </>
  )
}
export const Datetime = ({ datetime }: Props) => {
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

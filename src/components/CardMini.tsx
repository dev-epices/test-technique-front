import React from 'react'
import { Site } from '../data/types'
import { Badge, badgeVariants } from './ui/badge'
import { CardDatas } from './CardDatas'
import { MouseEvent, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface cardProps {
  site: Site
  // date: Date
}

export const CardMini = ({ site }: cardProps) => {
  const { id, name, picture, address, max_power, start_date } = site

  // const [open, setOpen] = useState({ translate: '100% 0' })
  const [open, setOpen] = useState({
    leftPan: { translate: '0 0' },
    rightPan: { translate: '100% 0' },
  })

  const handleClick = () => {
    const openValues = { leftPan: { translate: '-100% 0' }, rightPan: { translate: '0 0' } }
    setOpen(openValues)
  }
  const handleClose = () => {
    const closeValues = { leftPan: { translate: '0 0%' }, rightPan: { translate: '100% 0' } }
    setOpen(closeValues)
  }

  return (
    <>
      <div className="border  w-full relative overflow-hidden">
        <a
          style={open.leftPan}
          onClick={handleClick}
          // className="p-4 flex flex-col sm:flex-row 2xl:flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50"
          className=" cursor-pointer flex justify-between gap-2 p-2 sm:p-4 bg-white dark:bg-slate-900 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:hover:transition-all"
        >
          <div className=" w-[15rem]">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                      src={picture}
                      alt={`image` + name}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    {/* <div className=" ms-4"> */}
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {name}
                    </p>
                    <p className="text-sm line-clamp-2 text-gray-500 dark:text-gray-400">
                      {address}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="border inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> */}
          <div className=" flex flex-col flex-wrap gap-2 items-center justify-center text-base font-semibold text-gray-900 dark:text-white">
            <p> {max_power}</p>
            <Badge variant={'default'} className=" bg-emerald-600">
              <span className="truncate">Pas de données</span>
            </Badge>
          </div>
          <div className=" flex justify-center items-center">
            <MdKeyboardArrowRight />
          </div>
        </a>
        <a onClick={handleClose} className=" cursor-pointer">
          <div
            style={open.rightPan}
            className=" absolute overflow-hidden inset-0 inline-flex gap-2 p-2 sm:p-4 bg-white dark:bg-slate-900 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:hover:transition-all"
          >
            <CardDatas site_id={id} />
          </div>
        </a>
      </div>
    </>
  )
}

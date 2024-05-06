import { Site } from '../data/types'
import { CardDatas } from './CardDatas'
import { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import CardStatus from './CardStatus'

interface cardProps {
  site: Site
}

export const CardMini = ({ site }: cardProps) => {
  const { id, name, picture, address, max_power, start_date } = site

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
      <div className="w-full relative overflow-hidden">
        <a
          className="cursor-pointer flex flex-col justify-between gap-2 p-2 sm:p-4 bg-white dark:bg-slate-900 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_1px_3px] hover:transition-all ease-in-out delay-150 duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:hover:transition-all"
          style={open.leftPan}
          onClick={handleClick}
        >
          <div className="opacity-50 inline-flex space-x-2 justify-between w-full text-sm text-slate-600 dark:text-slate-300">
            <p className="">
              {max_power} <span className="font-normal text-slate-400 text-xs">Max Power</span>
            </p>
            <p>
              <span className="font-normal text-slate-400 text-xs">Started </span>{' '}
              {start_date.toLocaleDateString('fr-FR', { dateStyle: 'medium' })}
            </p>
          </div>
          <div className="flex justify-between gap-2">
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
            <div className=" flex flex-col flex-wrap gap-2 items-center justify-center text-base font-semibold text-gray-900 dark:text-white">
              <CardStatus site_id={id} />
            </div>
            <div className=" flex justify-center items-center">
              <MdKeyboardArrowRight />
            </div>
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

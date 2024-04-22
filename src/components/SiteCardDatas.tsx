// import useData from '../Utils/useData'
import { useUiContext } from '../Utils/UiContext'
import useData from '../Utils/useData'
type SiteCardsProps = {
  id: number
  // calDate: Date
}

const SiteCardDatas = ({ id }: SiteCardsProps) => {
  const calendarDate = useUiContext() // => useUiContext custom hook to be sure calendarDate is not undefined
  console.log(`CONTEXT CHANGE ????? yes for date ${calendarDate.datetime}`)

  const datas = useData(id, calendarDate.datetime)
  // const datas = datasForSiteCardData(id, calendarDate.datetime)

  return (
    <>
      <div className="mt-4 w-full text-xs">
        <ul className="flex space-x-2 border-b pb-1 mb-1">
          <span className="w-24 ">changeDate :</span>{' '}
          <span>
            {calendarDate.datetime.toLocaleString('fr-FR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: 'numeric',
            })}
          </span>
        </ul>
        <ul className="flex space-x-2">
          <li className=" w-24 ">Production :</li>
          {datas.map((e, index) => (
            <li key={index}>{e.production}</li>
          ))}{' '}
        </ul>
        <ul className="flex space-x-2">
          <li className="w-24 ">Référence :</li>
          {datas.map((e, index) => (
            <li key={index}>{e.reference}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SiteCardDatas

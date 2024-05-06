import useSite from '../Utils/useSite'
import { CardMini } from './CardMini'
import { Badge } from './ui/badge'

export const SiteListing = () => {
  const sites = useSite()

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between py-8">
        <h5 className="text-lg font-semibold leading-none text-slate-700 dark:text-slate-500">
          Taux de production par sites
        </h5>
        <ul className="inline-flex justify-center sm:justify-start flex-wrap gap-2">
          <li>
            <Badge className="dark:bg-slate-800 bg-slate-500 dark:text-white">
              194<span className=" opacity-60 pl-2">OK</span>
            </Badge>
          </li>
          <li>
            <Badge className="dark:bg-slate-800 bg-slate-500 dark:text-white">
              75 <span className=" opacity-60 pl-2"> dégradés</span>
            </Badge>
          </li>
          <li>
            <Badge className="dark:bg-slate-800 bg-slate-500 dark:text-white">
              12 <span className=" opacity-60 pl-2">A l'arrêt</span>
            </Badge>
          </li>
          <li>
            <Badge className="dark:bg-slate-800 bg-slate-500 dark:text-white">
              12 <span className=" opacity-60 pl-2">Pas de données</span>
            </Badge>
          </li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
      </div>
    </>
  )
}

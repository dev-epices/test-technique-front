const Todo = () => {
  return (
    <>
      <ul className="dark:border-0 rounded-2xl">
        <p className="font-bold mb-2">Pour un site sélectionné :</p>
        <li>✅ la photo et les différentes informations du site (disponibles dans l'objet Site)</li>
        <li>✅ la production cumulée du site</li>
        <li>
          ✅ le taux de production = le pourcentage de la production cumulée par rapport à la
          production de référence cumulée
        </li>
      </ul>
      <ul className="dark:border-0 rounded-2xl">
        <p className="font-bold mb-2">Status du site</p>
        <li>✅ Pas de données (a une date donnée)</li>
        <li>✅ À l’arrêt (prod nullle)</li>
        <li>✅ Dégradé (inférieur à 50%)</li>
        <li>✅ Ok (else)</li>
      </ul>
      <ul className="dark:border-0 rounded-2xl *:mb-1">
        <p className="font-bold mb-2">Pour chaque jour :</p>
        <ul>
          <p className=" text-slate-500 mb-1">Affichage</p>
          <li>✅ Du nombre de sites dans chaques status</li>
          <li>✅ De la Production cumulé sur l'ensemble des sites</li>
        </ul>
        <ul>
          <p className="text-slate-500 mb-1">Datas fetching</p>
          <li>✅ De la Production cumulé sur l'ensemble des sites affichés</li>
          <li>🟥 De la somme de la production cumulé pour l'ensemble des sites</li>
          <li>🟥 Du nombre de sites dans chaques status</li>
        </ul>
      </ul>
    </>
  )
}

export default Todo

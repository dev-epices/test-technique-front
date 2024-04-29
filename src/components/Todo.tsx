const Todo = () => {
  return (
    <>
      <ul>
        <p className="font-bold mb-2">Pour chaque jour :</p>
        <li>🟥 Somme de la Production cumulé sur l'ensemble des sites</li>
        <li>🟥 Nombre de sites dans chaques status</li>
      </ul>
      <ul>
        <p className="font-bold mb-2">Pour un site sélectionné :</p>
        <li>✅ la photo et les différentes informations du site (disponibles dans l'objet Site)</li>
        <li>✅ la production cumulée du site</li>
        <li>
          ✅ le taux de production = le pourcentage de la production cumulée par rapport à la
          production de référence cumulée
        </li>
      </ul>
      <ul>
        <p className="font-bold mb-2">Status du site</p>
        <li>✅ Pas de données (a une date donnée)</li>
        <li>✅ À l’arrêt (prod nullle)</li>
        <li>✅ Dégradé (inférieur à 50%)</li>
        <li>✅ Ok (else)</li>
      </ul>
    </>
  )
}

export default Todo

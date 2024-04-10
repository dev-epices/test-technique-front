# Test technique front
## Sujet

Nous vous mettons à disposition des données fictives de trois installations de panneaux photovoltaïques (appelées « sites »).

L'exercice est de concevoir une interface permettant **pour chaque jour** d'afficher :

- la somme de la production cumulée sur l'ensemble des sites
- le nombre de sites dans chaque statut (défini plus loin)
- Pour un site sélectionné :
    - la photo et les différentes informations du site (disponibles dans l'objet `Site`)
    - la production cumulée du site
    - le taux de production = le pourcentage de la production cumulée par rapport à la production de référence cumulée
    - le statut du site :
        - « Pas de données » s'il n'y a pas de donnée à cette date
        - « À l'arrêt » si la production est nulle
        - « Dégradé » si le taux de production est inférieur à 50%
        - « OK » sinon

## Nous observerons
- La qualité et l'organisation du code en général.
- La qualité de l'interface et de l'expérience utilisateur.
- L'interface doit convenir pour une centaine de sites, bien que le jeu de données n'en contienne que quelques-uns.

## Autres notes
- Vous êtes libre d'utiliser des bibliothèques JavaScript et/ou CSS si vous le souhaitez.
- Nous acceptons les soumissions en JavaScript ou TypeScript.
- Transmettez-nous votre code sous forme d'archive ou via un dépôt Git.

## Starter
Le code de ce dépôt peut servir pour démarrer.

Pour installer les dépendances :
```
npm install
```

Pour lancer le serveur de développement :
```
npm run dev
```

## Dossier `data/`
**Le contenu de ce dossier ne doit pas être modifié.**

- Le fichier `fetch.ts` contient des fonctions simulant des requêtes asynchrones vers un backend fictif.
- Le fichier `data.ts` contient les données à utiliser et peut être consulté pour en connaître le format. **Les constantes ne doivent pas être directement accédées par le code,** utiliser les fonctions de `fetch.ts` à la place.

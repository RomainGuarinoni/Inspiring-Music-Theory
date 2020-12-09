# Inspiring Music Theory - Lecture de note

Le premier jeux du projet : Un jeux de **lecture de note** développé avec Vue et Vexflow

## Table des matières

1. [Le principe](#Le-principe)
2. [Framework et librairies](#Framework-et-librairies)
3. [Les fonctions](#Les-fonctions)
4. [Améliorations à apporter](#Améliorations-à-apporter)

## Le principe

![](./src/assets/jeux.jpg)

Le jeux est composé d'une partition de 8 notes **générées aléatoirement** entre Do et Si (_il est possible de modifier le choix des notes à afficher sur la partition_).
L'élève dispose de 7 boutons, chacun représentant une note, et doit cliquer sur le bouton correspondant à la note en cours (_celle en orange_).
Tout au long de l'exercice, un chronomètre permet d'afficher le temps que l'élève met a finir l'exercice et le score s'affiche.

Lorsque l'élève a finit, une page s'affiche récapitulant le score et le temps du joueur, ainsi qu'un commentaire sur sa performance et un bouton recommencer.

![](./src/assets/good.jpg)

![](./src/assets/bad.jpg)

## Framework et librairies

Ce mini jeux est dévelloppé avec le framework javascript [Vue.js](https://vuejs.org/).

La librairies [VexFlow](https://github.com/0xfe/vexflow) permet de créer la partition.

## Les fonctions

- Random function

  ```javascript
  created : function(){//randomize}
  ```

  Cette fonction se déclenche lorsque le jeux est crée, et permet de créer aléatoirement un tableaux de 8 notes à partir de ce tableaux de base :

  ```javascript
  noteBase: [
        { note: "Do", value: "c/4" },
        { note: "Re", value: "d/4" },
        { note: "Mi", value: "e/4" },
        { note: "Fa", value: "f/4" },
        { note: "Sol", value: "g/4" },
        { note: "La", value: "a/4" },
        { note: "Si", value: "b/4" },
      ],
  ```

- chrono()
  Permet

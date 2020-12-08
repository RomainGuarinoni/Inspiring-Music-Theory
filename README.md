# Mini jeux lecture de note

Tous les fichiers sont dans **src/components/Minijeux.vue**

## Les commandes git utiles

### POur commencer a codre :

1. git checkout developp ( te mettre sur la branche developp)
2. git pull (récupérer le code du projet)

### pour envoyer ses modifs

1. git add \*
2. git commit -m "<ton message>"
3. git push

## librairies utilisées :

1. Vexflow
2. Vuejs

## Choses à rajouter :

1. Un chronomètre
2. embellir l'interfac
3. gérer le responsive

Voici comment gérter les changeemtns de couleur des notes :

```javascript
   new part1.StaveNote({
        clef: "treble",
        keys: [this.notes[0].value],
        duration: "q",
      }),
      new part1.StaveNote({
        clef: "treble",
        keys: [this.notes[1].value],
        duration: "q",
      }),
      new part1.StaveNote({
        clef: "treble",
        keys: [this.notes[2].value],
        duration: "q",
      }),
      new part1.StaveNote({
        clef: "treble",
        keys: [this.notes[3].value],
        duration: "q",
      }),
    ];
    notes[2].setStyle({
      fillStyle: "orange",
      strokeStyle: "orange",
    });

```

# Mini jeux lecture de note

Tous les fichiers sont dans **src/components**

## Les commandes git utiles

### Pour commencer a coder :

1. git checkout test ( te mettre sur la branche test)
2. git pull (récupérer le code du projet)

### pour envoyer ses modifs

1. git add \*
2. git commit -m "ton message"
3. git push

## librairies utilisées :

1. Vexflow
2. Vuejs

## Choses à rajouter :

- [x] Un chronomètre
- [ ]embellir l'interface
- [ ] gérer le responsive
- [x] Intégrer un curseur

Voici comment gérer les changeemtns de couleur des notes :

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

A chaque fois qu'on clique sur un bouton, la div qui contient la partition est supprimé puis réintégré vide pour re dessinner une nouvelles partitions avec le nouveau curseur

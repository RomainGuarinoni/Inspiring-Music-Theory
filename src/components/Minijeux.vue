<template>
  <div class="all">
    <div class="testBox" :class="{ hidden: finish }">
      <h1>{{ level.diff }}</h1>
      <div class="info">
        <p>Votre score : {{ score }} /8</p>
        <p>Temps : {{ min }} min {{ sec }} sec</p>
      </div>

      <div id="gameBoxInstance">
        <div id="gameBox"></div>
      </div>

      <div class="buttonBox">
        <Button
          @checkAnswer="scoreUpdate"
          @click="display"
          v-for="(item, id) in noteBase"
          :key="item.value"
          :id="id"
          :value="item.value"
          :note="item.note"
          :index="index"
          :notes="notes"
        />
      </div>
    </div>
    <div class="resultBox" :class="{ hidden: !finish }">
      <h1>bravo, tu as finis l'exercice</h1>
      <h2>Voici tes résultats :</h2>
      <div class="result">
        <p>Score : {{ score }} / 8</p>
        <p>temps : {{ min_finish }} min {{ sec_finish }} sec</p>
      </div>
      <p class="comment" v-if="score > 5" style="color:green;">
        Bravo, c'est un bon score
      </p>
      <p class="comment" v-else style="color:red;">
        Tu dois encore t'entrainer...
      </p>
      <button @click="again">Recommencer</button>
    </div>
  </div>
</template>

<script>
import Vex from "vexflow";
import Button from "./Button.vue";
export default {
  name: "HelloWorld",
  components: {
    Button,
  },
  props: {
    gameKey: String,
    level: Object,
  },
  data() {
    return {
      switchValue: false,
      notes: [],
      noteBase: this.level.note,
      noteResult: [],
      score: 0,
      begin: false,
      index: 0,
      finish: false,
      sec: 0,
      min: 0,
      sec_finish: 0,
      min_finish: 0,
    };
  },
  created: function() {
    let note = this.noteBase;
    for (let i = 0; i < 8; i++) {
      let number = Math.floor(Math.random() * this.noteBase.length);
      this.notes[i] = note[number];
    }
    console.log(this.notes);
  },
  mounted: function() {
    console.log("begin");
    this.display();
    this.chrono();
  },
  methods: {
    chrono() {
      setInterval(() => {
        if (this.sec == 59) {
          this.sec = 0;
          this.min++;
        }
        this.sec++;
      }, 1000);
    },
    removeNode() {
      var node = document.getElementById("gameBox");
      node.remove();
      var newNode = document.getElementById("gameBoxInstance");
      newNode.innerHTML = '<div id="gameBox"></div>';
      var div = document.getElementById("gameBox");
      div.style = "height: 200px;";
      div.style.textAlign = "center";
      this.display();
    },
    display() {
      var part1 = Vex.Flow;
      var div = document.getElementById("gameBox");
      var renderer = new part1.Renderer(div, part1.Renderer.Backends.SVG);
      renderer.resize(1000, 500); // Size the SVG
      var context = renderer.getContext();
      // on ajoute un context au renderer
      var stave = new part1.Stave(60, 40, 400); //on dessinne la partition au position 10,40 avec une largeur de 400
      stave.addClef(this.gameKey).addTimeSignature("4/4"); //on, ajoute l'armure treble : clef de sol || bass : clef de fa
      stave.setContext(context).draw();
      var notes = [
        //ajouter des notes
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
      if (this.index < 4) {
        // placement du curseur dans la première partie de la partition ( les 4 premieres notes)
        notes[this.index].setStyle({
          fillStyle: "orange",
          strokeStyle: "orange",
        });
      }
      if (this.noteResult.length >= 1) {
        // changement de couleur des notes précédentes en fonction du résultat sur la premièree partie de la partition
        if (this.noteResult.length < 4) {
          for (let i = 0; i < this.noteResult.length; i++) {
            notes[i].setStyle({
              fillStyle: this.noteResult[i],
              strokeStyle: this.noteResult[i],
            });
          }
        } else {
          for (let i = 0; i < 4; i++) {
            notes[i].setStyle({
              fillStyle: this.noteResult[i],
              strokeStyle: this.noteResult[i],
            });
          }
        }
      }
      var voice = new part1.Voice({ num_beats: 4, beat_value: 4 });
      voice.addTickables(notes);
      part1.Formatter.FormatAndDraw(context, stave, notes); //formater les notes pour qu'elle soient a la bonne place et tiout surt la part
      var part2 = Vex.Flow;
      var stave2 = new part2.Stave(460, 40, 400);
      stave2.mode = part2.Voice.Mode.FULL;
      stave2.setEndBarType(part2.Barline.type.End);
      stave2.setContext(context).draw();
      var notes2 = [
        new part2.StaveNote({
          clef: "treble",
          keys: [this.notes[4].value],
          duration: "q",
        }),
        new part2.StaveNote({
          clef: "treble",
          keys: [this.notes[5].value],
          duration: "q",
        }),
        new part2.StaveNote({
          clef: "treble",
          keys: [this.notes[6].value],
          duration: "q",
        }),
        new part2.StaveNote({
          clef: "treble",
          keys: [this.notes[7].value],
          duration: "q",
        }),
      ];
      if (this.index >= 4 && this.index < 8) {
        // placement du curseur pour la deuxième partie de la partition
        notes2[this.index - 4].setStyle({
          fillStyle: "orange",
          strokeStyle: "orange",
        });
      }
      if (this.noteResult.length >= 5 && this.index < 8) {
        console.log("pass");
        // changement couleur notes precedentes deuxieme partie de la partition
        for (let i = 4; i < this.noteResult.length; i++) {
          notes2[i - 4].setStyle({
            fillStyle: this.noteResult[i],
            strokeStyle: this.noteResult[i],
          });
        }
      }

      var voice2 = new part2.Voice({ num_beats: 4, beat_value: 4 });
      voice2.addTickables(notes);
      part2.Formatter.FormatAndDraw(context, stave2, notes2);
    },
    scoreUpdate(payload) {
      this.index++;
      if (payload.result) {
        this.score++;
        this.noteResult.push("green");
      } else {
        this.noteResult.push("red");
      }
      if (this.index == 8) {
        this.finish = true;
        this.sec_finish = this.sec;
        this.min_finish = this.min;
      }
      this.removeNode();
    },
    again() {
      this.finish = false;
      this.score = 0;
      this.index = 0;
      this.sec = 0;
      this.min = 0;
      this.noteResult = [];
      this.removeNode();
    },
  },
};
</script>

<style scoped>
.begin {
  margin-top: 50px;
  text-align: center;
}
button {
  width: 150px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: rgba(27, 27, 27, 0.726);
  color: white;
  cursor: pointer;
  transition: all ease 200ms;
  outline: none;
}
button:hover {
  transform: scale(1.2);
  font-weight: bold;
  border: 2px solid black;
}
.comment {
  font-size: 1.5em;
  font-weight: bold;
}
.resultBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.result {
  display: flex;
  font-size: 1.2em;
  justify-content: space-between;
  width: 300px;
}
.hidden {
  display: none;
}
h1 {
  text-align: center;
}
#gameBox {
  height: 200px;
  text-align: center;
}
#test {
  color: red;
}
.info {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.info p {
  font-size: 1.3em;
  margin: 0 200px;
}
.buttonBox {
  display: flex;
  justify-content: center;
}
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>

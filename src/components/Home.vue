<template>
  <div class="container">
    <div class="home" v-if="!begin">
      <h1>Mini-jeux Lecture de notes</h1>
      <div class="selection">
        <div class="Select">
          <p>Niveau :</p>
          <select name="level" id="level" v-model="gameLevel">
            <option v-for="level in level" :key="level.diff" :value="level">{{
              level.diff
            }}</option>
          </select>
        </div>
        <div class="Select">
          <p>Clef :</p>
          <select name="key" id="key" v-model="gameKey">
            <option v-for="key in key" :key="key.name" :value="key.value">{{
              key.name
            }}</option>
          </select>
        </div>
        <button @click="beginFunction">Commencer le jeux</button>
      </div>
      <p v-show="error" class="error">Selectionnez le niveau et la clef</p>
    </div>
    <div class="game" v-else>
      <Minijeux :gameKey="gameKey" :level="gameLevel" />
    </div>
  </div>
</template>

<script>
import Minijeux from "./Minijeux";
export default {
  components: {
    Minijeux,
  },
  data() {
    return {
      begin: false,
      error: false,
      gameKey: "",
      gameLevel: "",
      level: [
        {
          diff: "Niveau 1",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
          ],
        },
        {
          diff: "Niveau 2",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
            { note: "Mi", value: "e/4" },
          ],
        },
        {
          diff: "Niveau 3",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
            { note: "Mi", value: "e/4" },
            { note: "Fa", value: "f/4" },
          ],
        },
        {
          diff: "Niveau 4",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
            { note: "Mi", value: "e/4" },
            { note: "Fa", value: "f/4" },
            { note: "Sol", value: "g/4" },
          ],
        },
        {
          diff: "Niveau 5",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
            { note: "Mi", value: "e/4" },
            { note: "Fa", value: "f/4" },
            { note: "Sol", value: "g/4" },
            { note: "La", value: "a/4" },
          ],
        },
        {
          diff: "Niveau 6",
          note: [
            { note: "Do", value: "c/4" },
            { note: "Re", value: "d/4" },
            { note: "Mi", value: "e/4" },
            { note: "Fa", value: "f/4" },
            { note: "Sol", value: "g/4" },
            { note: "La", value: "a/4" },
            { note: "Si", value: "b/4" },
          ],
        },
      ],
      key: [
        {
          name: "Clef de Sol",
          value: "treble",
        },
        {
          name: "Clef de Fa",
          value: "bass",
        },
      ],
    };
  },
  methods: {
    beginFunction() {
      if (this.gameKey == "" || this.gameLevel == "") {
        this.error = true;
      } else {
        this.error = false;
        this.begin = true;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: rgb(252, 1, 1);
}
.game {
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 2.5em;
}
.Select {
  display: flex;
  align-items: center;
}
select {
  margin-left: 30px;
  font-size: 1.3em;
}
.selection {
  text-align: center;
}
p {
  font-size: 2em;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
button {
  outline: none;
  border-radius: 20px;
  border: 1px solid black;
  transition: all ease 200ms;
  width: 250px;
  height: 40px;
  font-size: 1.5em;
}
button:hover {
  transform: scale(1.1);
}
</style>

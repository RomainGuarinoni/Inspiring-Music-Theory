<template>
  <div class="button">
    <button
      :class="{ greenColor: goodAnswer, redColor: badAnswer }"
      class="noteButton"
      @click="
        check();
        colorUpdate();
      "
    >
      {{ note }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: String, // la note du bouton en brut ( ex : g/4)
    index: Number, // le numéro de la note en cours
    note: String, // la notee du bouton en francais ( ex : Do)
    notes: Array, // les notes de la partition
    id: Number,
  },
  data() {
    return {
      goodAnswer: false,
      badAnswer: false,
    };
  },
  methods: {
    check() {
      // fonction qui vérifie la réponse
      let payload;
      if (this.value == this.notes[this.index].value) {
        payload = { result: true };
        this.goodAnswer = true;
        setTimeout(() => {
          this.goodAnswer = false;
        }, 500);
      } else {
        payload = { result: false };
        this.badAnswer = true;
        setTimeout(() => {
          this.badAnswer = false;
        }, 500);
      }
      this.$emit("checkAnswer", payload);
    },
    colorUpdate() {
      this.$emit("uptadeColor");
    },
  },
};
</script>

<style scoped>
.noteButton {
  margin-right: 20px;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease 200ms;
  background: rgb(255, 255, 255);
  outline: none;
}
.greenColor {
  background: green;
}
.redColor {
  background: red;
}
.noteButton:hover {
  transform: scale(1.2);
}
</style>

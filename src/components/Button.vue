<template>
  <div class="button">
      <button class="noteButton" @click="check" >{{note}} </button>
  </div>
</template>

<script>
export default {
    props : {
        value : String, // la note du bouton en brut ( ex : g/4)
        index : Number, // le numéro de la note en cours
        note : String, // la notee du bouton en francais ( ex : Do)
        notes : Array, // les notes de la partition

    },
    methods : {
        check(){ // fonction qui vérifie la réponse
            let payload;
            if(this.value == this.notes[this.index].value){
                payload = {result : true}
            }
            else{
                payload = {result : false}
            }
            this.$emit('checkAnswer', payload);
        }
    }
}
</script>

<style scoped>
.noteButton{
    margin: 20px;
    width: 70px;
    height: 30px;
    border-radius: 20px;
    cursor: pointer;
    transition: all ease 200ms;
    background: rgb(255, 255, 255);
}
.noteButton:hover{
    font-size: 1.3em;
}
</style>
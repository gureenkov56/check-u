<template lang="">
  <div>
    <h2>Вопрос №{{ progress+1 }} / {{ this.$store.state.questionsList[this.$store.state.category].length }}</h2>

    <div id="question">
      {{this.$store.state.questionsList[this.$store.state.category][progress].question}}
    </div>

    <div 
      class="answer-options"
      :class='[
        isShowAnswer && key == this.$store.state.questionsList[this.$store.state.category][progress].rightOption ? "rightOption" : "",
        clickedKey == key &&  key !== this.$store.state.questionsList[this.$store.state.category][progress].rightOption ? "falseOption" : ""
      ]'
      v-for='(option, key) in this.$store.state.questionsList[this.$store.state.category][progress].options'
      @click='checkAnswer(key)'
      :key='key'
    >
      {{option}}
    </div>

    <button v-if='isShowAnswer' @click='nextQuestion'>
      Далее
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      progress: 0,
      isShowAnswer: false,
      clickedKey: undefined,
    }
  },
  methods: {
    nextQuestion: function(){
      this.isShowAnswer = false;
      this.progress++;
      this.clickedKey = undefined;
    },
    checkAnswer: function(clickedKey){
      if(!this.isShowAnswer){
        this.clickedKey = clickedKey;
        let rightKey = this.$store.state.questionsList[this.$store.state.category][this.progress].rightOption;
        this.isShowAnswer = true;
        let gettedObj = {
          idQuestion: this.progress,
          clickedKey: clickedKey
        };
        if(rightKey == clickedKey){
          this.$store.commit('addRightResult', gettedObj);
        } else {
          this.$store.commit('addWrongResult', gettedObj);
        }
      }
    }
  }
}
</script>

<style lang="css">
.answer-options{
  background-color: rgb(224, 224, 224);
  max-width: 500px;
  text-align: left;
  padding: 15px;
  margin: 20px auto;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 4px;
  
}

.rightOption{
  background-color: rgb(0, 207, 93);
}

.falseOption{
  background-color: rgb(255, 143, 143);
}

</style>
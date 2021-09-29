<template lang="">
  <div>
    <h2>Вопрос №{{ progress+1 }} / {{ getTotalCountOfQuestion(getCategory) }}</h2>

    <div id="question">
      {{ getQuestion(getCategory, progress).question }}
      <!-- {{this.$store.state.questionsList[this.$store.state.category][progress].question}} -->
    </div>

    <div 
      class="answer-options"
      :class='[
        isShowButtonNext && key == getQuestion(getCategory, progress).rightOption ? "rightOption" : "",
        //проверка для последнего вопроса
        isShowButtonFinish && key == getQuestion(getCategory, progress).rightOption ? "rightOption" : "",

        clickedKey == key &&  key !== getQuestion(getCategory, progress).rightOption ? "falseOption" : ""
      ]'
      v-for='(option, key) in getQuestion(getCategory, progress).options'
      @click='checkAnswer(key)'
      :key='key'
    >
      {{option}}
    </div>

    <button v-if='isShowButtonNext' @click='nextQuestion'>
      Далее
    </button>
    <button v-if='isShowButtonFinish' @click='finishTest'>
      Закончить тест
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      progress: 0,
      isShowButtonNext: false,
      isShowButtonFinish: false,
      clickedKey: undefined,
    }
  },
  computed: {
    ...mapGetters([
      'getQuestion',
      'getCategory',
      'getTotalCountOfQuestion'
    ])
  },
  methods: {
    nextQuestion: function(){
      this.isShowButtonNext = false;
      this.progress++;
      this.clickedKey = undefined;
    },
    checkAnswer: function(clickedKey){
      if(!this.isShowButtonNext && !this.isShowButtonFinish){
        this.clickedKey = clickedKey;
        let rightKey = this.getQuestion(this.getCategory, this.progress).rightOption;

        if(this.getTotalCountOfQuestion(this.getCategory) == this.progress + 1){
          //если это последний вопрос, то выводим кнопку финиш
          this.isShowButtonFinish = true;
        } else {
          //если нет, то кнопку Далее
          this.isShowButtonNext = true;
        }

        let gettedObj = {
          idQuestion: this.progress,
        };

        if(rightKey == clickedKey){
          this.$store.commit('addRightResult', gettedObj);
        } else {
          this.$store.commit('addWrongResult', gettedObj);
        }
      }
    },
    finishTest: function(){
      this.$store.commit('finishOfTestToggle');
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
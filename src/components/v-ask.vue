<template lang="">
  <div id="ask">
    <div v-if='progress < questionsList[level].length'>
      <h2>Вопрос #{{ progress + 1}} / {{questionsList[level].length}}</h2>
      <p>{{ questionsList[level].[progress].question }}</p>
      <p v-if="isShowAnswer" >{{ questionsList[level].[progress].answer }}</p>
      <div class="buttons">
        <button 
          v-if='!isShowAnswer'
          class='showAnswer' 
          @click='showAnswer'
        >
          Показать ответ
        </button>
        <button 
          v-if='isShowAnswer'
          class='user-answer-false' 
          @click='userAnswerWrong'
        >
          Стоит повторить
        </button>
        <button 
          v-if='isShowAnswer'
          class='user-answer-true' 
          @click='userAnswerRight'
        >
          Я знаю ответ
        </button>
      </div>
    </div>
    <VResult v-else :results='usersResults' />
  </div>
</template>

<script>
import VResult from './v-result.vue';

export default {
  name: 'v-ask',
  components: {
    VResult,
  },
  data(){
    return {
      progress: 0,
      isShowAnswer: false,
      questionsList: {
        begginer: [
          {
            question: 'Вопрос 1',
            answer: 'Ответ 1',
          },
          {
            question: 'Вопрос 2',
            answer: 'Ответ 2',
          },
          {
            question: 'Вопрос 3',
            answer: 'Ответ 3',
          },
          {
            question: 'Вопрос 4',
            answer: 'Ответ 4',
          },
        ],
        junior: [
          {
            question: 'Вопрос 1',
            answer: 'Ответ 1',
          },
          {
            question: 'Вопрос 2',
            answer: 'Ответ 2',
          },
          {
            question: 'Вопрос 3',
            answer: 'Ответ 3',
          },
        ],
      },
      usersResults: {
        wrong: [],
        right: [],
      },
    }
  },
  props: {
    level: {
      type: String
    }
  },  
  methods: {
    showAnswer(){
      this.isShowAnswer = true;
    },
    userAnswerRight(){
      this.usersResults.right.push(this.questionsList[this.level].[this.progress]);
      this.isShowAnswer = false;
      this.progress++;
    },
    userAnswerWrong(){
      this.usersResults.wrong.push(this.questionsList[this.level].[this.progress]);
      this.isShowAnswer = false;
      this.progress++;
    }
  }
}
</script>

<style lang="css">
  .question{
    font-size: 20px;
    margin: 30px;
    padding: 10px;
    box-shadow: 0px 0px 10px 4px rgb(223, 223, 223);
    border-radius: 3px;
  }
  .buttons{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .showAnswer{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 1em;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }
  .showAnswer:hover{
    cursor:pointer;
  }
</style>
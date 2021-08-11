<template lang="">
  <div class="question" v-for="(item, name, index) in questionsList" :key='index'>
    <p>{{item.question}}</p>
    <p @click="showAnswer(index)">Показать ответ</p>
    <p v-show='item.isShowAnswer'>{{item.answer}}</p>
  </div>
</template>

<script>
export default {
  name: 'v-ask',
  data(){
    return {
      questionsList: {
        begginer: {
          1: {
            question: 'Вопрос 1',
            answer: 'Ответ 1',
            result: '',
            isShowAnswer: false
          },
          2: {
            question: 'Вопрос 2',
            answer: 'Ответ 2',
            result: '',
            isShowAnswer: false
          },
          3: {
            question: 'Вопрос 3',
            answer: 'Ответ 3',
            result: '',
            isShowAnswer: false
          },
          4: {
            question: 'Вопрос 4',
            answer: 'Ответ 4',
            result: '',
            isShowAnswer: false
          },
        },
        junior: {
          1: {
            question: 'Вопрос 1',
            answer: 'Ответ 1',
            result: ''
          },
          2: {
            question: 'Вопрос 2',
            answer: 'Ответ 2',
            result: ''
          },
          3: {
            question: 'Вопрос 3',
            answer: 'Ответ 3',
            result: ''
          },
        }
      }
    }
  },
  
  methods: {
    showAnswer(index){
      console.log(index);
      this.questionsList[index].isShowAnswer = true;
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
</style>